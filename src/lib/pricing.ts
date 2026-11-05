export type PriceOption = {
  label: string;
  amount: number;
  startingAt?: boolean;
};

export type PriceService = {
  name: string;
  options: PriceOption[];
  badge?: string;
  note?: string;
  duration?: string;
};

export type PricingCategory = {
  id: string;
  title: string;
  description?: string;
  services: PriceService[];
};

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "mobile",
    title: "Mobile detailing",
    description: "Professional detailing at your home, office, or marina.",
    services: [
      {
        name: "Essential Interior Detail + Exterior Wash",
        options: [
          { label: "Coupe / Sedan", amount: 125 },
          { label: "SUV / Truck", amount: 145 },
          { label: "XL / Oversized", amount: 175 },
        ],
        note: "Pricing varies by vehicle size.",
        duration: "Estimated duration: 1 hour 30 minutes",
      },
      {
        name: "Deep Clean Luxury Interior Detail + Exterior Wash",
        options: [
          { label: "Coupe / Sedan", amount: 249 },
          { label: "SUV / Truck", amount: 299 },
          { label: "XL / Oversized", amount: 375 },
        ],
        note: "Pricing varies by vehicle size.",
        duration: "Estimated duration: 2 hours 30 minutes",
      },
      {
        name: "Complete Detail + Paint Enhancement",
        options: [
          { label: "Coupe / Sedan", amount: 475 },
          { label: "SUV / Truck", amount: 550 },
        ],
      },
    ],
  },
  {
    id: "in-shop",
    title: "In-shop detailing",
    description: "Available at the Dun-Rite Protection Studio.",
    services: [
      {
        name: "Complete Detail + Paint Enhancement",
        options: [
          { label: "Coupe / Sedan", amount: 475 },
          { label: "SUV / Truck", amount: 550 },
          { label: "XL / Oversized", amount: 625 },
        ],
        note: "In-shop only. Pricing varies by vehicle size.",
      },
    ],
  },
  {
    id: "ceramic-coating",
    title: "Ceramic coating",
    description: "Choose an installation level to suit your vehicle and protection goals.",
    services: [
      {
        name: "Wheels Coating",
        options: [{ label: "Wheels", amount: 125 }],
      },
      {
        name: "Level 1",
        options: [{ label: "Starting at", amount: 850, startingAt: true }],
        note: "Mobile or studio installation.",
      },
      {
        name: "Level 2",
        badge: "Most popular",
        options: [{ label: "Starting at", amount: 1399, startingAt: true }],
        note: "Studio only.",
      },
      {
        name: "Level 3",
        options: [{ label: "Starting at", amount: 1999, startingAt: true }],
        note: "Studio only.",
      },
    ],
  },
  {
    id: "paint-correction",
    title: "Paint correction",
    description: "Paint correction packages priced by vehicle size.",
    services: [
      {
        name: "1-Step Paint Correction",
        options: [
          { label: "Sedan", amount: 275 },
          { label: "SUV", amount: 385 },
          { label: "Truck", amount: 475 },
        ],
      },
      {
        name: "2-Step Paint Correction",
        options: [
          { label: "Sedan", amount: 475 },
          { label: "SUV", amount: 550 },
          { label: "Truck", amount: 575 },
        ],
      },
      {
        name: "3-Step Paint Correction",
        options: [
          { label: "Sedan", amount: 750 },
          { label: "SUV", amount: 950 },
          { label: "Truck", amount: 1100 },
        ],
      },
    ],
  },
  {
    id: "memberships-gift-cards",
    title: "Memberships & gift cards",
    description: "Vehicle care and gift options.",
    services: [
      {
        name: "Dun-Rite Vehicle Care Membership",
        options: [{ label: "Membership", amount: 100 }],
      },
      {
        name: "Essential Gift Certificate",
        options: [{ label: "Gift certificate", amount: 150 }],
      },
      {
        name: "$400 Gift Card",
        options: [{ label: "Gift card", amount: 400 }],
      },
    ],
  },
];

export const HOMEPAGE_PRICING = [
  PRICING_CATEGORIES[0].services[0],
  PRICING_CATEGORIES[0].services[1],
  PRICING_CATEGORIES[2].services[1],
  PRICING_CATEGORIES[3].services[0],
];
