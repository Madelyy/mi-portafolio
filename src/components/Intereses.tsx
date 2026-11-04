import { intereses } from "@/data/intereses"
import { Seccion } from "@/ui/Seccion"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"
import { Icon } from "@/ui/Icons"
import { Reveal } from "@/ui/Reveal"

export function Intereses() {
    return (
        <Seccion id="intereses" className="cursor-default">
            <EncabezadoSeccion
                kicker="Áreas de interés"
                titulo="Donde diseño y tecnología se encuentran"
                intro="Me interesa construir productos digitales desde una mirada integral: pensados con empatía, diseñados con intención y desarrollados con precisión."
            />
            {/* las columnas pares bajan un poco: composición escalonada */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:pb-10">
                {intereses.map((item, index) => (
                    <div key={item.num} className={index % 2 === 1 ? "md:translate-y-10" : ""}>
                        <Reveal delay={index * 90} className="h-full">
                            <article
                                className={`group relative h-full min-h-[260px] overflow-hidden rounded-[28px] border p-7 transition-all duration-300 hover:shadow-[0_24px_60px_rgba(156,94,104,.14)] motion-safe:hover:-translate-y-1.5 md:min-h-[320px] md:p-[clamp(28px,3vw,40px)] ${item.featured
                                        ? "border-rose/60 bg-rose-pale/70 hover:bg-rose-pale"
                                        : "border-line bg-paper hover:bg-cielo/60"
                                    }`}
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute -right-3 -bottom-4 text-rose opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-14deg] group-hover:opacity-30"
                                >
                                    <Icon name="paw" size={120} />
                                </span>
                                <div className="relative flex items-start justify-between gap-3">
                                    <span className="text-oro"><Icon name="sparkle" size={18} /></span>
                                    {item.featured && (
                                        <span className="rounded-full border border-oro/50 bg-oro-pale px-3 py-1 text-xs text-[#7d6020]">
                                            Enfoque principal
                                        </span>
                                    )}
                                </div>
                                <h3 className="relative mt-10 mb-[18px] text-balance font-serif text-[clamp(26px,2.6vw,37px)] font-medium leading-[1.15] sm:mt-[56px]">
                                    {item.titulo}
                                </h3>
                                <p className="relative max-w-[520px] text-[15px] leading-[1.8] text-muted">{item.texto}</p>
                            </article>
                        </Reveal>
                    </div>
                ))}
            </div>
        </Seccion>
    )
}
