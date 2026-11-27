import { NextRequest,NextResponse } from 'next/server';
import { candles } from '@/lib/sosovalue';
import { calculateSignal } from '@/lib/market';
export async function GET(request:NextRequest){const symbol=request.nextUrl.searchParams.get('symbol')?.toUpperCase()||'BTC';if(!/^[A-Z0-9]{2,12}$/.test(symbol))return NextResponse.json({error:'Invalid symbol'},{status:400});try{const data=await candles(symbol);return NextResponse.json({symbol,candles:data,signal:calculateSignal(data),source:'SoSoValue'});}catch(e){return NextResponse.json({error:e instanceof Error?e.message:'History request failed'},{status:503});}}
