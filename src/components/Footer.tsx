import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; 2024 Digital Agency. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:underline" prefetch={false}>
            Términos de servicio
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
