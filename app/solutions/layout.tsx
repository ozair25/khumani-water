import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions & Products — Water ATMs, Commercial RO & Chilled Systems | Khumani',
  description: 'Explore Khumani Water Solution products: automated Water ATMs, commercial RO plants, chilled water dispensers, domestic purifiers, and genuine RO spare parts.',
  openGraph: {
    title: 'Solutions & Products — Water ATMs, Commercial RO & Chilled Systems | Khumani',
    description: 'Explore Khumani Water Solution products: automated Water ATMs, commercial RO plants, chilled water dispensers, domestic purifiers, and genuine RO spare parts.',
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
