import { softSkills, habilidades } from "@/data/habilidades"
import { Seccion } from "@/ui/Seccion"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"
import { GatitoMini } from "@/ui/GatoIcon"

// cada grupo tiene su puntito de color: rosa (dominante), cielo y oro (acentos)
const puntos = ["bg-rose", "bg-cielo-dark/60", "bg-oro"]
const hoverPills = [
    "hover:border-rose hover:bg-rose-pale hover:text-rose-dark",
    "hover:border-cielo-dark/40 hover:bg-cielo hover:text-cielo-dark",
    "hover:border-oro hover:bg-oro-pale hover:text-[#7d6020]",
]

export function Habilidades() {
    return (
        <Seccion id="habilidades" className="cursor-default">
            <EncabezadoSeccion
                kicker="Habilidades"
                titulo="Mi caja de herramientas."
                intro="Tecnologías y capacidades que forman parte de mi proceso actual."
            />
            <div className="grid grid-cols-1 gap-[clamp(32px,6vw,90px)] lg:grid-cols-[1.4fr_.6fr]">
                <div className="grid gap-4">
                    {habilidades.map((grupo, index) => (
                        <article
                            key={grupo.titulo}
                            className="grid grid-cols-1 items-start gap-x-6 gap-y-4 rounded-[24px] border border-line bg-paper px-6 py-6 transition-shadow duration-300 hover:shadow-[0_18px_44px_rgba(156,94,104,.1)] sm:grid-cols-[minmax(130px,190px)_1fr] sm:px-7"
                        >
                            <h3 className="m-0 flex items-center gap-3 font-serif text-xl font-medium">
                                <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rounded-full ${puntos[index % puntos.length]}`} />
                                {grupo.titulo}
                            </h3>
                            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                                {grupo.tecnologia.map((item) => (
                                    <li
                                        key={item}
                                        className={`rounded-full border border-line bg-warm px-3.5 py-1.5 text-xs text-muted transition-all duration-200 motion-safe:hover:-translate-y-0.5 ${hoverPills[index % hoverPills.length]}`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                {/* nota adhesiva con washi tape */}
                <aside className="relative h-fit w-full max-w-[640px] rotate-[1deg] rounded-[28px] bg-rose-pale p-[clamp(28px,4vw,50px)] pt-[clamp(40px,5vw,60px)] shadow-[0_26px_60px_rgba(156,94,104,.16)] lg:sticky lg:top-28 lg:max-w-none">
                    <span aria-hidden="true" className="tape absolute -top-3.5 left-1/2 h-7 w-28 -translate-x-1/2 -rotate-3" />
                    <p className="mb-3 font-hand text-[28px] leading-none text-rose-dark">Habilidades blandas</p>
                    <h3 className="mb-8 font-serif text-[clamp(30px,4vw,38px)] font-medium leading-[1.1]">
                        Más allá
                        <br className="hidden sm:block" /> del código.
                    </h3>
                    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                        {softSkills.map((skill) => (
                            <li
                                key={skill}
                                className="flex items-center gap-1.5 rounded-full bg-paper/80 px-3.5 py-2 text-[13px] before:text-rose-dark before:content-['♡']"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-9 font-serif italic leading-[1.6] text-muted">
                        Escuchar, aprender y colaborar también son parte de construir buenos productos.
                    </p>
                    <GatitoMini className="absolute -right-2 -bottom-7 w-14 rotate-[-8deg]" />
                </aside>
            </div>
        </Seccion>
    )
}
