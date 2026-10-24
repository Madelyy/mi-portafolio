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
            <p className={`mb-7 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? 'text-rose' : 'text-rose-dark'}`}>{kicker}</p>
            <div className="grid grid-cols-[1.25fr_.75fr] items-end gap-20 max-md:grid-cols-1 max-md:gap-6">
                <h2 className={`m-0 max-w-[830px] font-serif text-[clamp(41px,5vw,68px)] font-medium leading-[1.05] tracking-[-.04em] F${dark ? 'text-white' : 'text-ink'}`}>{titulo}</h2>
                {intro && <p className="m-0 max-w-[450px] text-sm leading-[1.75] text-muted">{intro}</p>}
            </div>
        </div>
    )
}