
import { Album, eventsData } from "@/lib/events-data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description: "A gallery of past sessions, webinars, and events.",
};

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Gallery of Past Events
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Explore our gallery of past sessions, webinars, and events. Click on a category to see more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {eventsData.map((album: Album) => (
          <Link key={album.slug} href={`/events/${album.slug}`}>
            <div className="group relative block overflow-hidden rounded-lg">
              <Image
                src={album.coverImage}
                alt={album.title}
                width={400}
                height={400}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold text-center">{album.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
