import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us & Contact — Khumani Water Solution',
  description: 'Learn about Khumani Water Solution, view our equipment gallery, and contact us for Water ATM installation, commercial RO projects, and dealership opportunities.',
  openGraph: {
    title: 'About Us & Contact — Khumani Water Solution',
    description: 'Learn about Khumani Water Solution, view our equipment gallery, and contact us for Water ATM installation, commercial RO projects, and dealership opportunities.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
