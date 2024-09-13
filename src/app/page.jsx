"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Carousel } from '@/components/Carousel';
import { carouselSlides } from '@/components/CarouselData';

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <section className="bg-background py-12 md:py-24 px-4 md:px-6 relative">
          <div className="container max-w-5xl mx-auto">
            <Carousel slides={carouselSlides} />
          </div>
        </section>
        <section id="services" className="bg-muted py-12 md:py-24 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Nuestros Servicios</h2>
              <p className="text-muted-foreground text-lg">
                Ofrecemos una amplia gama de servicios para impulsar tu
                presencia digital.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <SearchIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold mt-2">SEO</h3>
                <p className="text-muted-foreground mt-2">
                  Optimizamos tu sitio web para mejorar su posicionamiento en
                  los motores de búsqueda.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <PieChartIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold mt-2">
                  Análisis de Datos
                </h3>
                <p className="text-muted-foreground mt-2">
                  Analizamos tus datos para tomar decisiones informadas y
                  mejorar tus estrategias.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <MegaphoneIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold mt-2">
                  Marketing Digital
                </h3>
                <p className="text-muted-foreground mt-2">
                  Diseñamos y ejecutamos campañas de marketing digital efectivas
                  para impulsar tu negocio.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <BrushIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold mt-2">Diseño Web</h3>
                <p className="text-muted-foreground mt-2">
                  Creamos sitios web atractivos y funcionales que reflejen la
                  imagen de tu marca.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <BoltIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold mt-2">Desarrollo Web</h3>
                <p className="text-muted-foreground mt-2">
                  Desarrollamos soluciones web a medida que se adaptan a tus
                  necesidades.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <RocketIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold mt-2">
                  Estrategia Digital
                </h3>
                <p className="text-muted-foreground mt-2">
                  Diseñamos estrategias digitales personalizadas para maximizar
                  el impacto de tu negocio.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="portfolio"
          className="bg-background py-12 md:py-24 px-4 md:px-6"
        >
          <div className="container max-w-5xl mx-auto">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Nuestro Portafolio</h2>
              <p className="text-muted-foreground text-lg">
                Descubre algunos de nuestros trabajos más destacados.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-muted rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Proyecto 1"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Proyecto 1</h3>
                  <p className="text-muted-foreground mt-2">
                    Descripción del proyecto 1.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Proyecto 2"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Proyecto 2</h3>
                  <p className="text-muted-foreground mt-2">
                    Descripción del proyecto 2.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Proyecto 3"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Proyecto 3</h3>
                  <p className="text-muted-foreground mt-2">
                    Descripción del proyecto 3.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Proyecto 4"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Proyecto 4</h3>
                  <p className="text-muted-foreground mt-2">
                    Descripción del proyecto 4.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Proyecto 5"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Proyecto 5</h3>
                  <p className="text-muted-foreground mt-2">
                    Descripción del proyecto 5.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Proyecto 6"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Proyecto 6</h3>
                  <p className="text-muted-foreground mt-2">
                    Descripción del proyecto 6.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="ebook"
          className="bg-background py-12 md:py-24 px-4 md:px-6"
        >
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/placeholder.svg"
              width="600"
              height="400"
              alt="Ebook"
              className="mx-auto rounded-lg object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Descarga nuestro Ebook</h2>
              <p className="text-muted-foreground text-lg">
                Aprende cómo potenciar tu presencia digital con nuestras
                estrategias probadas.
              </p>
              <Link href="/1">
                <Button className="w-full md:w-auto">Descargar Ebook</Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-muted py-12 md:py-24 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Contáctanos</h2>
              <p className="text-muted-foreground text-lg">
                ¿Tienes alguna pregunta o quieres trabajar con nosotros? Déjanos
                tu mensaje.
              </p>
            </div>
            <form className="max-w-xl mx-auto mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="Nombre" className="w-full" />
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full"
                />
              </div>
              <Input type="text" placeholder="Asunto" className="w-full" />
              <Textarea placeholder="Mensaje" className="w-full" rows={5} />
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

export function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function LaptopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function MegaphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PieChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
