
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
