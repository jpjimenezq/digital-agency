"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LaptopIcon, MenuIcon } from "./Icons";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <LaptopIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Digital Agency</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/servicios"
              className="hover:underline flex items-center gap-2"
              prefetch={false}
            >
              Servicios
            </Link>
            <Link
              href="/#portfolio"
              className="hover:underline"
              prefetch={false}
            >
              Portafolio
            </Link>
            <Link href="/#ebook" className="hover:underline" prefetch={false}>
              Ebook
            </Link>
            <Link href="/#contact" className="hover:underline" prefetch={false}>
              Contacto
            </Link>
          </nav>
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/servicios"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
              prefetch={false}
            >
              Servicios
            </Link>
            <Link
              href="/#portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
              prefetch={false}
            >
              Portafolio
            </Link>
            <Link
              href="/#ebook"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
              prefetch={false}
            >
              Ebook
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
              prefetch={false}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
