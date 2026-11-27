import { NextResponse } from 'next/server';
import { markets } from '@/lib/sosovalue';
export async function GET(){try { const data=await markets();return NextResponse.json({...data, source:'SoSoValue',retrievedAt:new Date().toISOString()}); }catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Market request failed'},{status:503});}}
