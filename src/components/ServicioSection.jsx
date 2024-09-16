import React from 'react'
import { servicios } from './ServiciosData'
import Link from 'next/link'

export default function ServiciosSection() {
    return (
      <section id="servicios" className="bg-muted py-12 md:py-24 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Nuestros Servicios</h2>
            <p className="text-muted-foreground text-lg">
              Ofrecemos una amplia gama de servicios para impulsar tu presencia digital.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {servicios.map((servicio) => (
              <Link 
                key={servicio.id} 
                href={`/servicios/${servicio.id}`}
                className="bg-background rounded-lg p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md"
              >
                {servicio.icon}
                <h3 className="text-xl font-semibold mt-2">{servicio.titulo}</h3>
                <p className="text-muted-foreground mt-2">{servicio.descripcion}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }