import { perfil } from "@/data/perfil"
import { Seccion } from "@/ui/Seccion"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"

const ciclo = "V Ciclo"

const cursos = [
    "Desarrollo de Software II",
    "Fundamentos de Programación Web",
    "Desarrollo de Aplicaciones Web",
]

const logros: string[] = []

function Fila({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-[140px_1fr] sm:gap-5">
            <dt className="text-[11px] uppercase tracking-[.08em] text-[#aaa09d]">{label}</dt>
            <dd className="m-0 text-[13px] leading-[1.6]">{children}</dd>
        </div>
    )
}

function Lista({ items }: { items: string[] }) {
    return (
        <ul className="m-0 grid list-none gap-2 p-0">
            {items.map((item) => (
                <li key={item} className="flex gap-2.5">
                    <span className="text-rose" aria-hidden="true">
                        —
                    </span>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export function Formacion() {
    return (
        <Seccion id="formacion" className="bg-ink text-paper cursor-default">
            <EncabezadoSeccion kicker="04 · Formación" titulo="Aprender para construir mejor." dark />
            <div className="grid grid-cols-1 gap-6 border-y border-[#4c4544] py-10 md:grid-cols-[.7fr_1.3fr] md:gap-x-[clamp(32px,4vw,55px)] md:py-12 lg:grid-cols-[.7fr_1fr_1.3fr]">
                <div className="text-sm tracking-[0.08em] text-[#AAA09D]">2023 — Actualidad</div>
                <div>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-rose">Formación académica</span>
                    <h3 className="mt-3.5 mb-2 text-balance font-serif text-[clamp(26px,3vw,32px)] font-medium">
                        Desarrollo de Software
                    </h3>
                    <p className="text-[13px] text-[#AAA09D]">{perfil.instituto}</p>
                </div>
                <dl className="m-0 grid gap-6 border-t border-[#4c4544] pt-6 md:col-span-2 md:pt-8 lg:col-span-1 lg:border-t-0 lg:pt-0">
                    <Fila label="Ciclo académico">{ciclo}</Fila>
                    <Fila label="Cursos relevantes">
                        <Lista items={cursos} />
                    </Fila>
                    {logros.length > 0 && (
                        <Fila label="Logros académicos">
                            <Lista items={logros} />
                        </Fila>
                    )}
                </dl>
            </div>
        </Seccion>
    )
}
