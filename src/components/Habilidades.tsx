import { softSkills, habilidades } from "@/data/habilidades"
import { Seccion } from "@/ui/Seccion"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"

export function Habilidades() {
    return (
        <Seccion id="habilidades" className="cursor-default">
            <EncabezadoSeccion
                kicker="03 · Habilidades"
                titulo="Mi caja de herramientas."
                intro="Tecnologías y capacidades que forman parte de mi proceso actual."
            />
            <div className="grid grid-cols-1 gap-[clamp(40px,8vw,120px)] lg:grid-cols-[1.4fr_.6fr]">
                <div>
                    {habilidades.map((grupo, index) => (
                        <article
                            key={grupo.titulo}
                            className="grid grid-cols-[28px_1fr] items-start gap-x-4 gap-y-3 border-t border-line py-6 last:border-b sm:grid-cols-[38px_minmax(130px,190px)_1fr] sm:gap-x-6"
                        >
                            <span className="pt-[5px] text-[11px] text-rose-dark">{String(index + 1).padStart(2, "0")}</span>
                            <h3 className="m-0 font-serif text-xl font-medium">{grupo.titulo}</h3>
                            <ul className="col-start-2 m-0 flex list-none flex-wrap gap-2 p-0 sm:col-start-3">
                                {grupo.tecnologia.map((item) => (
                                    <li
                                        key={item}
                                        className="transition-all hover:scale-[1.02] hover:bg-rose rounded-[30px] border border-line bg-paper px-3 py-1.5 text-xs text-muted"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
                <aside className="w-full max-w-[640px] bg-rose-pale p-[clamp(28px,4vw,58px)] lg:max-w-none">
                    <p className="mb-7 text-xs font-semibold uppercase tracking-[.18em] text-rose-dark sm:text-sm">
                        Habilidades blandas
                    </p>
                    <h3 className="mb-9 font-serif text-[clamp(30px,4vw,39px)] font-medium leading-[1.1]">
                        Más allá
                        <br className="hidden sm:block" /> del código.
                    </h3>
                    <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-2 p-0">
                        {softSkills.map((skill) => (
                            <li key={skill} className="border-b border-[rgba(156,94,104,.3)] px-1 py-[9px] text-[13px]">
                                {skill}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-10 font-serif italic leading-[1.6] text-muted lg:mt-[50px]">
                        Escuchar, aprender y colaborar también son parte de construir buenos productos.
                    </p>
                </aside>
            </div>
        </Seccion>
    )
}
