import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FileQuestion } from 'lucide-react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-background">
        <div className="text-center">
          <FileQuestion className="w-24 h-24 text-muted-foreground mb-8 mx-auto" />
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
          <p className="text-center mb-8 max-w-md text-muted-foreground mx-auto">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <Button className="bg-primary text-primary-foreground" asChild>
            <Link href="/">
              Volver a la página principal
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}