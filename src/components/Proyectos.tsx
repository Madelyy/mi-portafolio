import { perfil } from "@/data/perfil"
import { proyectos } from "@/data/proyectos"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"
import { Icon } from "@/ui/Icons"
import { ProyectoVisual } from "@/ui/ProyectoVisual"
import { Seccion } from "@/ui/Seccion"

const enlace = "flex items-center gap-2 border-b border-ink pb-[7px] text-xs font-semibold"

export function Proyectos() {
    return (
        <Seccion id="proyectos" className="cursor-default">
            <EncabezadoSeccion
                kicker="06 · Proyectos seleccionados"
                titulo="Ideas llevadas a la pantalla."
                intro="Una selección de proyectos académicos y personales que muestran mi proceso y mi criterio visual."
            />
            <div className="grid gap-[clamp(72px,9vw,100px)]">
                {proyectos.map((proyecto, index) => {
                    const invertido = index % 2 === 1
                    return (
                        <article
                            key={proyecto.index}
                            className={`grid grid-cols-1 items-center gap-x-[clamp(40px,6vw,105px)] gap-y-8 md:grid-cols-2 ${invertido ? "lg:grid-cols-[.85fr_1.15fr]" : "lg:grid-cols-[1.15fr_.85fr]"
                                }`}
                        >
                            <div className={invertido ? "md:order-2" : ""}>
                                <ProyectoVisual proyecto={proyecto} />
                            </div>
                            <div className={invertido ? "md:order-1" : ""}>
                                <span className="font-serif text-[22px] text-rose-dark">/ {proyecto.index}</span>
                                <p className="mt-6 text-[11px] uppercase tracking-[.13em] text-muted md:mt-12">{proyecto.subtitulo}</p>
                                <h3 className="mt-[15px] mb-[22px] text-balance font-serif text-[clamp(32px,4vw,54px)] font-medium leading-[1.08]">
                                    {proyecto.titulo}
                                </h3>
                                <p className="max-w-[480px] text-sm leading-[1.8] text-muted">{proyecto.texto}</p>
                                <ul className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
                                    {proyecto.tags.map((tag) => (
                                        <li key={tag} className="rounded-[30px] border border-line bg-paper px-3 py-1.5 text-[11px] text-muted transition-all duration-200 hover:bg-rose hover:text-white">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                                <div className="cursor-pointer mt-8 flex flex-wrap gap-x-[22px] gap-y-4 md:mt-[45px]">
                                    <a className={enlace} href={perfil.github} target="_blank" rel="noopener noreferrer">
                                        Ver en GitHub <Icon name="external" size={15} />
                                        <span className="sr-only"> (se abre en una pestaña nueva)</span>
                                    </a>
                                    <a className={`transition-all hover:gap-5 ${enlace}`} href={proyecto.demo}>
                                        Ver demo <Icon name="arrow" size={15} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </Seccion>
    )
}
