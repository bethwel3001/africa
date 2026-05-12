
"use client"

import { usePathname } from 'next/navigation';
import { Navigation } from "@/components/navigation";
import { SplashPopup } from "@/components/splash-popup";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavigation = ['/gallery', '/privacy-policy', '/terms-of-use', '/payment', '/register'].includes(pathname);

  return (
    <>
      <SplashPopup />
      {!hideNavigation && <Navigation />}
      {children}
    </>
  );
}
