"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiciosSection from "@/components/ServicioSection";
import ProyectosSection from "@/components/Proyecto";
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
        <ServiciosSection />
        <ProyectosSection />
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
