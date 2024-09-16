"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send } from "lucide-react";
import Img from "../../components/Img";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
function HomePage({ params }: { params: { bookId: string } }) {
  const { bookId } = params;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (!name || !email) {
      alert("Se requiere tanto el nombre como el email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor ingrese un email válido");
      return;
    }

    try {
      const res = await fetch("api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ name, email, bookId }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Email enviado correctamente");
      } else {
        alert(data.message || "Error enviando el email");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Se produjo un error inesperado, inténtalo de nuevo");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <section className="w-full flex-1 pt-8 pb-12 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32 xl:pt-32 xl:pb-48 bg-gradient-to-b from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Descarga Nuestro eBook Gratis
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Descubre los secretos del éxito con nuestra guía completa.
                    Ingresa tu correo para obtener acceso instantáneo.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-2"
                  >
                    <input
                      id="name"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="max-w-lg px-4 py-2 border border-gray-300 rounded-md"
                    />
                    <input
                      id="email"
                      type="email"
                      placeholder="Ingresa tu correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="max-w-lg px-4 py-2 border border-gray-300 rounded-md"
                    />
                    <Button type="submit" disabled={isSubmitted}>
                      {isSubmitted ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                      <span className="ml-2">Enviar</span>
                    </Button>
                    {isSubmitted && (
                      <p className="text-sm text-green-600">
                        ¡Gracias! Revisa tu correo para el enlace de descarga.
                      </p>
                    )}
                  </form>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] md:w-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/80 rounded-lg shadow-2xl transform -rotate-6"></div>
                  <div className="absolute inset-0 bg-white rounded-lg shadow-xl">
                    <Img />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Qué Incluye
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                "Estrategias paso a paso",
                "Casos de estudio reales",
                "Entrevistas con expertos",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                >
                  <div className="p-2 bg-primary/10 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-center">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
