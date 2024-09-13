import React from "react";
import Link from "next/link";
import { LaptopIcon, GlobeIcon, MenuIcon } from "@/app/page";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <LaptopIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Digital Agency</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/services"
          className="hover:underline flex items-center gap-2"
          prefetch={false}
        >
          <GlobeIcon className="h-5 w-5" />
          Servicios
        </Link>
        <Link href="/#portfolio" className="hover:underline" prefetch={false}>
          Portafolio
        </Link>
        <Link href="/#ebook" className="hover:underline" prefetch={false}>
          Ebook
        </Link>
        <Link href="/#contact" className="hover:underline" prefetch={false}>
          Contacto
        </Link>
      </nav>
      <Button variant="outline" className="md:hidden">
        <MenuIcon className="h-6 w-6" />
      </Button>
    </header>
  );
}
