import { Cursos } from "@/components/Cursos"
import { Formacion } from "@/components/Formacion"
import { Habilidades } from "@/components/Habilidades"
import { Hero } from "@/components/Hero"
import { Intereses } from "@/components/Intereses"
import { Presentacion } from "@/components/Presentacion"
import { Proyectos } from "@/components/Proyectos"
import { Footer } from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ScrollGato } from "@/ui/ScrollGato"
import { ContactoModal } from "@/ui/ContactoModal"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      {/* enlace para saltar el menú con teclado: solo aparece al enfocarlo con Tab */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-cacao focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
      >
        Saltar al contenido
      </a>

      <Header />
      <ScrollGato />
      <ContactoModal />

      <main id="contenido">
        <Hero />
        <Presentacion />
        <Intereses />
        <Habilidades />
        <Formacion />
        <Cursos />
        <Proyectos />
      </main>

      <Footer />
    </div>
  )
}
