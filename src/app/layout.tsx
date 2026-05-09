
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { BackToTop } from "@/components/back-to-top"
import { LanguageProvider } from "@/context/LanguageContext"
import { LayoutClient } from './layout-client';

export const metadata: Metadata = {
  title: 'IPAYC 2026 | International Pan African Youth Conference',
  description: 'Uniting African youth for a Just, Inclusive & Sustainable Africa. An initiative of AUSP.',
  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/logo.webp', type: 'image/webp' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
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
        <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100..900&family=Concert+One&family=Elms+Sans:ital,wght@100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-secondary selection:text-secondary-foreground">
        <LanguageProvider>
          <LayoutClient>
            {children}
          </LayoutClient>
          <Toaster />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
