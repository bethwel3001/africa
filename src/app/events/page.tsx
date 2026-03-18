
import Link from 'next/link';
import Image from 'next/image';
import { eventsData } from '@/lib/events-data';
import { Footer } from "@/components/footer"
import { ArrowLeft } from 'lucide-react';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-primary font-medium hover:underline gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Site
        </Link>
        <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold">Our <span className="text-secondary">Past Events</span></h1>
            <p className="text-muted-foreground text-lg">A visual journey through our most impactful collaborations.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((album) => (
            <Link key={album.slug} href={`/events/${album.slug}`}>
              <div className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={album.coverImage}
                        alt={`Cover image for ${album.title}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">{album.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">Click to view album</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
