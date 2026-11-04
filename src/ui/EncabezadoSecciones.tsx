import { Icon } from "@/ui/Icons"

export function EncabezadoSeccion({
    kicker,
    titulo,
    intro,
    dark = false
}: {
    kicker: string
    titulo: string
    intro?: string
    dark?: boolean
}) {
    return (
        <div className="mb-[clamp(48px,6vw,84px)]">
            <p className={`mb-4 flex items-center gap-2 font-hand text-[26px] leading-none ${dark ? "text-rose" : "text-rose-dark"}`}>
                <span className={dark ? "text-oro" : "text-oro"}><Icon name="sparkle" size={16} /></span>
                {kicker}
            </p>
            <div className="grid grid-cols-[1.25fr_.75fr] items-end gap-20 max-md:grid-cols-1 max-md:gap-6">
                {/* corregido: antes la clase quedaba como "Ftext-ink" y no se aplicaba */}
                <h2 className={`m-0 max-w-[830px] text-balance font-serif text-[clamp(38px,5vw,64px)] font-medium leading-[1.06] tracking-[-.035em] ${dark ? "text-paper" : "text-ink"}`}>
                    {titulo}
                </h2>
                {intro && <p className={`m-0 max-w-[450px] text-sm leading-[1.75] ${dark ? "text-[#cfc3bf]" : "text-muted"}`}>{intro}</p>}
            </div>
        </div>
    )
}
