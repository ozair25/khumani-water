export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacities: string[];
  features: string[];
  suitableFor: string;
  category: 'water-atm' | 'chiller' | 'ro-system' | 'spares';
  badge?: string;
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Droplets' | 'Leaf' | 'ShieldCheck' | 'Truck' | 'Headphones' | 'Award' | 'Sparkles' | 'Heart' | 'Wrench' | 'TrendingUp' | 'MapPin' | 'Coins' | 'Store' | 'Building2';
}

export interface GoalItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Users' | 'Shield' | 'Sparkles' | 'Settings';
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: 'atm' | 'business' | 'installation' | 'products' | 'service';
}

export interface InstallationStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ApplicationLocation {
  id: string;
  name: string;
  tagline: string;
  description: string;
  recommendedModel: string;
  footfallImpact: string;
  iconName: string;
}

export const SITE_CONFIG = {
  brandName: 'Khumani Water Solution',
  brandShort: 'Khumani',
  tagline: 'Clean Water • Healthy People • Brighter Tomorrow',
  
  // Hero section configured specifically per user brief
  hero: {
    eyebrow: 'WATER ATM & COMMERCIAL SOLUTIONS',
    headlineMain: 'KHUMANI WATER SOLUTION',
    headlineHighlight: '',
    copy: 'Accelerate community water reach and commercial growth with reliable Water ATM installations, commercial RO plants, and chilled water dispensing systems built for uninterrupted performance.',
    primaryCtaText: 'Enquire About Water ATM',
    secondaryCtaText: 'WhatsApp Us',
  },

  // Real verified social link
  instagramUrl: 'https://www.instagram.com/aariz_khumani_brand/',
  
  // Contact & WhatsApp coordinates
  contact: {
    phoneDisplay: '+91 98765 43210',
    phoneTel: '+919876543210',
    whatsappNumber: '919876543210',
    whatsappDisplay: '+91 98765 43210',
    emailDisplay: 'contact@khumaniwater.com',
    locationDisplay: 'Kanadia Main Road, Khajrana, Indore',
    workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  },

  // Navigation Items (4 Primary Pages)
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Solutions & Products', href: '/solutions' },
    { label: 'Installation & Services', href: '/services' },
    { label: 'About & Contact', href: '/about' },
  ],

  // 5 Benefits strip items
  benefits: [
    {
      id: 'purification',
      title: 'Water Purification',
      description: 'Tested & Quality Assured',
      iconName: 'Droplets',
    },
    {
      id: 'chilled',
      title: 'Chilled & Normal Water',
      description: 'Dual-Temp Dispensing',
      iconName: 'Leaf',
    },
    {
      id: 'installation',
      title: 'Installation & Service',
      description: 'Professional Setup',
      iconName: 'ShieldCheck',
    },
    {
      id: 'quality',
      title: 'Quality-Focused Solutions',
      description: 'Durable Components',
      iconName: 'Truck',
    },
    {
      id: 'support',
      title: 'Customer Support',
      description: 'Dedicated Assistance',
      iconName: 'Headphones',
    },
  ] as BenefitItem[],

  // Promotional Banner copy
  promoBanner: {
    eyebrow: 'WATER ATM EXPANSION',
    title: 'Water Solutions for Homes, Businesses & Communities',
    subtitle: 'Explore options for residential, commercial, and public-use requirements.',
    cta: 'Explore Solutions',
  },

  // Mission / Business Goals
  mission: {
    eyebrow: 'OUR MISSION',
    heading: 'Our Business Goals',
    copy: 'Our aim is to provide practical water purification and dispensing solutions supported by responsive installation and maintenance services.',
    quote: 'Think Pure\nLive Better',
    goals: [
      {
        id: 'customer',
        title: 'Customer-Focused Solutions',
        description: 'Providing tailored drinking water setups suited to your space, daily volume, and budget.',
        iconName: 'Users',
      },
      {
        id: 'service',
        title: 'Reliable Service Support',
        description: 'Dedicated maintenance, responsive repair callouts, and genuine spare parts availability.',
        iconName: 'Shield',
      },
      {
        id: 'improvement',
        title: 'Continuous Improvement',
        description: 'Steadily upgrading our components, dispensing electronics, and filtration efficiency.',
        iconName: 'Sparkles',
      },
    ] as GoalItem[],
  },

  // Trust Strip
  trustStrip: [
    {
      id: 'product-options',
      title: 'Product Options',
      description: 'Diverse models for varied volume needs',
      iconName: 'Award',
    },
    {
      id: 'installation-support',
      title: 'Installation Support',
      description: 'Guidance and professional setup assistance',
      iconName: 'Wrench',
    },
    {
      id: 'repair-maintenance',
      title: 'Repair & Maintenance',
      description: 'Long-term upkeep and genuine spares',
      iconName: 'ShieldCheck',
    },
    {
      id: 'customer-care',
      title: 'Customer Care',
      description: 'Dedicated support for enquiries and service',
      iconName: 'Heart',
    },
  ] as BenefitItem[],

  // Working Concept of Water ATMs
  waterAtmConcept: {
    heading: 'Automated Water ATM Dispensing Solutions',
    subheading: 'How Modern Water ATMs Deliver Safe Hydration & Commercial Scalability',
    conceptOverview:
      'A Water ATM is an automated, self-service water vending station that dispenses purified, mineral-balanced drinking water using Coin acceptors, RFID smart cards, or direct push-button controls. Housed in heavy-gauge SS 304 food-grade stainless steel with continuous filtration and digital metering, it eliminates manual jar lifting, reduces plastic bottle waste, and provides reliable 24/7 hydration for public and commercial locations.',
    workingPillars: [
      {
        id: 'filtration',
        title: 'Multi-Stage Purification',
        description: 'Raw water undergoes sediment filtration, activated carbon treatment, high-rejection RO membrane, and UV/Ozone sterilization to reach ideal potable standards.',
      },
      {
        id: 'dispensing',
        title: 'Smart Automated Dispense',
        description: 'Configurable with coin mechanisms, contactless RFID member cards, or push buttons. Dispenses exact calibrated volume (1L, 5L, 20L) per transaction.',
      },
      {
        id: 'monitoring',
        title: 'Digital Metering & Controls',
        description: 'Built-in flow meters and digital controllers monitor daily volume, filter health, water pressure, and dispensing transactions with high accuracy.',
      },
      {
        id: 'construction',
        title: 'SS 304 Food-Grade Enclosure',
        description: 'Vandal-resistant, weather-durable stainless steel body with insulated water storage tank, leak-proof stainless fittings, and optional solar/inverter compatibility.',
      },
    ],
  },

  // Suitability for Locations (Schools, Markets, Residential, Offices, Public Spaces)
  suitableLocations: [
    {
      id: 'markets',
      name: 'Markets & Commercial Hubs',
      tagline: 'High Footfall Public Commerce',
      description: 'Ideal for busy shopping streets, local bazaars, vegetable markets, and wholesale commercial hubs where shoppers and vendors need continuous, low-cost hydration.',
      recommendedModel: '500 LPH – 1000 LPH Dual Tap ATM',
      footfallImpact: 'High daily volume; coin and card dispensing options.',
      iconName: 'Store',
    },
    {
      id: 'schools',
      name: 'Schools & Educational Campuses',
      tagline: 'Safe Hydration for Students & Staff',
      description: 'Ensures students and faculty have access to clean, hygienic drinking water throughout the day. Replaces heavy bottled cans with automated student RFID cards or push buttons.',
      recommendedModel: '250 LPH – 500 LPH with Optional Chilling',
      footfallImpact: 'Peak scheduled demand during recesses and lunch hours.',
      iconName: 'School',
    },
    {
      id: 'residential',
      name: 'Residential Areas & Housing Colonies',
      tagline: 'Dependable Neighborhood Source',
      description: 'Installed in apartment complexes, gated layouts, and suburban townships to provide households with 20-liter refill convenience at affordable community rates.',
      recommendedModel: '500 LPH Stainless Steel Automated ATM',
      footfallImpact: 'Consistent morning and evening residential refills.',
      iconName: 'Home',
    },
    {
      id: 'offices',
      name: 'Offices & Corporate Tech Parks',
      tagline: 'Clean Corporate Hydration',
      description: 'Eliminates messy 20-liter jar handling in corporate pantries. Delivers chilled and normal mineral-balanced water with modern aesthetic appeal.',
      recommendedModel: 'Chilled Water ATM / High-Capacity Dispenser',
      footfallImpact: 'Continuous workplace usage with minimal maintenance.',
      iconName: 'Building2',
    },
    {
      id: 'transit',
      name: 'Public Spaces & Transit Terminals',
      tagline: 'Bus Stands, Metro & Railway Stations',
      description: 'Provides weary commuters and travelers with immediate access to pure, refreshing drinking water at all hours with robust weatherproof stainless housing.',
      recommendedModel: '1000 LPH Heavy-Duty Dual Spout ATM',
      footfallImpact: 'Round-the-clock transient public traffic.',
      iconName: 'MapPin',
    },
  ] as ApplicationLocation[],

  // Honest Benefits of Water ATMs (Business Opportunities, Recurring Revenue Potential - No guaranteed profits)
  atmBenefits: {
    heading: 'Business Opportunities & Operational Benefits of Water ATMs',
    subheading: 'Why entrepreneurs, site owners, and water distributors are adding automated dispensing',
    disclaimer:
      'Disclaimer: Khumani Water Solution does not guarantee specific revenue, profits, or returns. Any recurring income depends entirely on location footfall, raw water quality, power availability, operating costs, pricing model, local consumer demand, and owner management.',
    cards: [
      {
        id: 'recurring',
        title: 'Potential for Recurring Revenue',
        description: 'Automated dispensing can create daily cash or smart-card collections from repeat community refills. Viability varies by local demand, competitive alternatives, and site footfall.',
        iconName: 'TrendingUp',
      },
      {
        id: 'convenience',
        title: 'Convenient 24/7 Drinking Access',
        description: 'Self-service automated dispensing provides users instant water anytime without waiting for delivery trucks, manual store hours, or jar exchange queues.',
        iconName: 'Droplets',
      },
      {
        id: 'flexible',
        title: 'Flexible Installation Footprint',
        description: 'Water ATMs can be integrated into wall-mount kiosks, standalone stainless cabins, or combined with existing commercial water treatment plants.',
        iconName: 'MapPin',
      },
      {
        id: 'plastic-free',
        title: 'Reduced Single-Use Plastic Waste',
        description: 'Encourages users to bring their own bottles and jars, substantially cutting down single-use plastic disposal in surrounding communities.',
        iconName: 'Leaf',
      },
      {
        id: 'low-overhead',
        title: 'Minimal Operator Overhead',
        description: 'Automated coin slots and RFID cards eliminate the requirement for continuous manual cashiering, reducing day-to-day staffing expenses.',
        iconName: 'Coins',
      },
      {
        id: 'scalability',
        title: 'Modular Expansion Potential',
        description: 'Start with a single machine in a prime location and expand to multi-unit networks or dealership partnerships as your market awareness grows.',
        iconName: 'Award',
      },
    ],
  },

  // 5-Step Installation & Setup Workflow
  installationWorkflow: {
    heading: 'End-to-End Installation & Setup Process',
    subheading: 'From your first enquiry to machine commissioning and lifelong after-sales support',
    steps: [
      {
        step: 1,
        title: 'Enquiry & Water Assessment',
        subtitle: 'Source Evaluation',
        description: 'Connect with our team via phone or WhatsApp. We review your location, intended user volume, and test raw water source parameters (TDS, hardness, microbiological indicators).',
        deliverables: ['Water test evaluation', 'Capacity sizing advice', 'Preliminary project estimate'],
      },
      {
        step: 2,
        title: 'Site Assessment & Planning',
        subtitle: 'Footprint & Utilities',
        description: 'We assess the physical site layout to verify inlet water connection, electrical power stability, wastewater drainage, and safe pedestrian accessibility.',
        deliverables: ['Plumbing and electrical blueprint', 'Space layout verification', 'Installation checklist'],
      },
      {
        step: 3,
        title: 'Machine Selection & Sizing',
        subtitle: 'Customized Configuration',
        description: 'Choose the optimal ATM capacity (250, 500, or 1000 LPH), dispensing mechanism (Coin, RFID card, or Push-Button), and optional chilled water module.',
        deliverables: ['System specification sign-off', 'Custom branding fascia', 'Fabrication & factory bench testing'],
      },
      {
        step: 4,
        title: 'Professional Installation',
        subtitle: 'On-Site Commissioning',
        description: 'Our skilled technicians deliver the equipment, perform pipe fitting, connect pre-filtration skids, calibrate dispensing flow, and test water output purity.',
        deliverables: ['On-site physical setup', 'Flow calibration', 'Owner operator training'],
      },
      {
        step: 5,
        title: 'After-Sales & Maintenance Support',
        subtitle: 'Preventive Care & AMC',
        description: 'Enjoy peace of mind with routine filter cartridge replacements, membrane cleaning, spare parts backup, and rapid technician dispatch for troubleshooting.',
        deliverables: ['Scheduled maintenance visits', 'Genuine spare parts access', 'Direct hotline technical support'],
      },
    ] as InstallationStep[],
  },

  // Products List: Water ATM (Flagship) + Chilled Systems + Commercial RO + Domestic RO
  products: [
    {
      id: 'water-atm',
      name: 'Automated Water ATM',
      tagline: 'Flagship Commercial Dispensing Kiosk',
      description: 'Automated, coin and smart-card operated water dispensing kiosk engineered for high-traffic community, institutional, and commercial sites.',
      capacities: ['250 LPH', '500 LPH', '1000 LPH'],
      features: [
        'Dual Coin & RFID Smart Card Dispensing',
        'Heavy Gauge SS 304 Food-Grade Enclosure',
        'Digital Flow Meter & Transaction Logger',
        'Integrated Multi-Stage RO + UV Filtration',
        'Optional Chilled Water Dispense Tap',
      ],
      suitableFor: 'Bus Stands, Markets, Schools, Residential Colonies, Hospitals',
      category: 'water-atm',
      badge: 'Flagship Product',
      specifications: [
        { label: 'Dispense Mechanism', value: 'Multi-Coin / RFID Contactless Card / Push Button' },
        { label: 'Storage Tank', value: '200L to 1000L Insulated Stainless Steel SS 304' },
        { label: 'Filtration Stages', value: 'Sediment + Carbon + High-TDS RO + UV + Mineral Cartridge' },
        { label: 'Power Rating', value: '220V AC / Solar Inverter Compatible' },
        { label: 'Flow Accuracy', value: '±1.5% Digital Pulse Flow Sensor' },
      ],
    },
    {
      id: 'chilled-water',
      name: 'Commercial Chilled Water Systems',
      tagline: 'High-Efficiency Instant Water Coolers',
      description: 'Heavy-duty water cooling dispensers designed for schools, corporate tech parks, gyms, and commercial premises demanding rapid chilled hydration.',
      capacities: ['50 Ltr', '100 Ltr', '200 Ltr'],
      features: [
        'Rapid Chill Food-Grade Evaporator Coil',
        'Dual Taps: Chilled & Ambient Temperature',
        'Heavy-Duty Low-Noise Hermetic Compressor',
        'SS 304 Stainless Steel Inner & Outer Panels',
      ],
      suitableFor: 'Colleges, Corporate Cafeterias, Gyms, Factory Floors, Auditoriums',
      category: 'chiller',
      badge: 'High Demand',
      specifications: [
        { label: 'Cooling Output', value: '40L to 180L per hour' },
        { label: 'Temperature Range', value: '8°C to 16°C Adjustable Thermostat' },
        { label: 'Compressor', value: 'High Ambient Temperature Rated Hermetic Unit' },
        { label: 'Insulation', value: 'High-Density Injected PUF Insulation' },
      ],
    },
    {
      id: 'commercial-ro',
      name: 'Commercial RO Purification Plants',
      tagline: 'High-Capacity Industrial & Commercial Skids',
      description: 'Robust skid-mounted RO plants for restaurants, hotels, hospitals, and commercial water packaging or bulk dispensing operations.',
      capacities: ['250 LPH', '500 LPH', '1000+ LPH'],
      features: [
        'Multi-Media Sand & Activated Carbon Vessels',
        'Industrial High-Rejection TFC RO Membranes',
        'Stainless Steel High-Pressure Booster Pump',
        'Digital TDS, Flow & Pressure Monitoring Panel',
      ],
      suitableFor: 'Hotels, Production Units, Hostels, Packaging Units, Hospitals',
      category: 'ro-system',
      badge: 'Industrial Grade',
      specifications: [
        { label: 'Feed Water TDS', value: 'Handles up to 3000 ppm raw water' },
        { label: 'Membrane Type', value: '8040 / 4040 Industrial Polyamide Thin Film' },
        { label: 'Frame Material', value: 'Powder-Coated MS / SS 304 Skid Frame' },
        { label: 'Automation', value: 'Automatic Low/High Pressure Cutoff & Auto Flush' },
      ],
    },
    {
      id: 'domestic-ro',
      name: 'Domestic RO Purifiers',
      tagline: 'Compact Residential Multi-Stage Systems',
      description: 'High-grade compact RO purifiers with alkaline mineral retention and ultra-quiet booster pumps for modern residential kitchens.',
      capacities: ['12 Liters', '15 Liters'],
      features: [
        '7-Stage Filtration with Alkaline Mineralizer',
        'Ultra-Quiet High-Pressure Booster Pump',
        'Food-Grade Detachable Storage Tank',
        'Auto Shut-Off with Tank Full Sensor',
      ],
      suitableFor: 'Apartments, Individual Homes, Private Offices, Clinics',
      category: 'ro-system',
      badge: 'Residential',
      specifications: [
        { label: 'Purification Speed', value: '15 Liters per Hour' },
        { label: 'Membrane', value: '75 / 100 GPD High Recovery Membrane' },
        { label: 'Mounting', value: 'Wall Mount or Countertop Placement' },
      ],
    },
  ] as ProductItem[],

  // Spare Parts, Servicing & AMC offerings
  secondaryOfferings: [
    {
      id: 'ro-spares',
      name: 'Genuine RO Spare Parts & Consumables',
      description: 'High-grade spun polypropylene filters, granular and block carbon cartridges, 4040/8040 RO membranes, heavy-duty booster pumps, solenoid valves, and digital flow sensors.',
      iconName: 'Wrench',
    },
    {
      id: 'installation-repair',
      name: 'Professional Installation & Breakdown Repair',
      description: 'On-demand technician visits for pipeline integration, pump replacement, electrical control board troubleshooting, pressure balancing, and leak rectification.',
      iconName: 'ShieldCheck',
    },
    {
      id: 'amc-maintenance',
      name: 'Annual Maintenance Contracts (AMC)',
      description: 'Structured preventive maintenance contracts including scheduled filter cartridge swaps, chemical CIP membrane descaling, water quality testing, and priority repair response.',
      iconName: 'Sparkles',
    },
  ],

  // FAQs updated for Water ATM expansion and business clarity
  faqs: [
    {
      question: 'What is a Water ATM and how does the business model work?',
      answer:
        'A Water ATM is an automated self-service station that purifies and dispenses safe drinking water when customers insert coins or tap an RFID smart card. Entrepreneurs or site owners can install a machine in high-footfall locations (markets, schools, transport hubs) to provide affordable drinking water. Potential income depends on local footfall, raw water quality, power availability, operating costs, and consumer pricing. Khumani Water Solution does not guarantee profits.',
      category: 'business',
    },
    {
      question: 'What are the site and utility requirements for installing a Water ATM?',
      answer:
        'A typical Water ATM requires a covered or semi-covered footprint of roughly 15 to 25 square feet, a continuous or overhead raw water supply source, a single-phase (220V AC) electrical socket (solar/inverter compatible options available), and a basic drain line for RO reject water.',
      category: 'installation',
    },
    {
      question: 'What capacities of Water ATMs do you manufacture and install?',
      answer:
        'We supply Water ATM systems ranging from 250 LPH (Liters Per Hour) to 500 LPH and 1000 LPH, equipped with 200L to 1000L insulated SS 304 food-grade buffer tanks. We also offer optional chilled water dispensing modules for hot summer climates.',
      category: 'atm',
    },
    {
      question: 'Can I expand an existing water business or convert to a Khumani Water ATM?',
      answer:
        'Yes. If you currently operate a 20-liter jar delivery business or a water shop, installing an automated Water ATM allows you to serve walk-in customers 24/7 without manual cashiering, reducing labor dependency and delivery delays.',
      category: 'business',
    },
    {
      question: 'What kind of after-sales support and spare parts do you provide?',
      answer:
        'Khumani Water Solution provides complete after-sales support: initial operator training, routine filter replacements, spare parts inventory (membranes, booster pumps, flow meters, coin validators, RFID cards), and Annual Maintenance Contracts (AMC) for long-term reliability.',
      category: 'service',
    },
    {
      question: 'How do I enquire about a dealership or partnership opportunity?',
      answer:
        'You can fill out the Partnership & Installation Enquiry form on our website selecting "Dealership / Franchise Opportunity" or connect directly via WhatsApp. Our commercial team will evaluate your city or region and share equipment catalogues, technical specs, and installation guidance.',
      category: 'business',
    },
  ] as FaqItem[],

  // 5 Comparison Columns highlighting Water ATM vs Traditional Alternatives
  comparisonOptions: [
    {
      id: 'store',
      title: 'Bottled Water Jars (20L)',
      isFeatured: false,
      badge: 'Manual & Inconvenient',
      points: [
        'Heavy manual lifting and delivery delays',
        'Risk of plastic degradation in sunlit storage',
        'Recurring high per-jar expenditure',
        'Dependency on delivery agent schedules',
        'Frequent hygiene concerns on jar caps',
      ],
    },
    {
      id: 'borewell',
      title: 'Raw Borewell / Local Tap',
      isFeatured: false,
      badge: 'Unpurified Source',
      points: [
        'Unpredictable TDS, salinity & hardness',
        'Seasonal biological and pipeline contaminants',
        'Causes severe pipe scaling and appliance ruin',
        'Requires boiling before drinking',
        'Unsuitable for public or corporate supply',
      ],
    },
    {
      id: 'khumani',
      title: 'Khumani Water ATM Solution',
      isFeatured: true,
      badge: '★ Smart Business & Community Choice',
      points: [
        'Continuous 24/7 automated coin & RFID card dispensing',
        'Heavy-gauge food-grade SS 304 construction',
        'Multi-stage RO + UV + mineral balance filtration',
        'Optional instant chilled water dispensing',
        'Eliminates single-use plastic bottles',
        'End-to-end installation, spares & AMC maintenance',
      ],
    },
    {
      id: 'filter',
      title: 'Basic Gravity / Mesh Filter',
      isFeatured: false,
      badge: 'Limited Filtration',
      points: [
        'Only filters large physical sediment particles',
        'Cannot reduce heavy dissolved solids (TDS)',
        'Extremely slow drip rate for crowds',
        'No automated dispensing or metering',
        'No cooling or temperature regulation',
      ],
    },
    {
      id: 'tap',
      title: 'Direct Municipal Supply',
      isFeatured: false,
      badge: 'Variable Quality',
      points: [
        'Strong chlorine aroma and chemical taste',
        'Rusty old municipal supply pipelines',
        'Supply restricted to fixed morning hours',
        'Inconsistent pressure during peak hours',
        'No real-time quality assurance',
      ],
    },
  ],
};

export const KHUMANI_REAL_IMAGES = [
  'https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003945/Khumani_Water_ATM_Community_Service_iadjv3.png',
  'https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003945/Khummani_Water_Kiosk_Refill_Scene_dkfwfc.png',
  'https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003944/Khumani_Water_ATM_School_Plaza_wa0a0i.png',
  'https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003945/Khumani_Water_Purification_Showroom_vjvvfg.png',
];
