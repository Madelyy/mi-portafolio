import { navLinks } from "@/data/navLinks"
import { perfil } from "@/data/perfil"
import { GatoIcon } from "@/ui/GatoIcon"

export function Footer() {
    return (
        <footer className="grid grid-cols-[1fr_1.5fr_1fr] items-center gap-[45px] border-t border-line px-[max(6vw,32px)] py-[54px] max-[1050px]:grid-cols-2 max-[760px]:grid-cols-1">
            <div className="flex items-center gap-5">
                <a className="font-serif text-2xl font-medium tracking-[-1px]" href="#inicio">{perfil.iniciales}<span className="text-rose-dark">.</span></a>
                <p className="text-[11px] font-semibold leading-[1.6]">{perfil.nombre}<br className="block" /><span className="font-normal text-muted">{perfil.rol}</span></p>
            </div>
            <nav className="flex justify-center gap-[25px] max-[1050px]:hidden" aria-label="Navegación secundaria">
                {navLinks.slice(0, 6).map(([label, id]) => <a className="text-[10px] text-muted transition-colors hover:text-rose-dark" href={`#${id}`} key={id}>{label}</a>)}
            </nav>
            <div className="group text-right max-[760px]:text-left">
                <GatoIcon />
                <p className="font-serif text-[13px] leading-[1.5] italic">Diseñado con intención.<br className="block" />Desarrollado con curiosidad.</p>
                <span className="text-[8px] uppercase tracking-[.12em] text-muted">© 2025 · {perfil.nombre}</span>
            </div>
        </footer>
    )
}