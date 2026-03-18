
"use client";

import Image from "next/image";
import Link from "next/link";

const eventCategories = [
  { name: "Medical Society", path: "/MEDICAL SOCIETY/1.jpeg", slug: "medical-society" },
  { name: "Law Society", path: "/LAW SOCIETY/1.jpeg", slug: "law-society" },
  { name: "Leaders' Chamber Program", path: "/LEADERS' CHAMBER PROGRAM/1.jpeg", slug: "leaders-chamber-program" },
  { name: "Commonwealth Secretariat", path: "/COMMONWEALTH SECRETARIAT/1.jpeg", slug: "commonwealth-secretariat" },
  { name: "The Africa We Want", path: "/AFRICA WE WANT/1.jpeg", slug: "the-africa-we-want" },
  { name: "SDGs", path: "/SDgs/1.jpeg", slug: "sdgs" },
  { name: "Gallery", path: "/GALLERY/10.jpeg", slug: "gallery" },
];

export function PastEventsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">A Gallery of Past Events</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Explore our gallery of past sessions, webinars, and events. Click on a category to see more.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {eventCategories.map((category) => (
            <Link key={category.name} href={category.slug === 'gallery' ? '/gallery' : `/events/${category.slug}`}>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src={category.path}
                  alt={`${category.name} cover image`}
                  width={400}
                  height={400}
                  className="mx-auto object-cover h-64 w-full rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <h3 className="text-white text-xl font-bold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
