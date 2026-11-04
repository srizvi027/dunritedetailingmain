/**
 * Single source of truth for all Dun-Rite copy and data.
 * Everything here comes from the existing dunritedetailing.com site, the
 * business's own public listings, or the project brief. No prices, warranties
 * or ratings are included because none were available to verify.
 */

export const SITE = {
  name: "Dun-Rite Detailing & Coatings",
  legalName: "Dun-Rite Detailing LLC",
  tagline: "Protect Your Investment. Elevate Your Drive. Stay Dun-Rite.",
  phone: "(843) 318-9843",
  tel: "+18433189843",
  email: "dunritedetailingllc19@gmail.com",
  city: "Myrtle Beach",
  region: "South Carolina",
  location: "Myrtle Beach, South Carolina",
  // Existing booking destination (header + hero "Book Now" on the current site)
  bookUrl: "https://app.urable.com/virtual-shop/2IpuGkWkb7g1wJxVPgIT",
  instagram: "https://www.instagram.com/dunritedetailing/",
  facebook: "https://www.facebook.com/DunRiteMobileWash/",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dunritedetailing.com",
  areas: [
    "Myrtle Beach",
    "North Myrtle Beach",
    "Conway",
    "Socastee",
    "Surfside Beach",
    "Murrells Inlet",
    "Pawleys Island",
  ],
} as const;

export type Media = {
  kind: "video" | "image";
  src: string;
  poster?: string;
  alt: string;
  portrait?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  group: "Coatings" | "Detailing" | "Specialty";
  tagline: string;
  blurb: string;
  body: string[];
  includes: string[];
  media: Media;
  /** has its own /services/[slug] page */
  page: boolean;
  related: string[];
  /** where the card/CTA sends people */
  href?: string;
};

const PHOTOS = {
  galleryOne: {
    kind: "image",
    src: "/img/WhatsApp%20Image%202026-11-05%20at%202.10.23%20AM.jpeg",
    alt: "Black Lincoln SUV in the Dun-Rite detailing studio",
  },
  galleryTwo: {
    kind: "image",
    src: "/img/WhatsApp%20Image%202026-11-05%20at%202.10.23%20AM%20(1).jpeg",
    alt: "Technician applying ceramic coating to a vehicle",
  },
  galleryThree: {
    kind: "image",
    src: "/img/WhatsApp%20Image%202026-11-05%20at%202.10.24%20AM.jpeg",
    alt: "Black SUV under the studio's detailing lights",
  },
  galleryFour: {
    kind: "image",
    src: "/img/WhatsApp%20Image%202026-11-05%20at%202.10.24%20AM%20(1).jpeg",
    alt: "Black Corvette inside the Dun-Rite studio",
  },
  galleryFive: {
    kind: "image",
    src: "/img/WhatsApp%20Image%202026-11-05%20at%202.10.36%20AM.jpeg",
    alt: "Corvette reflecting the studio lights",
  },
  gallerySix: {
    kind: "image",
    src: "/img/WhatsApp%20Image%202026-11-05%20at%202.10.36%20AM%20(1).jpeg",
    alt: "Front view of a Corvette in the detailing studio",
  },
  gallerySeven: {
    kind: "image",
    src: "/img/WhatsApp%20Image%202026-11-05%20at%202.10.36%20AM%20(2).jpeg",
    alt: "Red classic Corvette in the Dun-Rite studio",
  },
  galleryEight: {
    kind: "image",
    src: "/img/WhatsApp%20Image%202026-11-05%20at%202.10.50%20AM.jpeg",
    alt: "Gray Corvette in the Dun-Rite studio",
  },
  galleryNine: {
    kind: "image",
    src: "/img/WhatsApp%20Image%202026-11-05%20at%202.10.50%20AM%20(1).jpeg",
    alt: "Red classic Corvette and motorcycle in the studio",
  },
} satisfies Record<string, Media>;

const instagramPhoto = (filename: string, alt: string): Media => ({
  kind: "image",
  src: `/img/insta%20images/${encodeURIComponent(filename)}`,
  alt,
});

const INSTAGRAM_PHOTOS = {
  instagramGmc: instagramPhoto(
    "1.jpg",
    "Black GMC SUV being washed at a customer's home",
  ),
  instagramMobileVan: instagramPhoto(
    "2.jpg",
    "Dun-Rite mobile detailing van and service sign",
  ),
  instagramGmcWash: instagramPhoto(
    "3.jpg",
    "Technician pressure washing a black GMC SUV",
  ),
  instagramBoat: instagramPhoto(
    "4.jpg",
    "Boat inside the Dun-Rite detailing studio",
  ),
  instagramBoatRear: instagramPhoto(
    "5.jpg",
    "Rear view of a boat under the detailing studio lights",
  ),
  instagramToyota: instagramPhoto(
    "2026 Toyota GR Corolla straight off the showroom floor and into our shop for a 6-year ceramic co.jpg",
    "Black Toyota GR Corolla in the Dun-Rite studio",
  ),
  instagramDefender: instagramPhoto(
    "A Defender should look like this.Years of wear, swirls, and dullness corrected out — then everyt.jpg",
    "Black Land Rover Defender after paint correction and protection",
  ),
  instagramBmw: instagramPhoto(
    "BMW ALPINA — FRESH, GLOSSY & PROTECTED. 🛡️✨This ALPINA received our 2-Year Ceramic Coating Pack.jpg",
    "Burgundy BMW ALPINA after ceramic coating",
  ),
  instagramCybertruck: instagramPhoto(
    "Cybertruck charged up, cleaned up, and laced up for the road ahead ⚡️🛡️#myrtlebeach #cybertruck.jpg",
    "Tesla Cybertruck after a detailing service",
  ),
  instagramRaptor: instagramPhoto(
    "This 2026 Ford Raptor is now protected the right way. 🔥We finished this stunning red Raptor wit.jpg",
    "Red Ford Raptor after ceramic coating",
  ),
  instagramF450: instagramPhoto(
    "This F-450 came into the Dun-Rite Protection Studio for a full aluminum wheel polish 🛞✨Years of.jpg",
    "Polished aluminum wheels on a Ford F-450",
  ),
  instagramHonda: instagramPhoto(
    "Your paint doesn’t need another wax. It needs a reset. 👀This Honda CR-V came in with swirls, ha.jpg",
    "Honda CR-V after paint correction",
  ),
} satisfies Record<string, Media>;

const M = {
  interiorPhoto: {
    kind: "image",
    src: "/img/interior.jpg",
    alt: "Clean light-colored leather interior after detailing",
  },
  interiorVideo: {
    kind: "video",
    src: "/video/interior.mp4",
    poster: PHOTOS.galleryThree.src,
    alt: "Interior detailing: leather seat and floor mat deep clean",
    portrait: true,
  },
  videoOne: {
    kind: "video",
    src: "/video/1.mp4",
    poster: PHOTOS.galleryOne.src,
    alt: "Dun-Rite vehicle detailing showcase video 1",
    portrait: true,
  },
  videoTwo: {
    kind: "video",
    src: "/video/2.mp4",
    poster: PHOTOS.galleryTwo.src,
    alt: "Dun-Rite vehicle detailing showcase video 2",
    portrait: true,
  },
  videoThree: {
    kind: "video",
    src: "/video/3.mp4",
    poster: PHOTOS.galleryThree.src,
    alt: "Dun-Rite vehicle detailing showcase video 3",
    portrait: true,
  },
  videoFour: {
    kind: "video",
    src: "/video/4.mp4",
    poster: PHOTOS.galleryFour.src,
    alt: "Dun-Rite vehicle detailing showcase video 4",
    portrait: true,
  },
  videoFive: {
    kind: "video",
    src: "/video/5.mp4",
    poster: PHOTOS.galleryFive.src,
    alt: "Dun-Rite vehicle detailing showcase video 5",
    portrait: true,
  },
  correction: {
    kind: "video",
    src: "/video/correction.mp4",
    poster: PHOTOS.gallerySix.src,
    alt: "Machine polishing a black SUV in the Dun-Rite studio",
    portrait: true,
  },
  ceramic: {
    kind: "video",
    src: "/video/ceramic.mp4",
    poster: PHOTOS.galleryTwo.src,
    alt: "Ceramic coating being applied to a red classic Corvette",
    portrait: true,
  },
  whatsappVideoOne: {
    kind: "video",
    src: "/video/WhatsApp%20Video%202026-11-05%20at%202.10.28%20AM.mp4",
    poster: PHOTOS.galleryFive.src,
    alt: "Dun-Rite detailing video, recorded at 2:10:28 AM",
    portrait: true,
  },
  whatsappVideoTwo: {
    kind: "video",
    src: "/video/WhatsApp%20Video%202026-11-05%20at%202.10.31%20AM.mp4",
    poster: PHOTOS.gallerySix.src,
    alt: "Dun-Rite detailing video, recorded at 2:10:31 AM",
    portrait: true,
  },
  whatsappVideoThree: {
    kind: "video",
    src: "/video/WhatsApp%20Video%202026-11-05%20at%202.10.39%20AM.mp4",
    poster: PHOTOS.gallerySeven.src,
    alt: "Dun-Rite detailing video, recorded at 2:10:39 AM",
    portrait: true,
  },
  whatsappVideoFour: {
    kind: "video",
    src: "/video/WhatsApp%20Video%202026-11-05%20at%202.10.40%20AM.mp4",
    poster: PHOTOS.galleryEight.src,
    alt: "Dun-Rite detailing video, recorded at 2:10:40 AM",
    portrait: true,
  },
  whatsappVideoFive: {
    kind: "video",
    src: "/video/WhatsApp%20Video%202026-11-05%20at%202.10.47%20AM.mp4",
    poster: PHOTOS.galleryNine.src,
    alt: "Dun-Rite detailing video, recorded at 2:10:47 AM",
    portrait: true,
  },
  whatsappVideoSix: {
    kind: "video",
    src: "/video/WhatsApp%20Video%202026-11-05%20at%202.11.15%20AM.mp4",
    poster: PHOTOS.galleryOne.src,
    alt: "Dun-Rite detailing video, recorded at 2:11:15 AM",
    portrait: true,
  },
  ...PHOTOS,
  ...INSTAGRAM_PHOTOS,
  hero: {
    kind: "video",
    src: "/video/hero.mp4",
    poster: PHOTOS.galleryTwo.src,
    alt: "Interior steam cleaning of a supercar",
    portrait: true,
  },
} satisfies Record<string, Media>;

export const MEDIA = M;

export const SERVICES: Service[] = [
  {
    slug: "interior-detailing",
    title: "Interior Detailing",
    group: "Detailing",
    tagline: "A cabin that feels new again.",
    blurb:
      "Removes dirt, dust and odors from the cabin. Suited to work trucks, family minivans and weekend cars alike.",
    body: [
      "Your interior takes the most abuse and gets the least attention. Dun-Rite's interior detailing removes built-up dirt, dust and odors and leaves the cabin clean, comfortable and inviting.",
      "It works for every kind of vehicle, from work trucks and family minivans to weekend cars. Choose a package that fits the condition of your interior, and we come to you, or you visit the studio.",
      "Interior customers can also ask about the membership detailing program for regular maintenance.",
    ],
    includes: [
      "Signature Maintenance Detail",
      "Mobile Signature Detail",
      "Signature Studio Transformation",
      "Paint Enhancement + Ceramic Protection",
      "Multi-Year Ceramic Coating Packages",
      "Full Interior Detailing, with no area left untouched",
    ],
    media: M.interiorPhoto,
    page: true,
    related: ["stain-odor-removal", "exterior-detailing", "ceramic-coating"],
  },
  {
    slug: "exterior-detailing",
    title: "Exterior Detailing",
    group: "Detailing",
    tagline: "Gloss that holds up to the Grand Strand.",
    blurb:
      "Exterior care that defends your finish against UV, road debris and everyday weather wear.",
    body: [
      "Sun, salt air and road debris wear on paint every day. Exterior detailing cleans and refreshes the finish and sets the stage for lasting protection.",
      "Start with a Mini-Exterior Detail or Exterior Wash, step up to Wash & Wax, or pair your detail with paint correction and a ceramic coating for long-term results.",
    ],
    includes: [
      "Mini-Exterior Detail",
      "Exterior Wash",
      "Wash & Wax",
      "Paint Correction",
      "Ceramic Coating",
      "Headlight Restoration",
    ],
    media: M.instagramGmcWash,
    page: true,
    related: ["wash-and-wax", "paint-correction", "ceramic-coating"],
  },
  {
    slug: "headlight-restoration",
    title: "Headlight Restoration",
    group: "Detailing",
    tagline: "Clear lenses. Clear view.",
    blurb:
      "Restores faded or yellowed headlights for better visibility and a sharper front end.",
    body: [
      "Faded, yellowed headlights make a vehicle look older than it is and reduce how well you see at night. Headlight restoration brings the lenses back to a clean, clear finish.",
      "It pairs naturally with an exterior detail, and can be added to any exterior service in your quote.",
    ],
    includes: [
      "Restores faded or yellowed lenses",
      "Improves visibility and appearance",
      "Can be added to any exterior detail",
    ],
    media: PHOTOS.gallerySix,
    page: true,
    related: ["exterior-detailing", "paint-correction", "wash-and-wax"],
  },
  {
    slug: "wash-and-wax",
    title: "Wash & Wax",
    group: "Detailing",
    tagline: "The fast way back to shine.",
    blurb:
      "A proper wash and wax that removes dirt, adds shine and leaves a protective wax layer.",
    body: [
      "Wash & Wax removes the dirt and road film, restores shine, and leaves a protective layer of wax on the paint.",
      "It's a great maintenance service between larger details, and an easy first step if you're new to Dun-Rite.",
    ],
    includes: [
      "Hand wash to remove dirt",
      "Wax applied for shine",
      "Protective wax layer",
    ],
    media: M.instagramGmc,
    page: true,
    related: ["exterior-detailing", "paint-correction", "ceramic-coating"],
  },
  {
    slug: "paint-correction",
    title: "Paint Correction",
    group: "Coatings",
    tagline: "Swirls out. Depth in.",
    blurb:
      "Machine polishing that removes swirl marks and brings out deep, true gloss.",
    body: [
      "Paint correction is the foundation of a flawless finish. Machine polishing levels the paint to remove swirl marks and reveal real depth and gloss.",
      "It's also the essential preparation before a ceramic coating, because coating bonds best to paint that has been properly prepped.",
    ],
    includes: [
      "Swirl mark removal",
      "Deep gloss and clarity",
      "Ideal preparation before ceramic coating",
    ],
    media: M.correction,
    page: true,
    related: ["ceramic-coating", "exterior-detailing", "wash-and-wax"],
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    group: "Coatings",
    tagline: "Protection that outlasts the wax.",
    blurb:
      "A protective layer that adds gloss, water beading, UV and oxidation protection, and easier cleaning.",
    body: [
      "Ceramic coating is a protective layer that takes your vehicle's finish to the next level. It adds gloss and water beading, protects against UV and oxidation, and makes your vehicle easier to clean.",
      "Dun-Rite applies System X ceramic coatings in three levels. Pick the one that matches how you drive and how long you want your finish protected, and we'll recommend the right fit for your vehicle.",
    ],
    includes: [
      "Gloss and water beading",
      "UV and oxidation protection",
      "Easier cleaning",
      "Crystal Coating, Pro+ Ceramic Coating, Max G+ Coating",
    ],
    media: M.ceramic,
    page: true,
    related: ["paint-correction", "wash-and-wax", "interior-detailing"],
  },
  {
    slug: "paint-protection-film",
    title: "Paint Protection Film",
    group: "Coatings",
    tagline: "A clear shield for your paint.",
    blurb:
      "Clear protective film for your vehicle's paint. Ask us which coverage fits your vehicle.",
    body: [
      "Paint protection film is a clear film applied over your vehicle's paint to help guard it against road debris and everyday wear.",
      "Coverage options vary by vehicle and by how you drive. Request a quote and we'll talk through what makes sense for yours.",
    ],
    includes: [
      "Clear protective film over painted surfaces",
      "Coverage tailored to your vehicle",
      "Pairs with paint correction and ceramic coating",
    ],
    media: M.instagramCybertruck,
    page: true,
    related: ["ceramic-coating", "paint-correction", "exterior-detailing"],
  },
  {
    slug: "crystal-coating",
    title: "Crystal Coating",
    group: "Coatings",
    tagline: "Everyday protection, made affordable.",
    blurb:
      "Suited to daily drivers that need affordable, long-lasting paint protection.",
    body: [],
    includes: [],
    media: M.instagramToyota,
    page: false,
    href: "/services/ceramic-coating#tiers",
    related: [],
  },
  {
    slug: "pro-plus-ceramic-coating",
    title: "Pro+ Ceramic Coating",
    group: "Coatings",
    tagline: "Most popular.",
    blurb:
      "The best balance of protection, appearance and value in the Dun-Rite coating lineup.",
    body: [],
    includes: [],
    media: M.instagramBmw,
    page: false,
    href: "/services/ceramic-coating#tiers",
    related: [],
  },
  {
    slug: "max-g-plus-coating",
    title: "Max G+ Coating",
    group: "Coatings",
    tagline: "The top tier.",
    blurb:
      "The highest level of long-term ceramic protection Dun-Rite offers.",
    body: [],
    includes: [],
    media: M.instagramRaptor,
    page: false,
    href: "/services/ceramic-coating#tiers",
    related: [],
  },
  {
    slug: "stain-odor-removal",
    title: "Stain and Odor Removal",
    group: "Specialty",
    tagline: "Coffee, food, ink, pet hair.",
    blurb:
      "Targets stubborn interior stains and odors, from coffee and food to ink and pet hair.",
    body: [],
    includes: [],
    media: PHOTOS.galleryFive,
    page: false,
    related: [],
  },
  {
    slug: "engine-detailing",
    title: "Engine Detailing",
    group: "Specialty",
    tagline: "Clean from the inside out.",
    blurb: "A careful detail of the engine bay.",
    body: [],
    includes: [],
    media: PHOTOS.galleryTwo,
    page: false,
    related: [],
  },
  {
    slug: "boat-detailing",
    title: "Boat Detailing",
    group: "Specialty",
    tagline: "We come to your marina.",
    blurb:
      "Boat detailing, performed at your marina.",
    body: [],
    includes: [],
    media: M.instagramBoat,
    page: false,
    related: [],
  },
];

export const COATING_TIERS = [
  {
    id: "crystal",
    name: "Crystal Coating",
    badge: null,
    text: "Suited to daily drivers that need affordable, long-lasting paint protection.",
  },
  {
    id: "pro-plus",
    name: "Pro+ Ceramic Coating",
    badge: "Most popular",
    text: "The best balance of protection, appearance and value.",
  },
  {
    id: "max-g-plus",
    name: "Max G+ Coating",
    badge: null,
    text: "The highest level of long-term ceramic protection Dun-Rite offers.",
  },
] as const;

export const serviceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const serviceHref = (s: Service) =>
  s.page
    ? `/services/${s.slug}`
    : (s.href ?? `/get-a-quote?service=${encodeURIComponent(s.title)}`);

export const PAGE_SERVICES = SERVICES.filter((s) => s.page);

/** Header navigation. Services has a dropdown with a nested sub-menu. */
export type NavChild = { title: string; desc?: string; href: string };
export type NavServiceItem = {
  title: string;
  desc: string;
  href: string;
  children?: NavChild[];
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const NAV_SERVICES: NavServiceItem[] = [
  {
    title: "Ceramic Coating",
    desc: "Crystal, Pro+ and Max G+ protection",
    href: "/services/ceramic-coating",
  },
  {
    title: "Paint Correction",
    desc: "Swirls out, deep gloss in",
    href: "/services/paint-correction",
  },
  {
    title: "Paint Protection Film",
    desc: "Clear film for your paint",
    href: "/services/paint-protection-film",
  },
  {
    title: "Auto Detailing",
    desc: "In-shop & mobile",
    href: "/services",
    children: [
      {
        title: "Interior Detailing",
        desc: "Cabin deep clean",
        href: "/services/interior-detailing",
      },
      {
        title: "Exterior Detailing",
        desc: "Gloss and defense",
        href: "/services/exterior-detailing",
      },
      {
        title: "Wash & Wax",
        desc: "Shine and a wax layer",
        href: "/services/wash-and-wax",
      },
      {
        title: "Headlight Restoration",
        desc: "Clear, bright lenses",
        href: "/services/headlight-restoration",
      },
    ],
  },
  {
    title: "Boat Detailing",
    desc: "We come to your marina",
    href: "/get-a-quote?service=Boating%20Detail",
  },
];

/**
 * Real testimonials from the existing site. Only wording confirmed from the
 * current site is used: replace the short fragments with the full original
 * text when convenient.
 */
export const TESTIMONIALS = [
  {
    quote:
      "Amazing work!! Great communication, easy appointment scheduling, convenient, great pricing, professional & so kind.",
    name: "Brooke Smith",
    note: "",
  },
  {
    quote: "It looks amazing.",
    name: "Lube Express",
    note: "Ceramic coating and interior detail · Honda Pilot",
  },
  {
    quote: "Showroom status.",
    name: "Tina Batinic",
    note: "Visiting from out of town · detailed by Dante",
  },
];

/** Quote form options. Names preserved from the existing Get A Quote form. */
export const QUOTE_OPTIONS = {
  interior: [
    "Signature Maintenance Detail",
    "Mobile Signature Detail",
    "Signature Studio Transformation",
    "Paint Enhancement + Ceramic Protection",
    "Multi-Year Ceramic Coating Packages",
    "Stain and Odor Removal",
  ],
  exterior: [
    "Wash And Wax",
    "Mini-Exterior Detail",
    "Exterior Wash",
    "Paint Correction",
    "Ceramic Coating",
    "Crystal Coating",
    "Pro+ Ceramic Coating",
    "Max G+ Coating",
    "Headlight Restoration",
    "Engine Detailing",
    "Interior Detail",
    "Paint Protection Film",
  ],
  boat: ["Boating Detail"],
};

export const CONSENT_TEXT =
  "I agree to receive SMS/MMS (e.g. promos, appointment reminders) from Dun-Rite Mobile Detailing. Message and data rates may apply. Message frequency varies. Reply STOP to opt out.";

export const WHY = [
  {
    n: "01",
    title: "Detailing at your doorstep",
    text: "Mobile service at your home, office or marina, plus a dedicated protection studio when the job calls for it.",
  },
  {
    n: "02",
    title: "Attention to detail",
    text: "Proper preparation comes before any coating or polish. The finish is earned, not sprayed.",
  },
  {
    n: "03",
    title: "A professional experience",
    text: "Clear communication, easy scheduling and technicians who treat your vehicle like their own.",
  },
  {
    n: "04",
    title: "Quality products & materials",
    text: "System X certified ceramic coatings and environmentally friendly cleaning products.",
  },
];
