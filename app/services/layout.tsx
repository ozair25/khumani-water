import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation & Services — Water ATM Setup, RO Repair & AMC | Khumani',
  description: 'Water ATM installation, commercial & domestic RO setup, breakdown repairs, filter cartridge replacements, and Annual Maintenance Contracts (AMC) with Khumani Water Solution.',
  openGraph: {
    title: 'Installation & Services — Water ATM Setup, RO Repair & AMC | Khumani',
    description: 'Water ATM installation, commercial & domestic RO setup, breakdown repairs, filter cartridge replacements, and Annual Maintenance Contracts (AMC) with Khumani Water Solution.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
