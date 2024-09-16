"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Carousel } from '@/components/Carousel';
import { carouselSlides } from '@/components/CarouselData';
import { BoltIcon, BrushIcon, MegaphoneIcon, PieChartIcon, RocketIcon, SearchIcon } from '@/components/Icons';

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
