import { Icon } from "@/ui/Icons"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"
import { Seccion } from "@/ui/Seccion"
import { GatoIcon } from "@/ui/GatoIcon"

export function Presentacion() {
    return (
        <Seccion id="sobre-mi">
            <EncabezadoSeccion kicker="01 · Sobre mí" titulo="Curiosidad técnica, sensibilidad creativa." />
            <div className="grid grid-cols-1 items-start gap-[clamp(24px,4vw,60px)] md:grid-cols-2 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_minmax(0,.62fr)]">
                <p className="m-0 text-balance font-serif text-[clamp(28px,3.1vw,43px)] leading-[1.3]">
                    Disfruto entender cómo funcionan las cosas y, sobre todo, cómo hacer que funcionen{" "}
                    <em className="text-rose-dark">mejor para las personas.</em>
                </p>
                <div className="group md:pt-2">
                    <p className="mb-5 text-[15px] leading-[1.9] text-muted">
                        Soy una estudiante curiosa, creativa y analítica. Me motiva convertir problemas en soluciones digitales
                        claras, combinando lógica, empatía y atención al detalle.
                    </p>
                    <p className="mb-5 text-[15px] leading-[1.9] text-muted">
                        Veo cada proyecto como una oportunidad para aprender, experimentar y elevar la calidad de lo que
                        construyo. Busco crecer junto a equipos que valoren las buenas ideas, la colaboración y el aprendizaje
                        continuo.
                    </p>
                    <GatoIcon />
                </div>
                <figure className="group m-0 mt-4 w-full max-w-[190px] justify-self-center rotate-[2.5deg] bg-white p-[10px_10px_15px] shadow-[0_16px_45px_rgba(62,43,45,.1)] transition-transform duration-200 motion-safe:hover:rotate-[-0.5deg] motion-safe:hover:scale-[1.03] md:col-start-2 md:mt-0 md:max-w-[210px] md:justify-self-end lg:col-start-auto lg:max-w-[260px]">
                    <div className="shine-card overflow-hidden bg-rose-pale">
                        <img
                            className="aspect-square w-full object-cover saturate-[0.85] transition-transform duration-500 motion-safe:group-hover:scale-[1.05]"
                            src="/images/2.jpg"
                            alt="Manchas"
                            width={520}
                            height={520}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <figcaption className="px-[3px] pt-3" aria-hidden="true">
                        <span className="flex justify-end font-serif text-sm">₊˚⊹ ♡</span>
                    </figcaption>
                </figure>
            </div>
        </Seccion>
    )
}
