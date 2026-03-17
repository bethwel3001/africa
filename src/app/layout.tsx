
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { BackToTop } from "@/components/back-to-top"

export const metadata: Metadata = {
  title: 'IPAYC 2026',
  description: 'Uniting African youth for a Just, Inclusive & Sustainable Africa. An initiative of AUSP.',
  icons: {
    icon: './LOGO/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-secondary selection:text-secondary-foreground">
        {children}
        <Toaster />
        <BackToTop />
      </body>
    </html>
  );
}
