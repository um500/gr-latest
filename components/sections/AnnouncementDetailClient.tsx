"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/language-context";
import T from "@/components/ui/T";

export default function AnnouncementDetailClient({ announcement }: { announcement: any }) {
  const { lang } = useTranslation();

  const getLocalized = (item: any, field: string) => {
    if (lang === "en") return item[field];
    return item[`${field}_${lang}`] || item[field];
  };

  const title = getLocalized(announcement, "title");
  const description = getLocalized(announcement, "description");
  const city = getLocalized(announcement, "city");

  return (
    <>
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="/assets/hero-1.jpg"
          alt="Announcements"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="bg-[#D4AF37] text-black px-5 py-1 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <T k="announcement.latest" />
          </span>

          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
            <T k="announcement.allAnnouncements" />
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="relative bg-white shadow-xl rounded-3xl p-12 border border-gray-100">
          <div className="absolute -top-2 left-10 w-24 h-1 bg-[#D4AF37] rounded-full" />

          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8">
            {announcement.eventDate && <span>📅 {announcement.eventDate}</span>}
            {city && <span>📍 {city}</span>}
          </div>

          <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line text-lg">
            {description}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/"
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-black transition"
            >
              <T k="announcement.backToAll" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
