import { cursos } from "@/data/cursos"
import { Seccion } from "@/ui/Seccion"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"
import { Icon } from "@/ui/Icons"

const estadoEstilos = {
    completado: "bg-rose-pale text-rose-dark",
    progreso: "border border-rose text-rose-dark",
    planeado: "bg-warm text-muted",
}

type Estado = keyof typeof estadoEstilos

export function Cursos() {
    return (
        <Seccion id="certificaciones">
            <EncabezadoSeccion
                kicker="05 · Cursos & Certificaciones"
                titulo="Aprendizaje continuo."
                intro="Una colección en crecimiento de cursos, certificaciones y temas que forman parte de mi ruta profesional."
            />
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
                {cursos.map((curso, index) => {
                    const completado = curso.estado === "completado"
                    const estilo = estadoEstilos[curso.estado as Estado] ?? estadoEstilos.planeado

                    return (
                        <article
                            key={curso.titulo}
                            className="relative flex min-h-[320px] flex-col border border-line p-7 transition-all duration-200 hover:shadow-[0_18px_50px_rgba(62,43,45,.07)] motion-safe:hover:-translate-y-[5px] sm:p-9 lg:min-h-[370px]"
                        >
                            <div className="absolute top-[23px] right-7 font-serif text-[35px] text-line" aria-hidden="true">
                                {String(index + 1).padStart(2, "0")}
                            </div>
                            <span className={`mb-10 self-start rounded-[20px] px-2.5 py-1.5 text-[10px] uppercase tracking-[.1em] sm:mb-12 ${estilo}`}>
                                {curso.tipo}
                            </span>
                            <h3 className="mb-3 text-balance font-serif text-[clamp(22px,2.2vw,25px)] font-medium leading-[1.2]">
                                {curso.titulo}
                            </h3>
                            <p className="mb-[18px] text-xs text-ink">
                                {curso.institution} <span className="mx-[5px] text-rose-dark">·</span> {curso.fecha}
                            </p>
                            <p className="mb-6 text-[13px] leading-[1.75] text-muted">{curso.texto}</p>
                            <a
                                className="mt-auto flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.07em]"
                                href="#contacto"
                                aria-label={`${completado ? "Ver certificado" : "Más información"}: ${curso.titulo}`}
                            >
                                {completado ? "Ver certificado" : "Más información"} <Icon name="external" size={15} />
                            </a>
                        </article>
                    )
                })}
            </div>
        </Seccion>
    )
}