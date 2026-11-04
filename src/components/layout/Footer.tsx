import { navLinks } from "@/data/navLinks"
import { perfil } from "@/data/perfil"
import { Contenedor } from "@/ui/Seccion"
import { BotonContacto } from "@/ui/BotonContacto"
import { Icon } from "@/ui/Icons"

const enlaceSutil = "text-sm text-muted transition-colors hover:text-rose-dark"

export function Footer() {
    return (
        <footer className="border-t border-line bg-warm">
            <Contenedor className="py-[clamp(56px,8vw,96px)]">
                <div className="grid gap-12 md:grid-cols-[1.4fr_.7fr_1fr] md:gap-16">
                    <div>
                        <a className="font-serif text-3xl font-medium tracking-[-1px]" href="#inicio" aria-label="Ir al inicio">
                            {perfil.iniciales}
                            <span className="text-oro">.</span>
                        </a>
                        <span aria-hidden="true" className="my-6 block h-px w-10 bg-oro" />
                        <p className="m-0 max-w-[22ch] text-balance font-serif text-[clamp(22px,2.6vw,30px)] leading-[1.25] italic">
                            Diseñado con intención. Desarrollado con curiosidad.
                        </p>
                    </div>

                    <nav aria-label="Navegación secundaria">
                        <p className="mb-4 text-xs font-semibold text-ink">Navegación</p>
                        <ul className="m-0 grid list-none gap-2.5 p-0">
                            {navLinks.slice(0, 6).map(([label, id]) => (
                                <li key={id}>
                                    <a className={enlaceSutil} href={`#${id}`}>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <p className="mb-4 text-xs font-semibold text-ink">Contacto</p>
                        <a
                            href={`mailto:${perfil.email}`}
                            className="inline-block break-all font-serif text-lg underline decoration-oro/60 decoration-1 underline-offset-[5px] transition-colors hover:text-rose-dark"
                        >
                            {perfil.email}
                        </a>
                        <ul className="m-0 mt-5 grid list-none gap-2.5 p-0">
                            <li>
                                <a className={`${enlaceSutil} inline-flex items-center gap-2`} href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Icon name="linkedin" size={15} /> LinkedIn
                                    <span className="sr-only"> (se abre en una pestaña nueva)</span>
                                </a>
                            </li>
                            <li>
                                <a className={`${enlaceSutil} inline-flex items-center gap-2`} href={perfil.github} target="_blank" rel="noopener noreferrer">
                                    <Icon name="github" size={15} /> GitHub
                                    <span className="sr-only"> (se abre en una pestaña nueva)</span>
                                </a>
                            </li>
                            <li>
                                <BotonContacto className={`${enlaceSutil} inline-flex items-center gap-2`}>
                                    <Icon name="mail" size={15} /> Más formas de contacto
                                </BotonContacto>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                    <p className="m-0 text-xs text-muted">
                        © {new Date().getFullYear()} {perfil.nombre} · {perfil.rol}
                    </p>
                    <a href="#inicio" className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-rose-dark">
                        Volver arriba
                        <span className="-rotate-90"><Icon name="arrow" size={14} /></span>
                    </a>
                </div>
            </Contenedor>
        </footer>
    )
}
