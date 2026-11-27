'use client';
import { useEffect,useRef } from 'react';
import { CandlestickSeries, createChart, ColorType, type CandlestickData, type Time } from 'lightweight-charts';
import type { Candle } from '@/lib/market';
export default function PriceChart({candles}:{candles:Candle[]}){
 const target=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!target.current||!candles.length)return;const div=target.current;
 const chart=createChart(div,{width:div.clientWidth,height:350,layout:{background:{type:ColorType.Solid,color:'#0e1725'},textColor:'#91a2bc'},grid:{vertLines:{color:'#1c2a3d'},horzLines:{color:'#1c2a3d'}},rightPriceScale:{borderColor:'#263449'},timeScale:{borderColor:'#263449'}});
 const series=chart.addSeries(CandlestickSeries,{upColor:'#16c79a',downColor:'#f16f80',borderUpColor:'#16c79a',borderDownColor:'#f16f80',wickUpColor:'#16c79a',wickDownColor:'#f16f80'});
 series.setData(candles.map(c=>({time:c.time as Time,open:c.open,high:c.high,low:c.low,close:c.close} as CandlestickData<Time>)));chart.timeScale().fitContent();
 const observer=new ResizeObserver(entries=>{if(entries[0])chart.applyOptions({width:entries[0].contentRect.width})});observer.observe(div);return()=>{observer.disconnect();chart.remove()};
 },[candles]);return <div ref={target} className="w-full min-w-0" aria-label="Daily candlestick chart"/>;
}
