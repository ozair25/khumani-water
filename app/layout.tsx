import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Khumani Water Solution — Water ATM Installation & Commercial Solutions',
  description: 'Khumani Water Solution provides automated Water ATMs, chilled water dispensers, domestic & commercial RO systems, spare parts, installation, and partnership opportunities.',
  keywords: [
    'Water ATM',
    'Water ATM Installation',
    'Expand Water Business',
    'Water ATM Dealership',
    'Water Dispensing Kiosk',
    'Chilled Water Systems',
    'Commercial RO Plant',
    'Domestic RO Purifier',
    'RO Spare Parts',
    'Water ATM Maintenance',
    'Khumani Water Solution',
  ],
  authors: [{name: 'Khumani Water Solution'}],
  openGraph: {
    title: 'Khumani Water Solution — Water ATM Installation & Commercial Solutions',
    description: 'Automated Water ATMs, chilled water systems, commercial RO plants, spare parts, and partnership opportunities with Khumani Water Solution.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Khumani Water Solution',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khumani Water Solution — Water ATM Installation & Commercial Solutions',
    description: 'Automated Water ATMs, chilled water systems, commercial RO plants, spare parts, and partnership opportunities with Khumani Water Solution.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-[#243650] bg-white selection:bg-[#29A9F5]/20 selection:text-[#062B63]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
