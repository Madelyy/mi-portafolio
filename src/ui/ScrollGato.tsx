"use client"
import { useEffect, useRef } from "react"
import { GatitoMini } from "@/ui/GatoIcon"

/*
  Regla lateral con un gatito que baja mientras haces scroll.
  El progreso vive en la variable CSS --p (0 a 1) para no re-renderizar React en cada scroll.
  En móvil se muestra solo una barra fina arriba.
*/
export function ScrollGato() {
    const etiqueta = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        let raf = 0
        const actualizar = () => {
            raf = 0
            const max = document.documentElement.scrollHeight - window.innerHeight
            const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
            document.documentElement.style.setProperty("--p", p.toFixed(4))
            if (etiqueta.current) etiqueta.current.textContent = `${Math.round(p * 100)}%`
        }
        const pedir = () => {
            if (!raf) raf = requestAnimationFrame(actualizar)
        }
        actualizar()
        window.addEventListener("scroll", pedir, { passive: true })
        window.addEventListener("resize", pedir)
        return () => {
            window.removeEventListener("scroll", pedir)
            window.removeEventListener("resize", pedir)
            cancelAnimationFrame(raf)
        }
    }, [])

    const posicion = { top: "calc(var(--p, 0) * 100%)" }

    return (
        <>
            <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[3px] md:hidden">
                <div className="h-full bg-gradient-to-r from-rose to-oro" style={{ width: "calc(var(--p, 0) * 100%)" }} />
            </div>

            <div
                aria-hidden="true"
                className="pointer-events-none fixed top-1/2 right-3 z-40 hidden h-[56vh] -translate-y-1/2 md:block lg:right-5"
            >
                <div className="relative h-full w-5 rounded-full border border-line bg-paper/85 shadow-[0_8px_28px_rgba(156,94,104,.14)] backdrop-blur-sm">
                    <div
                        className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-rose-pale via-rose to-rose-dark/70"
                        style={{ height: "calc(var(--p, 0) * 100%)" }}
                    />
                    <div className="regla absolute inset-0 rounded-full" />
                    <div className="absolute left-1/2 w-11 -translate-x-1/2 -translate-y-1/2" style={posicion}>
                        <GatitoMini className="w-full drop-shadow-[0_4px_6px_rgba(156,94,104,.25)]" />
                    </div>
                    <span
                        ref={etiqueta}
                        className="absolute right-[calc(100%+26px)] -translate-y-1/2 rounded-full bg-paper/90 px-2.5 py-0.5 font-hand text-lg leading-none text-rose-dark shadow-sm"
                        style={posicion}
                    >
                        0%
                    </span>
                </div>
            </div>
        </>
    )
}