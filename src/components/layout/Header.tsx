"use client"
import { useEffect, useState } from "react"
import { navLinks } from "@/data/navLinks"
import { perfil } from "@/data/perfil"
import { Icon } from "@/ui/Icons"
import { GatitoMini } from "@/ui/GatoIcon"
import { BotonContacto } from "@/ui/BotonContacto"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activo, setActivo] = useState("inicio")
    const close = () => setOpen(false)

    // Sombra al bajar
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        onScroll()

        window.addEventListener("scroll", onScroll, { passive: true })

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Resalta el link de la sección que estás viendo
    useEffect(() => {
        const secciones = navLinks
            .map(([, id]) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        if (!secciones.length) return

        const io = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((e) => e.isIntersecting && setActivo(e.target.id))
            },
            { rootMargin: "-40% 0px -55% 0px" }
        )

        secciones.forEach((s) => io.observe(s))

        return () => io.disconnect()
    }, [])

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
        <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
            <div
                className={`mx-auto flex max-w-[1180px] items-center justify-between rounded-full border border-rose/40 bg-paper/75 py-2 pr-2 pl-4 backdrop-blur-xl transition-shadow duration-300 sm:pl-5 ${scrolled ? "shadow-[0_12px_40px_rgba(156,94,104,.18)]" : "shadow-[0_2px_14px_rgba(156,94,104,.06)]"
                    }`}
            >
                <a
                    className="group flex items-center gap-2.5 font-serif text-lg font-medium tracking-[-.5px] sm:text-xl"
                    href="#inicio"
                    aria-label="Ir al inicio"
                    onClick={close}
                >
                    <GatitoMini className="w-8 transition-transform duration-300 group-hover:-rotate-12" />
                    <span>
                        {perfil.nombre}
                        <span className="text-oro">.</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
                    {navLinks.map(([label, id]) => {
                        const esActivo = activo === id
                        return (
                            <a
                                key={id}
                                href={`#${id}`}
                                aria-current={esActivo ? "true" : undefined}
                                className={`rounded-full px-3.5 py-2 text-[13px] transition-colors ${esActivo ? "bg-rose-pale text-rose-dark" : "text-muted hover:bg-warm hover:text-rose-dark"
                                    }`}
                            >
                                {label}
                            </a>
                        )
                    })}
                </nav>

                <div className="flex items-center gap-1">
                    <BotonContacto className="hidden items-center gap-2 rounded-full bg-cacao px-5 py-2.5 text-[13px] font-medium text-paper transition-colors hover:bg-rose-dark lg:inline-flex">
                        <Icon name="mail" size={15} /> Contáctame
                    </BotonContacto>
                    <button
                        type="button"
                        className="flex cursor-pointer rounded-full border-0 bg-transparent p-2.5 transition-colors hover:bg-rose-pale lg:hidden"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={open}
                        aria-controls="menu-movil"
                    >
                        <Icon name={open ? "close" : "menu"} size={22} />
                    </button>
                </div>
            </div>

            {open && (
                <div
                    id="menu-movil"
                    className="anim-pop absolute inset-x-3 top-full mt-2 max-h-[calc(100dvh-96px)] overflow-y-auto rounded-[28px] border border-rose/40 bg-paper p-3 shadow-[0_24px_60px_rgba(156,94,104,.2)] sm:inset-x-6 lg:hidden"
                >
                    <nav className="flex flex-col" aria-label="Principal móvil">
                        {navLinks.map(([label, id]) => (
                            <a
                                className={`rounded-2xl px-4 py-3.5 text-sm transition-colors ${activo === id ? "bg-rose-pale text-rose-dark" : "text-muted hover:bg-warm hover:text-rose-dark"
                                    }`}
                                href={`#${id}`}
                                key={id}
                                onClick={close}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                    <BotonContacto
                        onClick={() => {
                            close()
                            window.dispatchEvent(new Event("abrir-contacto"))
                        }}
                        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-cacao px-5 py-3.5 text-sm font-medium text-paper"
                    >
                        <Icon name="mail" size={16} /> Contáctame
                    </BotonContacto>
                </div>
            )}
        </header>
    )

}