import { Button } from "@/components/ui/button"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceComparison from '@/components/ServiceComparison'
import Herramientas from '@/components/Herramientas'

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid gap-12 md:gap-16">
          <div className="grid gap-12 md:gap-16">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="hidden md:block">
                <img
                  src="/placeholder.svg"
                  width={550}
                  height={550}
                  alt="Consultoría Estratégica"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
              <div className="grid gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Consultoría Estratégica</h2>
                </div>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Nuestros expertos en consultoría estratégica te ayudarán a definir una hoja de ruta clara para
                  alcanzar tus objetivos de negocio. Analizamos tu situación actual, identificamos oportunidades y te
                  guiamos en la implementación de soluciones efectivas.
                </p>
                <div className="grid gap-2 md:gap-3">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Análisis exhaustivo de tu negocio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Desarrollo de estrategias personalizadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Acompañamiento en la implementación</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Contáctanos</Button>
                  <Button size="lg" variant="outline">
                    Más Información
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="hidden md:block">
              <img
                src="/placeholder.svg"
                width={550}
                height={550}
                alt="Nuestros resultados son óptimos"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="grid gap-4 md:gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <BarChartIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Nuestros resultados son óptimos</h2>
              </div>
              <p className="text-muted-foreground text-lg md:text-xl">
                Nuestros clientes han experimentado un crecimiento significativo en sus negocios después de trabajar con
                nosotros. Nuestro enfoque personalizado y nuestra experiencia en la industria nos permiten entregar
                resultados excepcionales.
              </p>
              <div className="grid gap-2 md:gap-3">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Aumento promedio de ventas del 25%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Mejora en la eficiencia operativa del 30%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Satisfacción del cliente del 90%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:gap-12">
            <div className="grid gap-4 md:gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Clientes Satisfechos</h2>
              </div>
              <p className="text-muted-foreground text-lg md:text-xl">
                Nuestros clientes están encantados con los resultados que hemos logrado juntos. Escucha lo que algunos
                de ellos tienen que decir sobre su experiencia trabajando con nosotros.
              </p>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">John Doe</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Trabajar con Acme Inc ha sido una experiencia transformadora para mi negocio. Su enfoque
                      estratégico y atención personalizada han sido invaluables."
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">Jane Smith</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "El equipo de Acme Inc ha sido excepcional. Han demostrado un profundo entendimiento de nuestras
                      necesidades y han entregado resultados impresionantes."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ServiceComparison />
      <Herramientas />
      
      <Footer />
    </div>
  )
}

function BarChartIcon(props: any) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}