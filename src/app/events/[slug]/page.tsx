
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { eventsData, Album } from '@/lib/events-data';
import { Footer } from "@/components/footer";
import { AlbumGallery } from "@/components/album-gallery";
import { ArrowLeft } from 'lucide-react';

// This function tells Next.js which slugs to pre-render
export async function generateStaticParams() {
  return eventsData.map((album) => ({
    slug: album.slug,
  }));
}

// Function to get album data by slug
const getAlbumData = (slug: string): Album | undefined => {
  return eventsData.find((album) => album.slug === slug);
};

export default function AlbumPage({ params }: { params: { slug: string } }) {
  const album = getAlbumData(params.slug);

  if (!album) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-16">
        <Link href="/events" className="inline-flex items-center text-primary font-medium hover:underline gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to All Events
        </Link>
        <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold">{album.title}</h1>
            <p className="text-muted-foreground text-lg">Event Gallery</p>
        </div>
        <AlbumGallery album={album} />
      </div>
      <Footer />
    </main>
  );
}
