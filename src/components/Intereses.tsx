import { intereses } from "@/data/intereses"
import { Seccion } from "@/ui/Seccion"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"

export function Intereses() {
    return (
        <Seccion id="intereses" className="cursor-default">
            <EncabezadoSeccion
                kicker="02 · Áreas de interés"
                titulo="Donde diseño y tecnología se encuentran"
                intro="Me interesa construir productos digitales desde una mirada integral: pensados con empatía, diseñados con intención y desarrollados con precisión."
            />
            <div className="grid grid-cols-1 border-t border-l border-line md:grid-cols-2">
                {intereses.map((item) => (
                    <article
                        key={item.num}
                        className={`relative min-h-[260px] border-r border-b border-line p-7 transition-all duration-200 hover:bg-paper motion-safe:hover:-translate-y-1 md:min-h-[320px] md:p-[clamp(28px,3vw,38px)] ${
                            item.featured ? "bg-paper" : ""
                        }`}
                    >
                        <div className="flex items-start justify-between gap-3 text-sm text-rose-dark">
                            <span>{item.num}</span>
                            {item.featured && (
                                <span className="rounded-[20px] border border-rose px-2.5 py-1 text-[10px] uppercase tracking-widest hover:bg-rose transition-colors">
                                    Enfoque principal
                                </span>
                            )}
                        </div>
                        <h3 className="mt-10 mb-[18px] text-balance font-serif text-[clamp(26px,2.6vw,37px)] font-medium leading-[1.15] sm:mt-[60px]">
                            {item.titulo}
                        </h3>
                        <p className="max-w-[520px] text-[15px] leading-[1.8] text-muted">{item.texto}</p>
                    </article>
                ))}
            </div>
        </Seccion>
    )
}
