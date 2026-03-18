
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { BackToTop } from "@/components/back-to-top"
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '600', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

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
      <body className={`${montserrat.className} ${openSans.className} font-body antialiased selection:bg-secondary selection:text-secondary-foreground`}>
        {children}
        <Toaster />
        <BackToTop />
      </body>
    </html>
  );
}
