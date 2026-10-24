import type { ReactNode } from "react"
import type { Proyecto } from "@/data/proyectos"

function Marco({ className = "", etiqueta, children }: { className?: string; etiqueta?: string; children: ReactNode }) {
    return (
        <div
            className={`relative aspect-[1.28] overflow-hidden [container-type:inline-size] ${className}`}
            {...(etiqueta ? { role: "img", "aria-label": etiqueta } : {})}
        >
            {children}
        </div>
    )
}

function VisualImagen({ src, alt }: { src: string; alt: string }) {
    return (
        <Marco>
            <div className="shine-card relative overflow-hidden">
                <img
                    className="block h-full w-full object-cover"
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div
                className="absolute top-[15%] left-[17%] w-[65%] bg-[rgba(255,253,251,.94)] shadow-[0_20px_60px_rgba(66,43,47,.18)]"
                aria-hidden="true"
            />
        </Marco>
    );
}

function VisualPanel() {
    return (
        <Marco etiqueta="Vista previa conceptual del proyecto" className="bg-[#eee9e5]">
            <div className="absolute inset-0 flex p-[7%]">
                <div className="flex w-[22%] flex-col gap-[2.4cqw] bg-[#373131] p-[7%] text-white">
                    <span className="mb-[4cqw] font-serif text-[length:max(10px,2.4cqw)] font-bold">nexo</span>
                    {[0, 1, 2, 3].map((item) => (
                        <i className="h-[max(2px,.5cqw)] w-4/5 bg-[#6e6563]" key={item} />
                    ))}
                </div>
                <div className="flex-1 bg-[#faf8f5] p-[8%]">
                    <small className="block text-[length:max(7px,1.4cqw)] uppercase text-rose-dark">Panel académico</small>
                    <strong className="mt-[1.4cqw] mb-[3.5cqw] block font-serif text-[length:clamp(12px,4cqw,26px)] font-medium">
                        Buenos días, estudiante.
                    </strong>
                    <div className="grid grid-cols-3 gap-[1.2cqw]">
                        {[0, 1, 2].map((item) => (
                            <span className="h-[8cqw] bg-rose-pale" key={item} />
                        ))}
                    </div>
                    <div className="mt-[3.5cqw] flex h-[34%] items-end gap-[8%] border-b border-l border-line pl-[8%]">
                        {[35, 70, 48, 85, 60].map((height) => (
                            <i className="w-[9%] bg-rose" style={{ height: `${height}%` }} key={height} />
                        ))}
                    </div>
                </div>
            </div>
        </Marco>
    )
}

function VisualApp() {
    return (
        <Marco etiqueta="Vista previa conceptual del proyecto" className="bg-[#d9c1c0]">
            <div className="absolute inset-0 flex items-center justify-center gap-[10%] p-[7%]">
                <div className="flex aspect-[.55] w-[35%] flex-col items-center rounded-[4cqw] border-[max(3px,.9cqw)] border-[#312b2b] bg-[#f9f3ef] px-[8%] py-[13%] text-center shadow-[0_20px_40px_rgba(59,41,43,.18)]">
                    <small className="font-serif text-[length:max(8px,1.8cqw)] italic">mindful</small>
                    <div className="my-[25%] mb-[18%] aspect-square w-[70%] rounded-full bg-[radial-gradient(circle_at_30%_30%,#f8e9e4,#c59098)]" />
                    <strong className="font-serif text-[length:clamp(8px,2.4cqw,16px)] font-medium">Un momento para ti.</strong>
                    <span className="mt-auto w-full bg-ink px-[1.4cqw] py-[1cqw] text-[length:max(6px,1cqw)] text-white">
                        Comenzar
                    </span>
                </div>
                <div className="text-white">
                    <span className="text-[length:max(7px,1.3cqw)] uppercase tracking-[.13em]">Concepto / 03</span>
                    <strong className="my-[1.8cqw] block font-serif text-[length:clamp(20px,6.6cqw,44px)] font-medium leading-[1.05]">
                        Calma digital.
                    </strong>
                    <p className="text-[length:max(7px,1.3cqw)] uppercase tracking-[.1em]">Interfaz · experiencia · detalle</p>
                </div>
            </div>
        </Marco>
    )
}

export function ProyectoVisual({ proyecto }: { proyecto: Proyecto }) {
    if (proyecto.imagen) return <VisualImagen src={proyecto.imagen} alt={proyecto.alt} />
    if (proyecto.tone === "paper") return <VisualPanel />
    return <VisualApp />
}