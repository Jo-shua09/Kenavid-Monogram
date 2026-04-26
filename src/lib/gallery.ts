import m1 from "@/assets/m-1.jpg";
import m2 from "@/assets/m-2.jpg";
import m3 from "@/assets/m-3.jpg";
import m4 from "@/assets/m-4.jpg";
import m5 from "@/assets/m-5.jpg";
import m6 from "@/assets/m-6.jpg";
import m7 from "@/assets/m-7.jpg";
import m8 from "@/assets/m-8.jpg";
import m9 from "@/assets/m-9.jpg";
import m10 from "@/assets/m-10.jpg";
import m11 from "@/assets/m-11.jpg";
import m12 from "@/assets/m-12.jpg";
import m13 from "@/assets/m-13.jpg";
import m14 from "@/assets/m-14.jpg";
import m15 from "@/assets/m-15.jpg";
import m16 from "@/assets/m-16.jpg";
import m17 from "@/assets/m-17.jpg";
import m18 from "@/assets/m-18.jpg";
import m19 from "@/assets/m-19.jpg";
import m20 from "@/assets/m-20.jpg";
import m21 from "@/assets/m-21.jpg";
import m22 from "@/assets/m-22.jpg";
import m23 from "@/assets/m-23.jpg";
import m24 from "@/assets/m-24.jpg";
import m25 from "@/assets/m-25.jpg";
import s1 from "@/assets/studio-1.jpg";
import s2 from "@/assets/studio-2.jpg";
import s3 from "@/assets/studio-3.jpg";

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Apparel" | "Accessories" | "Heritage" | "Atelier" | "Corporate";
  span?: "tall" | "wide" | "default";
};

export const gallery: GalleryItem[] = [
  { src: m1, alt: "Gold script monogram on white shirt cuff", category: "Apparel", span: "tall" },
  { src: m2, alt: "Royal heraldic crest on burgundy velvet", category: "Heritage" },
  { src: m3, alt: "Embroidery machine stitching gold pattern", category: "Atelier", span: "wide" },
  { src: m4, alt: "Champagne monogram on linen napkin", category: "Heritage" },
  { src: m5, alt: "Embroidered baseball cap", category: "Apparel" },
  { src: m6, alt: "Personalized gold-stitched leather wallet", category: "Accessories", span: "wide" },
  { src: m7, alt: "Baroque gold embroidery on silk", category: "Heritage", span: "tall" },
  { src: m8, alt: "Monogrammed bath towel", category: "Heritage" },
  { src: m9, alt: "Tailor signature inside suit lining", category: "Apparel", span: "tall" },
  { src: m10, alt: "Eagle crest embroidery on bomber jacket", category: "Apparel", span: "wide" },
  { src: m11, alt: "Premium thread spools on workbench", category: "Atelier" },
  { src: m12, alt: "Tone-on-tone monogrammed shirt collar", category: "Apparel", span: "tall" },
  { src: m13, alt: "Star pattern repeat on brown leather", category: "Accessories", span: "wide" },
  { src: m14, alt: "Traditional pattern on indigo fabric", category: "Heritage", span: "tall" },
  { src: m15, alt: "Corporate polo with embroidered crest", category: "Corporate" },
  { src: m16, alt: "Wedding handkerchief with cursive monogram", category: "Heritage", span: "tall" },
  { src: m17, alt: "Industrial embroidery machine threads", category: "Atelier", span: "wide" },
  { src: m18, alt: "Black silk pillow with gold initial", category: "Heritage" },
  { src: m19, alt: "Varsity letter patch on cream wool", category: "Apparel", span: "tall" },
  { src: m20, alt: "Black leather tote with gold monogram", category: "Accessories", span: "tall" },
  { src: m21, alt: "Hands placing fabric in embroidery hoop", category: "Atelier", span: "wide" },
  { src: m22, alt: "Embroidery digitization on screen", category: "Atelier", span: "wide" },
  { src: m23, alt: "Chef jacket with embroidered name", category: "Corporate", span: "tall" },
  { src: m24, alt: "Gold geometric satin stitch on wool", category: "Heritage" },
  { src: m25, alt: "Cufflinks with monogrammed pocket square", category: "Accessories", span: "wide" },
  { src: s1, alt: "Kenavid Couture atelier interior", category: "Atelier" },
  { src: s2, alt: "Star repeat pattern stitched on leather panel", category: "Atelier", span: "wide" },
  { src: s3, alt: "Geometric basket pattern in production", category: "Atelier", span: "tall" },
];
