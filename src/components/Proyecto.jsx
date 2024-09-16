import React from 'react'
import { proyectos } from './ProyectosData'

export default function Proyecto() {
  return (
    <section id="portfolio" className="bg-background py-12 md:py-24 px-4 md:px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Nuestro Portafolio</h2>
          <p className="text-muted-foreground text-lg">
            Descubre algunos de nuestros trabajos más destacados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {proyectos.map((proyecto, index) => (
            <div 
              key={index}
              className="bg-muted rounded-lg overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md"
            >
              <img
                src={proyecto.imagen}
                width="400"
                height="300"
                alt={proyecto.titulo}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{proyecto.titulo}</h3>
                <p className="text-muted-foreground mt-2">
                  {proyecto.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
