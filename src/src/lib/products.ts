import agbadaBronze from "@/assets/products/agbada-bronze.jpg";
import agbadaCrimson from "@/assets/products/agbada-crimson.jpg";
import agbadaPearl from "@/assets/products/agbada-pearl.jpg";
import agbadaOnyx from "@/assets/products/agbada-onyx.jpg";
import agbadaChampagne from "@/assets/products/agbada-champagne.jpg";
import agbadaRoyalBlue from "@/assets/products/agbada-royal-blue.jpg";
import agbadaBurgundy from "@/assets/products/agbada-burgundy.jpg";
import agbadaForest from "@/assets/products/agbada-forest.jpg";
import kaftanCocoa from "@/assets/products/kaftan-cocoa.jpg";
import kaftanEmerald from "@/assets/products/kaftan-emerald.jpg";
import kaftanNavy from "@/assets/products/kaftan-navy.jpg";
import kaftanSand from "@/assets/products/kaftan-sand.jpg";
import kaftanOxblood from "@/assets/products/kaftan-oxblood.jpg";
import casualIvory from "@/assets/products/casual-ivory.jpg";
import casualCharcoal from "@/assets/products/casual-charcoal.jpg";
import casualStone from "@/assets/products/casual-stone.jpg";
import casualOlive from "@/assets/products/casual-olive.jpg";
import monogramNoir from "@/assets/products/monogram-noir.jpg";
import monogramIvory from "@/assets/products/monogram-ivory.jpg";
import monogramGold from "@/assets/products/monogram-gold.jpg";
import agbadaMidnight from "@/assets/products/agbada-midnight.jpg";
import agbadaWhite from "@/assets/products/agbada-white.jpg";
import kaftanCharcoal from "@/assets/products/kaftan-charcoal.jpg";
import casualPowderBlue from "@/assets/products/casual-powderblue.jpg";
import monogramRuby from "@/assets/products/monogram-ruby.jpg";

export type Category = "Agbada" | "Kaftan" | "Casual Wear" | "Monogram Designs";

export interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  priceFrom: number;
  priceTo: number;
  description: string;
  details: string[];
}

export const products: Product[] = [
  // {
  //   id: "agbada-bronze-regalia",
  //   name: "Bronze Regalia Agbada",
  //   category: "Agbada",
  //   image: agbadaBronze,
  //   priceFrom: 320000,
  //   priceTo: 450000,
  //   description:
  //     "A statement three-piece agbada in rich bronze damask, hand-embroidered with our signature gold motifs across the chest panel.",
  //   details: [
  //     "Premium imported damask fabric",
  //     "Hand embroidery - 40+ hours of craftsmanship",
  //     "Includes flowing robe, inner kaftan & matching trousers",
  //     "Bespoke fit - tailored to your measurements",
  //   ],
  // },
  {
    id: "agbada-crimson-royale",
    name: "Crimson Royale Agbada",
    category: "Agbada",
    image: agbadaCrimson,
    priceFrom: 380000,
    priceTo: 520000,
    description:
      "Regal crimson agbada with intricate tonal embroidery and crystal-stoned panels - fit for kings and milestone celebrations.",
    details: [
      "Premium velvet & silk blend",
      "Crystal-stone embellished detailing",
      "Matching fila (cap) included",
      "Made-to-order in 3–4 weeks",
    ],
  },
  {
    id: "agbada-pearl-aristocrat",
    name: "Pearl Aristocrat Agbada",
    category: "Agbada",
    image: agbadaPearl,
    priceFrom: 420000,
    priceTo: 580000,
    description:
      "Pristine ivory agbada studded with golden floral appliqués - our most requested wedding piece.",
    details: [
      "Hand-applied gold floral appliqués",
      "Stoned full front panel",
      "Includes matching cap",
      "Bespoke groom-ready tailoring",
    ],
  },
  {
    id: "agbada-onyx-noir",
    name: "Onyx Noir Agbada",
    category: "Agbada",
    image: agbadaOnyx,
    priceFrom: 290000,
    priceTo: 410000,
    description:
      "Tonal black-on-black agbada with raised damask weave - quiet luxury at its finest.",
    details: [
      "All-black tonal damask",
      "Subtle textured embroidery",
      "Perfect for evening events",
      "Tailored from premium imported fabric",
    ],
  },
  {
    id: "agbada-champagne-ascot",
    name: "Champagne Ascot Agbada",
    category: "Agbada",
    image: agbadaChampagne,
    priceFrom: 340000,
    priceTo: 470000,
    description:
      "Soft champagne flowing agbada with a multi-tonal hand-embroidered crest - refined and unforgettable.",
    details: [
      "Champagne silk-touch fabric",
      "Multi-color hand embroidery",
      "Soft drape, structured shoulders",
      "Custom turban styling available",
    ],
  },
  {
    id: "agbada-royal-blue-empire",
    name: "Royal Blue Empire Agbada",
    category: "Agbada",
    image: agbadaRoyalBlue,
    priceFrom: 360000,
    priceTo: 490000,
    description:
      "Royal blue agbada with a striking baroque-gold front panel - commanding presence guaranteed.",
    details: [
      "Royal blue silk-blend fabric",
      "Baroque gold thread embroidery",
      "Three-piece set",
      "Bespoke measurements",
    ],
  },
  {
    id: "kaftan-cocoa-heritage",
    name: "Cocoa Heritage Kaftan",
    category: "Kaftan",
    image: kaftanCocoa,
    priceFrom: 145000,
    priceTo: 210000,
    description:
      "Modern slim-fit kaftan in deep cocoa with golden equestrian embroidery on the chest pocket.",
    details: [
      "Premium cashmere-blend fabric",
      "Gold thread chest emblem",
      "Two-piece (top + trouser)",
      "Slim contemporary cut",
    ],
  },
  {
    id: "kaftan-emerald-monogram",
    name: "Emerald Monogram Kaftan",
    category: "Kaftan",
    image: kaftanEmerald,
    priceFrom: 175000,
    priceTo: 240000,
    description:
      "Lustrous emerald kaftan with all-over signature monogram weave - modern luxury reimagined.",
    details: [
      "Silk-touch monogram jacquard",
      "Statement gold placket",
      "Relaxed regal silhouette",
      "Made-to-measure",
    ],
  },
  {
    id: "kaftan-navy-diplomat",
    name: "Navy Diplomat Kaftan",
    category: "Kaftan",
    image: kaftanNavy,
    priceFrom: 135000,
    priceTo: 195000,
    description:
      "Sharp navy kaftan with gold mandarin collar accent - refined for boardrooms and ceremonies alike.",
    details: [
      "Italian wool-blend",
      "Gold-trim mandarin collar",
      "Tailored slim fit",
      "Two-piece set",
    ],
  },
  {
    id: "casual-ivory-resort",
    name: "Ivory Resort Senator",
    category: "Casual Wear",
    image: casualIvory,
    priceFrom: 95000,
    priceTo: 140000,
    description:
      "Crisp ivory short-sleeve senator set - effortless luxury for daytime occasions and travel.",
    details: [
      "Breathable linen-cotton blend",
      "Subtle gold detail at chest",
      "Two-piece (shirt + trouser)",
      "Tailored relaxed fit",
    ],
  },
  {
    id: "casual-charcoal-monogram",
    name: "Charcoal Monogram Blazer",
    category: "Casual Wear",
    image: casualCharcoal,
    priceFrom: 185000,
    priceTo: 260000,
    description:
      "Tailored charcoal blazer with embroidered KC monogram - modern menswear with a couture edge.",
    details: [
      "Wool-cashmere blend",
      "Embroidered chest monogram",
      "Half-canvas construction",
      "Custom lining options",
    ],
  },
  {
    id: "monogram-noir-fabric",
    name: "Noir Monogram Bespoke",
    category: "Monogram Designs",
    image: monogramNoir,
    priceFrom: 220000,
    priceTo: 380000,
    description:
      "Bespoke garments crafted from our signature black-and-gold KC monogram silk - exclusively woven for the house.",
    details: [
      "House-exclusive silk monogram",
      "Choose your silhouette: kaftan, agbada or shirt",
      "Limited atelier production",
      "Numbered & signed",
    ],
  },
  {
    id: "agbada-burgundy-sovereign",
    name: "Burgundy Sovereign Agbada",
    category: "Agbada",
    image: agbadaBurgundy,
    priceFrom: 350000,
    priceTo: 480000,
    description:
      "Deep wine-toned agbada with cascading gold filigree across the chest panel - a sovereign statement piece.",
    details: [
      "Premium wine-toned damask",
      "Hand-stitched gold filigree",
      "Includes robe, kaftan & trousers",
      "Made-to-measure tailoring",
    ],
  },
  {
    id: "agbada-forest-heritage",
    name: "Forest Heritage Agbada",
    category: "Agbada",
    image: agbadaForest,
    priceFrom: 330000,
    priceTo: 460000,
    description:
      "Forest green agbada with antique-silver and gold thread embroidery - earthy regality, refined.",
    details: [
      "Forest green silk-blend damask",
      "Antique silver & gold embroidery",
      "Three-piece set",
      "Bespoke fit",
    ],
  },
  {
    id: "kaftan-sand-meridian",
    name: "Sand Meridian Kaftan",
    category: "Kaftan",
    image: kaftanSand,
    priceFrom: 125000,
    priceTo: 180000,
    description:
      "Warm sand-toned kaftan with tonal placket embroidery - a quiet, elevated everyday luxury.",
    details: [
      "Soft cashmere-touch fabric",
      "Tonal embroidered placket",
      "Slim modern silhouette",
      "Two-piece set",
    ],
  },
  {
    id: "kaftan-oxblood-prince",
    name: "Oxblood Prince Kaftan",
    category: "Kaftan",
    image: kaftanOxblood,
    priceFrom: 195000,
    priceTo: 270000,
    description:
      "Oxblood layered kaftan with gold mandarin collar and structured overlay - modern princely tailoring.",
    details: [
      "Oxblood jacquard fabric",
      "Gold-trim mandarin collar",
      "Layered overlay design",
      "Custom tailoring",
    ],
  },
  {
    id: "casual-stone-modernist",
    name: "Stone Modernist Senator",
    category: "Casual Wear",
    image: casualStone,
    priceFrom: 110000,
    priceTo: 160000,
    description:
      "Light stone gray short-sleeve senator suit - refined ease for daytime ceremonies.",
    details: ["Premium linen-wool blend", "Crisp tailored cut", "Two-piece set", "Made-to-measure"],
  },
  {
    id: "casual-olive-monogram",
    name: "Olive Monogram Blazer",
    category: "Casual Wear",
    image: casualOlive,
    priceFrom: 195000,
    priceTo: 275000,
    description:
      "Olive tailored blazer with embroidered KC chest crest - modern menswear with couture spirit.",
    details: [
      "Wool-cashmere blend",
      "Embroidered chest crest",
      "Half-canvas construction",
      "Custom lining options",
    ],
  },
  {
    id: "monogram-ivory-signature",
    name: "Ivory Signature Monogram",
    category: "Monogram Designs",
    image: monogramIvory,
    priceFrom: 180000,
    priceTo: 290000,
    description:
      "All-over ivory and gold KC monogram shirt in signature house silk - wearable art.",
    details: [
      "House-exclusive ivory silk",
      "All-over KC monogram",
      "Tailored fit",
      "Numbered atelier piece",
    ],
  },
  {
    id: "monogram-gold-regalia",
    name: "Gold Regalia Monogram",
    category: "Monogram Designs",
    image: monogramGold,
    priceFrom: 280000,
    priceTo: 420000,
    description:
      "Opulent gold-and-black baroque monogram kaftan with structured leather waist belt - house couture.",
    details: [
      "Gold baroque monogram silk",
      "Structured leather waist belt",
      "Limited edition",
      "Numbered & signed",
    ],
  },
  {
    id: "agbada-midnight-dynasty",
    name: "Midnight Dynasty Agbada",
    category: "Agbada",
    image: agbadaMidnight,
    priceFrom: 310000,
    priceTo: 440000,
    description:
      "Midnight blue agbada with intricate silver crystal embroidery and matching fila - twilight regality.",
    details: [
      "Midnight silk-blend damask",
      "Silver crystal embroidery",
      "Matching fila included",
      "Three-piece bespoke set",
    ],
  },
  {
    id: "agbada-white-celestial",
    name: "Celestial White Agbada",
    category: "Agbada",
    image: agbadaWhite,
    priceFrom: 460000,
    priceTo: 620000,
    description:
      "All-white groom agbada with cascading gold scrollwork and beaded chains - for the day that matters most.",
    details: [
      "Pure white silk damask",
      "Hand-stitched gold scrollwork",
      "Beaded chain accents",
      "Wedding-ready bespoke",
    ],
  },
  {
    id: "kaftan-charcoal-minimalist",
    name: "Charcoal Minimalist Kaftan",
    category: "Kaftan",
    image: kaftanCharcoal,
    priceFrom: 115000,
    priceTo: 165000,
    description: "Quiet luxury at its purest - a charcoal slim kaftan stripped to its essentials.",
    details: [
      "Premium silk-touch fabric",
      "Minimalist tonal placket",
      "Slim modern fit",
      "Two-piece set",
    ],
  },
  {
    id: "casual-powderblue-day",
    name: "Powder Blue Day Suit",
    category: "Casual Wear",
    image: casualPowderBlue,
    priceFrom: 165000,
    priceTo: 230000,
    description:
      "Powder blue tailored two-piece suit - fresh, refined and built for the modern gentleman.",
    details: [
      "Italian wool-blend fabric",
      "Half-canvas tailoring",
      "Slim contemporary cut",
      "Custom shirt pairing available",
    ],
  },
  {
    id: "monogram-ruby-imperial",
    name: "Ruby Imperial Monogram",
    category: "Monogram Designs",
    image: monogramRuby,
    priceFrom: 240000,
    priceTo: 360000,
    description:
      "Ruby red KC damask monogram kaftan - bold, regal and unmistakably house signature.",
    details: [
      "Ruby damask monogram silk",
      "Tailored slim fit",
      "Limited atelier release",
      "Numbered & signed",
    ],
  },
];

export const categories: ("All" | Category)[] = [
  "All",
  "Agbada",
  "Kaftan",
  "Casual Wear",
  "Monogram Designs",
];

export const formatNaira = (n: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);

export const getProduct = (id: string) => products.find((p) => p.id === id);
