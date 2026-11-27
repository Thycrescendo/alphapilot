import { FAVORITES, num, type Candle, type Coin, type Overview } from './market';
const ROOT='https://openapi.sosovalue.com/openapi/v1';
function unwrap<T>(body: unknown): T {
  if(Array.isArray(body)) return body as T;
  if(typeof body !== 'object'||body===null) throw Error('Unexpected SoSoValue response');
  const d=body as Record<string,unknown>;
  if(d.code!==undefined && d.code!==0 && d.code!=='0') throw Error(String(d.message??'SoSoValue API error'));
  return (d.data??body) as T;
}
async function get<T>(path:string, seconds=60):Promise<T>{
  const key=process.env.SOSOVALUE_API_KEY;
  if(!key) throw Error('SOSOVALUE_API_KEY is missing. Add it to frontend/.env.local and restart Next.js.');
  const res=await fetch(`${ROOT}${path}`,{headers:{'x-soso-api-key':key},next:{revalidate:seconds}});
  if(!res.ok) throw Error(`SoSoValue responded HTTP ${res.status}. Check key, quota, and access.`);
  return unwrap<T>(await res.json());
}
type Listing = {currency_id:string; symbol:string;name:string};
async function list():Promise<Listing[]> { const raw=await get<Listing[]>('/currencies',3600); if(!Array.isArray(raw)) throw Error('Currency list is not an array');return raw; }
function resolveCoins(rows:Listing[]):Listing[]{ return FAVORITES.map(symbol=>rows.find(r=>String(r.symbol).toUpperCase()===symbol)).filter((r):r is Listing=>!!r); }
export async function markets():Promise<{coins:Coin[]; errors:string[]}> {
 const rows=resolveCoins(await list());
 const settled=await Promise.allSettled(rows.map(async (r)=>{
  const s=await get<Record<string,unknown>>(`/currencies/${encodeURIComponent(r.currency_id)}/market-snapshot`,60);
  return {id:r.currency_id,symbol:r.symbol.toUpperCase(),name:r.name,price:num(s.price),change24h:num(s.change_pct_24h),volume24h:num(s.turnover_24h),marketCap:num(s.marketcap)} as Coin;
 }));
 const errors=settled.flatMap((s,i)=>s.status==='rejected'?[`${rows[i].symbol}: ${String(s.reason)}`]:[]);
 return {coins:settled.filter((s):s is PromiseFulfilledResult<Coin>=>s.status==='fulfilled').map(s=>s.value).filter(c=>c.price>0),errors};
}
export async function candles(symbol:string):Promise<Candle[]> {
 const row=(await list()).find(r=>r.symbol.toUpperCase()===symbol.toUpperCase());
 if(!row) throw Error('Asset not found in SoSoValue currency catalog');
 const raw=await get<Record<string,unknown>[]>(`/currencies/${encodeURIComponent(row.currency_id)}/klines?interval=1d&limit=90`,300);
 if(!Array.isArray(raw)) throw Error('Unexpected candles response');
 return raw.map(r=>({time:new Date(num(r.timestamp)).toISOString().slice(0,10),open:num(r.open),high:num(r.high),low:num(r.low),close:num(r.close),volume:num(r.volume)})).filter(c=>c.close>0&&c.high>=c.low).sort((a,b)=>a.time.localeCompare(b.time));
}
export async function overview():Promise<Overview>{
 const s=await get<Record<string,unknown>>('/market/overview',60);
 return {totalMarketCap:num(s.total_market_cap),marketChange24h:num(s.total_market_cap_change_pct),totalVolume24h:num(s.total_volume_24h),ethGas:num(s.eth_gas_gwei),asOf:num(s.as_of)};
}
