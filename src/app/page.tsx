import { Cursos } from "@/components/Cursos";
import { Formacion } from "@/components/Formacion";
import { Habilidades } from "@/components/Habilidades";
import { Hero } from "@/components/Hero"
import { Intereses } from "@/components/Intereses"
import { Presentacion } from "@/components/Presentacion"
import { Proyectos } from "@/components/Proyectos";
import { Footer } from "@/components/layout/Footer";
import Header from "@/components/layout/Header"

export default function Home() {
  return (
    <div className="bg-paper text-ink">
      <Header />
      <Hero />
      <Presentacion />
      <Intereses />
      <Habilidades />
      <Formacion />
      <Cursos />
      <Proyectos />
      <Footer />
    </div>
  );
}
