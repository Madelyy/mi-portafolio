import { cursos } from "@/data/cursos"
import { Seccion } from "@/ui/Seccion"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"
import { Icon } from "@/ui/Icons"
import { Reveal } from "@/ui/Reveal"
import { BotonContacto } from "@/ui/BotonContacto"

const estadoEstilos = {
    completado: "bg-oro-pale text-[#7d6020]",
    progreso: "border border-rose bg-rose-pale text-rose-dark",
    planeado: "bg-cielo text-cielo-dark",
}

type Estado = keyof typeof estadoEstilos

export function Cursos() {
    return (
        <Seccion id="certificaciones" className="cursor-default ">
            <EncabezadoSeccion
                kicker="Cursos & Certificaciones"
                titulo="Aprendizaje continuo."
                intro="Una colección en crecimiento de cursos, certificaciones y temas que forman parte de mi ruta profesional."
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {cursos.map((curso, index) => {
                    const completado = curso.estado === "completado"
                    const estilo = estadoEstilos[curso.estado as Estado] ?? estadoEstilos.planeado

                    return (
                        <Reveal key={curso.titulo} delay={index * 100} className="h-full">
                            {/* tarjeta tipo boleto: cabecera + línea punteada + contenido */}
                            <article className="group relative flex h-full min-h-[340px] flex-col rounded-[28px] border border-line bg-paper transition-all duration-300 hover:border-rose hover:shadow-[0_24px_60px_rgba(156,94,104,.14)] motion-safe:hover:-translate-y-1.5">
                                <div className="flex items-center justify-between gap-3 border-b-2 border-dashed border-line px-7 py-5 sm:px-8">
                                    <span className={`rounded-full px-3 py-1.5 text-xs ${estilo}`}>{curso.tipo}</span>
                                    <span className="text-rose transition-transform duration-300 group-hover:rotate-[-14deg] group-hover:scale-110" aria-hidden="true">
                                        <Icon name="paw" size={22} />
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col px-7 pt-6 pb-7 sm:px-8">
                                    <h3 className="mb-3 text-balance font-serif text-[clamp(22px,2.2vw,25px)] font-medium leading-[1.2]">
                                        {curso.titulo}
                                    </h3>
                                    <p className="mb-4 text-xs text-ink">
                                        {curso.institution} <span className="mx-[5px] text-oro">✦</span> {curso.fecha}
                                    </p>
                                    <p className="mb-6 text-[13px] leading-[1.75] text-muted">{curso.texto}</p>
                                    <BotonContacto
                                        className="mt-auto flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 text-xs font-semibold transition-colors hover:border-rose hover:bg-rose-pale hover:text-rose-dark"
                                        aria-label={`${completado ? "Pedir el certificado" : "Más información"}: ${curso.titulo}`}
                                    >
                                        {completado ? "Pedir certificado" : "Más información"} <Icon name="mail" size={14} />
                                    </BotonContacto>
                                </div>
                            </article>
                        </Reveal>
                    )
                })}
            </div>
        </Seccion>
    )
}