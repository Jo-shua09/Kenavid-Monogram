import s1 from "@/assets/studio-1.jpg";
import s2 from "@/assets/studio-2.jpg";
import s3 from "@/assets/studio-3.jpg";
import m1 from "/media/m-1.jpg";
import m2 from "/media/m-2.jpg";
import m3 from "/media/m-3.jpg";
import m4 from "/media/m-4.jpg";
import m5 from "/media/m-5.jpg";
import m6 from "/media/m-6.jpg";
import m7 from "/media/m-7.jpg";
import m8 from "/media/m-8.jpg";
import m9 from "/media/m-9.jpg";
import m10 from "/media/m-10.jpg";
import m11 from "/media/m-11.jpg";
import m12 from "/media/m-12.jpg";
import m13 from "/media/m-13.jpg";
import m14 from "/media/m-14.jpg";
import m15 from "/media/m-15.jpg";
import media1 from "/media/media-1.MP4";
import media2 from "/media/media-2.MP4";
import media3 from "/media/media-3.MP4";
import media4 from "/media/media-4.MP4";
import media5 from "/media/media-5.MP4";
import media6 from "/media/media-6.MP4";
import media7 from "/media/media-7.MP4";
import media8 from "/media/media-8.MP4";
import media9 from "/media/media-9.MP4";
import media10 from "/media/media-10.MP4";
import media11 from "/media/media-11.MP4";
import media12 from "/media/media-12.MP4";
import media13 from "/media/media-13.MP4";
import media14 from "/media/media-14.MP4";
import media15 from "/media/media-15.MP4";

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Apparel" | "Accessories" | "Heritage" | "Atelier" | "Corporate";
  span?: "tall" | "wide" | "default";
};

export const gallery: GalleryItem[] = [
  { src: m1, alt: "Agbada monogram", category: "Apparel", span: "tall" },
  { src: m2, alt: "Baroque embroidery", category: "Heritage", span: "tall" },
  { src: m3, alt: "Geometric satin stitch", category: "Accessories", span: "tall" },
  { src: m4, alt: "Hands at the hoop", category: "Atelier", span: "tall" },
  { src: s1, alt: "Kenavid Couture atelier interior", category: "Atelier" },
  {
    src: s2,
    alt: "Star repeat pattern stitched on fabric panel",
    category: "Atelier",
    span: "wide",
  },
  { src: s3, alt: "Geometric basket pattern in production", category: "Atelier", span: "tall" },
  { src: m5, alt: "Precision stitching details", category: "Atelier", span: "wide" },
  {
    src: m6,
    alt: "Close up of needle work on a custom monogram piece",
    category: "Atelier",
    span: "tall",
  },
  { src: m7, alt: "Custom monogram piece 7", category: "Atelier" },
  { src: m8, alt: "Custom monogram piece 8", category: "Atelier" },
  { src: m9, alt: "Custom monogram piece 9", category: "Atelier" },
  { src: m10, alt: "Custom monogram piece 10", category: "Atelier" },
  { src: m11, alt: "Custom monogram piece 11", category: "Atelier" },
  { src: m12, alt: "Custom monogram piece 12", category: "Atelier" },
  { src: m13, alt: "Custom monogram piece 13", category: "Atelier" },
  { src: m14, alt: "Custom monogram piece 14", category: "Atelier" },
  { src: m15, alt: "Custom monogram piece 15", category: "Atelier" },
  { src: media1, alt: "Kenavid Monogram video 1", category: "Atelier" },
  { src: media2, alt: "Kenavid Monogram video 2", category: "Atelier" },
  { src: media3, alt: "Kenavid Monogram video 3", category: "Atelier" },
  { src: media4, alt: "Kenavid Monogram video 4", category: "Atelier" },
  { src: media5, alt: "Kenavid Monogram video 5", category: "Atelier" },
  { src: media6, alt: "Kenavid Monogram video 6", category: "Atelier" },
  { src: media7, alt: "Kenavid Monogram video 7", category: "Atelier" },
  { src: media8, alt: "Kenavid Monogram video 8", category: "Atelier" },
  { src: media9, alt: "Kenavid Monogram video 9", category: "Atelier" },
  { src: media10, alt: "Kenavid Monogram video 10", category: "Atelier" },
  { src: media11, alt: "Kenavid Monogram video 11", category: "Atelier" },
  { src: media12, alt: "Kenavid Monogram video 12", category: "Atelier" },
  { src: media13, alt: "Kenavid Monogram video 13", category: "Atelier" },
  { src: media14, alt: "Kenavid Monogram video 14", category: "Atelier" },
  { src: media15, alt: "Kenavid Monogram video 15", category: "Atelier" },
];
