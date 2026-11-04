import { perfil } from "@/data/perfil"
import { proyectos } from "@/data/proyectos"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"
import { Icon } from "@/ui/Icons"
import { ProyectoVisual } from "@/ui/ProyectoVisual"
import { Seccion } from "@/ui/Seccion"
import { Reveal } from "@/ui/Reveal"

const enlace =
    "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-200 motion-safe:hover:-translate-y-0.5"

export function Proyectos() {
    return (
        <Seccion id="proyectos" className="cursor-default">
            <EncabezadoSeccion
                kicker="Proyectos seleccionados"
                titulo="Ideas llevadas a la pantalla."
                intro="Una selección de proyectos académicos y personales que muestran mi proceso y mi criterio visual."
            />
            <div className="grid gap-[clamp(72px,9vw,110px)]">
                {proyectos.map((proyecto, index) => {
                    const invertido = index % 2 === 1
                    const direccion = String(proyecto.demo ?? "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
                    return (
                        <Reveal key={proyecto.index}>
                            <article
                                className={`grid grid-cols-1 items-center gap-x-[clamp(40px,6vw,105px)] gap-y-8 md:grid-cols-2 ${invertido ? "lg:grid-cols-[.85fr_1.15fr]" : "lg:grid-cols-[1.15fr_.85fr]"
                                    }`}
                            >
                                <div className={invertido ? "md:order-2" : ""}>
                                    {/* ventana de navegador */}
                                    <div className="overflow-hidden rounded-[22px] border border-line bg-paper shadow-[0_30px_70px_rgba(156,94,104,.16)] transition-transform duration-500 motion-safe:hover:-translate-y-1.5">
                                        <div className="flex items-center gap-3 border-b border-line bg-warm px-4 py-3">
                                            <span className="flex gap-1.5" aria-hidden="true">
                                                <i className="h-2.5 w-2.5 rounded-full bg-rose" />
                                                <i className="h-2.5 w-2.5 rounded-full bg-oro" />
                                                <i className="h-2.5 w-2.5 rounded-full bg-cielo-dark/40" />
                                            </span>
                                            <span className="min-w-0 flex-1 truncate rounded-full bg-paper px-3.5 py-1 text-[11px] text-muted">
                                                {direccion || "proyecto"}
                                            </span>
                                        </div>
                                        <ProyectoVisual proyecto={proyecto} />
                                    </div>
                                </div>
                                <div className={invertido ? "md:order-1" : ""}>
                                    <span className="font-hand text-[28px] leading-none text-rose-dark">Proyecto {proyecto.index}</span>
                                    <p className="mt-5 text-xs text-muted md:mt-8">{proyecto.subtitulo}</p>
                                    <h3 className="mt-3 mb-[22px] text-balance font-serif text-[clamp(32px,4vw,52px)] font-medium leading-[1.08]">
                                        {proyecto.titulo}
                                    </h3>
                                    <p className="max-w-[480px] text-sm leading-[1.8] text-muted">{proyecto.texto}</p>
                                    <ul className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
                                        {proyecto.tags.map((tag, i) => (
                                            <li
                                                key={tag}
                                                className={`rounded-full border px-3 py-1.5 text-[11px] ${i % 3 === 0
                                                        ? "border-rose/60 bg-rose-pale text-rose-dark"
                                                        : i % 3 === 1
                                                            ? "border-cielo-dark/20 bg-cielo text-cielo-dark"
                                                            : "border-oro/40 bg-oro-pale text-[#7d6020]"
                                                    }`}
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 flex flex-wrap gap-3 md:mt-[42px]">
                                        <a className={`${enlace} border-line hover:border-rose hover:bg-rose-pale`} href={perfil.github} target="_blank" rel="noopener noreferrer">
                                            Ver en GitHub <Icon name="external" size={15} />
                                            <span className="sr-only"> (se abre en una pestaña nueva)</span>
                                        </a>
                                        <a className={`${enlace} border-cacao bg-cacao text-paper hover:bg-rose-dark hover:border-rose-dark`} href={proyecto.demo} target="_blank" rel="noopener noreferrer">
                                            Ver demo <Icon name="arrow" size={15} />
                                            <span className="sr-only"> (se abre en una pestaña nueva)</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    )
                })}
            </div>
        </Seccion>
    )
}
