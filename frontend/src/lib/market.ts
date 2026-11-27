export type Coin = { id: string; symbol: string; name: string; price: number; change24h: number; volume24h: number; marketCap: number };
export type Candle = { time: string; open: number; high: number; low: number; close: number; volume: number };
export type Overview = { totalMarketCap: number; marketChange24h: number; totalVolume24h: number; ethGas: number; asOf: number };
export type Signal = { direction: 'BUY'|'SELL'|'WAIT'; score: number; rationale: string[]; sma20: number|null; sma50: number|null; rsi14: number|null; asOf: string };
export const FAVORITES = ['BTC','ETH','SOL','BNB','XRP','DOGE','ADA','AVAX','LINK','DOT'];
export function num(v: unknown): number { const n = Number(v); return Number.isFinite(n) ? n : 0; }
export function formatUsd(v: number, maximumFractionDigits = 2): string { return new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',maximumFractionDigits}).format(v); }
export function compact(v: number): string { return new Intl.NumberFormat('en-US', {notation:'compact', maximumFractionDigits:2}).format(v); }
export function calculateSignal(candles: Candle[]): Signal {
  const closes = [...candles].sort((a,b) => a.time.localeCompare(b.time)).map(c=>c.close).filter(n=>n>0);
  const avg = (n:number)=> closes.length>=n ? closes.slice(-n).reduce((a,b)=>a+b,0)/n : null;
  const sma20=avg(20), sma50=avg(50);
  let rsi14: number|null=null;
  if(closes.length>=15){ let gains=0,losses=0; for(let i=closes.length-14;i<closes.length;i++){const d=closes[i]-closes[i-1];gains+=Math.max(0,d);losses+=Math.max(0,-d);} rsi14=losses===0 ? 100 : 100-(100/(1+gains/losses)); }
  const price=closes[closes.length-1]||0;
  const rationale:string[]=[]; let balance=0;
  if(sma20!==null){ const bullish=price>sma20; balance+=bullish?1:-1; rationale.push(`Last daily close ${bullish?'above':'below'} 20-day moving average (${formatUsd(sma20)}).`); }
  if(sma20!==null&&sma50!==null){const bullish=sma20>sma50;balance+=bullish?1:-1;rationale.push(`20-day moving average ${bullish?'above':'below'} 50-day average (${formatUsd(sma50)}).`);}
  if(rsi14!==null){ if(rsi14<30){balance+=1;rationale.push(`RSI(14) ${rsi14.toFixed(1)}: oversold reading, not a guarantee of a rebound.`);}else if(rsi14>70){balance-=1;rationale.push(`RSI(14) ${rsi14.toFixed(1)}: overbought reading, not a sell guarantee.`);}else{rationale.push(`RSI(14) ${rsi14.toFixed(1)}: neutral momentum band.`);} }
  if(closes.length<20) rationale.push('Not enough historical daily candles for a complete signal.');
  const direction = closes.length<20?'WAIT':balance>=2?'BUY':balance<=-2?'SELL':'WAIT';
  return { direction, score:Math.min(90,Math.max(35,50+Math.abs(balance)*10)),rationale,sma20,sma50,rsi14,asOf:candles.at(-1)?.time??'' };
}
