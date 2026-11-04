import { perfil } from "@/data/perfil"
import { Seccion } from "@/ui/Seccion"
import { EncabezadoSeccion } from "@/ui/EncabezadoSecciones"
import { BordeNube } from "@/ui/Nubes"
import { Icon } from "@/ui/Icons"

const ciclo = "V Ciclo"

const cursos = [
    "Database Design",
    "Fundamentos de Programación Web",
    "Desarrollo de Aplicaciones Web",
]

const logros: string[] = []

const estrellas = [
    { pos: "top-[16%] left-[8%]", size: 14, d: 0 },
    { pos: "top-[30%] right-[10%]", size: 18, d: 900 },
    { pos: "bottom-[14%] left-[22%]", size: 12, d: 1600 },
    { pos: "bottom-[24%] right-[26%]", size: 14, d: 400 },
]

function Fila({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-[140px_1fr] sm:gap-5">
            <dt className="font-hand text-xl leading-none text-oro">{label}</dt>
            <dd className="m-0 text-[13px] leading-[1.6]">{children}</dd>
        </div>
    )
}

function Lista({ items }: { items: string[] }) {
    return (
        <ul className="m-0 grid list-none gap-2 p-0">
            {items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                    <span className="text-rose" aria-hidden="true"><Icon name="sparkle" size={11} /></span>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export function Formacion() {
    return (
        <Seccion id="formacion" className="cursor-default overflow-hidden bg-cacao text-paper" contenedorClassName="pt-[clamp(96px,12vw,180px)]">
            {/* nubecitas que bajan desde la sección clara */}
            <div aria-hidden="true" className="absolute inset-x-0 top-0 text-paper">
                <BordeNube className="h-7 md:h-10" />
            </div>
            {estrellas.map((e) => (
                <span key={e.pos} aria-hidden="true" className={`anim-twinkle absolute text-oro ${e.pos}`} style={{ ["--d" as string]: `${e.d}ms` }}>
                    <Icon name="sparkle" size={e.size} />
                </span>
            ))}

            <EncabezadoSeccion kicker="Formación" titulo="Aprender para construir mejor." dark />
            <div className="grid grid-cols-1 gap-8 rounded-[32px] border border-[#5a474f] bg-white/[.04] p-7 md:grid-cols-[.7fr_1.3fr] md:gap-x-[clamp(32px,4vw,55px)] md:p-10 lg:grid-cols-[.7fr_1fr_1.3fr]">
                <div className="font-hand text-[32px] leading-none text-oro">2023 — Actualidad</div>
                <div>
                    <span className="rounded-full border border-rose/50 px-3 py-1 text-xs text-rose">Formación académica</span>
                    <h3 className="mt-4 mb-2 text-balance font-serif text-[clamp(26px,3vw,32px)] font-medium">
                        Desarrollo de Software
                    </h3>
                    <p className="text-[13px] text-[#cfc3bf]">{perfil.instituto}</p>
                </div>
                <dl className="m-0 grid gap-6 border-t border-[#5a474f] pt-6 md:col-span-2 md:pt-8 lg:col-span-1 lg:border-t-0 lg:pt-0">
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