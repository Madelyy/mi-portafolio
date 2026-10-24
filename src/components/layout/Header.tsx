"use client"
import { useEffect, useState } from "react"
import { navLinks } from "@/data/navLinks"
import { perfil } from "@/data/perfil"
import { Icon } from "@/ui/Icons"
import { Contenedor } from "@/ui/Seccion"

export default function Header() {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)

    useEffect(() => {
        if (!open) return

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close()
        }

        const mq = window.matchMedia("(min-width: 1024px)")
        const onChange = (e: MediaQueryListEvent) => {
            if (e.matches) close()
        }

        const overflowPrevio = document.body.style.overflow
        document.body.style.overflow = "hidden"

        document.addEventListener("keydown", onKey)
        mq.addEventListener("change", onChange)

        return () => {
            document.body.style.overflow = overflowPrevio
            document.removeEventListener("keydown", onKey)
            mq.removeEventListener("change", onChange)
        }
    }, [open])

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-[rgba(255,253,251,.92)] backdrop-blur-[14px]">
            <Contenedor className="flex h-[72px] items-center justify-between md:h-[84px]">
                <a
                    className="font-serif text-2xl font-medium tracking-[-1px]"
                    href="#inicio"
                    aria-label="Ir al inicio"
                    onClick={close}
                >
                    {perfil.nombre}
                    <span className="text-rose-dark">.</span>
                </a>
                <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Principal">
                    {navLinks.map(([label, id]) => (
                        <a
                            className="text-[13px] text-muted transition-colors hover:text-rose-dark"
                            href={`#${id}`}
                            key={id}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    className="-mr-2 flex cursor-pointer border-0 bg-transparent p-2 lg:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={open}
                    aria-controls="menu-movil"
                >
                    <Icon name={open ? "close" : "menu"} size={22} />
                </button>
            </Contenedor>
            {open && (
                <div
                    id="menu-movil"
                    className="absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-line bg-paper md:max-h-[calc(100dvh-84px)] lg:hidden"
                >
                    <nav
                        className="mx-auto flex max-w-[1440px] flex-col px-[clamp(24px,6vw,96px)] pt-2 pb-6"
                        aria-label="Principal móvil"
                    >
                        {navLinks.map(([label, id]) => (
                            <a
                                className="border-b border-line/60 py-4 text-sm text-muted transition-colors last:border-0 hover:text-rose-dark"
                                href={`#${id}`}
                                key={id}
                                onClick={close}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>

    )
}