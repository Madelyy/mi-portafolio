import { Icon } from "@/ui/Icons"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"
import { Seccion } from "@/ui/Seccion"
import { GatitoMini } from "@/ui/GatoIcon"

const chips = ["Front-End", "UI/UX", "Team gatitos"]

export function Presentacion() {
    return (
        <Seccion id="sobre-mi">
            <EncabezadoSeccion kicker="Sobre mí" titulo="Curiosidad técnica, sensibilidad creativa." />
            <div className="cursor-default grid grid-cols-1 items-start gap-[clamp(24px,4vw,60px)] md:grid-cols-2 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_minmax(0,.62fr)]">
                <p className="m-0 text-balance font-serif text-[clamp(28px,3.1vw,43px)] leading-[1.3]">
                    Disfruto entender cómo funcionan las cosas y, sobre todo, cómo hacer que funcionen{" "}
                    <em className="text-rose-dark">mejor para las personas.</em>
                </p>
                <div className="group md:pt-2">
                    <p className="mb-5 text-[15px] leading-[1.9] text-muted">
                        Soy una estudiante curiosa, creativa y analítica. Me motiva convertir problemas en soluciones digitales
                        claras, combinando lógica, empatía y atención al detalle.
                    </p>
                    <p className="mb-6 text-[15px] leading-[1.9] text-muted">
                        Veo cada proyecto como una oportunidad para aprender, experimentar y elevar la calidad de lo que
                        construyo. Busco crecer junto a equipos que valoren las buenas ideas, la colaboración y el aprendizaje
                        continuo.
                    </p>
                    <ul className="m-0 mb-6 flex list-none flex-wrap gap-2 p-0">
                        {chips.map((chip) => (
                            <li key={chip} className="flex items-center gap-1.5 rounded-full border border-line bg-warm px-3.5 py-1.5 text-xs text-muted">
                                <span className="text-rose-dark"><Icon name="paw" size={13} /></span>
                                {chip}
                            </li>
                        ))}
                    </ul>
                    <GatitoMini className="w-12 transition-transform duration-300 group-hover:-rotate-6" />
                </div>

                {/* polaroid con washi tape */}
                <figure className="group relative m-0 mt-6 w-full max-w-[190px] justify-self-center rotate-[2.5deg] bg-white p-[10px_10px_15px] shadow-[0_16px_45px_rgba(62,43,45,.12)] transition-transform duration-300 motion-safe:hover:rotate-[-1deg] motion-safe:hover:scale-[1.03] md:col-start-2 md:mt-4 md:max-w-[210px] md:justify-self-end lg:col-start-auto lg:max-w-[260px]">
                    <span aria-hidden="true" className="tape absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3" />
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
                    <figcaption className="flex items-center justify-between px-1 pt-3 font-hand text-xl leading-none text-rose-dark">
                        <span>Manchas</span>
                        <span aria-hidden="true">₊˚⊹ ♡</span>
                    </figcaption>
                </figure>
            </div>
        </Seccion>
    )
}