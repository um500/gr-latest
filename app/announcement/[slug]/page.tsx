
import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import AnnouncementDetailClient from "@/components/sections/AnnouncementDetailClient";


const singleAnnouncementQuery = groq`
*[_type == "announcement" && slug.current == $slug][0]{
  title,
  title_hi, title_ar, title_ru,
  description,
  description_hi, description_ar, description_ru,
  eventDate,
  city,
  city_hi, city_ar, city_ru,
  supportedLanguages
}
`;

type Params = Promise<{
  slug: string;
}>;

export default async function AnnouncementDetail({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const announcement = await sanityClient.fetch(
    singleAnnouncementQuery,
    { slug }
  );

  if (!announcement) return notFound();

  return (
    <main className="pt-[80px] bg-gradient-to-b from-gray-50 to-white">
      <AnnouncementDetailClient announcement={announcement} />
      <CTA />
      <Footer />
    </main>
  );
}
