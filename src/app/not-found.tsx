
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold text-foreground mt-4">Page Not Found</h2>
      <p className="text-muted-foreground mt-2 mb-8">Sorry, we couldn’t find the page you’re looking for.</p>
      <Button asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  )
}
