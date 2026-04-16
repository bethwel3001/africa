
"use client"

import { usePathname } from 'next/navigation';
import { Navigation } from "@/components/navigation";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavigation = ['/gallery', '/privacy-policy', '/terms-of-use', '/payment', '/register'].includes(pathname);

  return (
    <>
      {!hideNavigation && <Navigation />}
      {children}
    </>
  );
}
