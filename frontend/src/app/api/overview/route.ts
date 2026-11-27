import { NextResponse } from 'next/server';
import { overview } from '@/lib/sosovalue';
export async function GET(){try{return NextResponse.json({...await overview(),source:'SoSoValue'});}catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Overview request failed'},{status:503});}}
