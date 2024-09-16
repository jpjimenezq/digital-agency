import { notFound } from 'next/navigation';
import { servicios } from '@/components/ServiciosData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicioPage({ params }) {
  const servicio = servicios.find(s => s.id === params.serviceId);

  if (!servicio) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{servicio.titulo}</h1>
        <p className="text-lg mb-4">{servicio.descripcion}</p>
        <ul className="list-disc list-inside">
          {servicio.detalles.map((detalle, index) => (
            <li key={index} className="text-muted-foreground">{detalle}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}