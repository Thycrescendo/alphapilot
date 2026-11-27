import { NextRequest,NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';
import { candles } from '@/lib/sosovalue';
import { calculateSignal } from '@/lib/market';
const schema=z.object({symbol:z.string().regex(/^[A-Z0-9]{2,12}$/)});
export async function POST(request:NextRequest){
 try{
  if(!process.env.OPENAI_API_KEY)return NextResponse.json({error:'OPENAI_API_KEY not configured; rule-based signals remain available.'},{status:503});
  const body=schema.parse(await request.json());const series=await candles(body.symbol);const signal=calculateSignal(series);
  const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
  const response=await client.responses.create({model:process.env.OPENAI_MODEL||'gpt-4.1-mini',instructions:'You are a cautious crypto market analyst. Explain ONLY the supplied computed metrics. Do not invent news, certainty, price targets, or profits. Provide a concise neutral explanation, include uncertainty, and clarify this is not financial advice.',input:JSON.stringify({symbol:body.symbol,signal,lastDailyClose:series.at(-1)?.close,dataTimestamp:signal.asOf}),max_output_tokens:250});
  return NextResponse.json({analysis:response.output_text,signal,source:'SoSoValue candles + OpenAI explanation'});
 }catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Analysis failed'},{status:500});}
}
