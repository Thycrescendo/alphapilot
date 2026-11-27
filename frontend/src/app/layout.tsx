import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'AlphaPilot AI | Market Intelligence Terminal',description:'Verified SoSoValue market data, explainable trading signals, and safe paper-trading workflows.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
