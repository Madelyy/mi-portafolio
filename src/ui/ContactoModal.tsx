"use client"
import { useEffect, useRef, useState } from "react"
import { perfil } from "@/data/perfil"
import { Icon } from "@/ui/Icons"
import { GatitoMini } from "@/ui/GatoIcon"
import { EVENTO_CONTACTO } from "@/ui/BotonContacto"

const quitarProtocolo = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")

export function ContactoModal() {
    const ref = useRef<HTMLDialogElement>(null)
    const [copiado, setCopiado] = useState(false)

    useEffect(() => {
        const abrir = () => {
            const dialogo = ref.current
            if (dialogo && !dialogo.open) dialogo.showModal()
        }
        window.addEventListener(EVENTO_CONTACTO, abrir)
        return () => window.removeEventListener(EVENTO_CONTACTO, abrir)
    }, [])

    const cerrar = () => ref.current?.close()

    const copiar = async () => {
        try {
            await navigator.clipboard.writeText(perfil.email)
            setCopiado(true)
            setTimeout(() => setCopiado(false), 2200)
        } catch {
            /* si el navegador bloquea el portapapeles, el correo sigue visible para copiarlo a mano */
        }
    }

    const redes = [
        { href: perfil.linkedin, icon: "linkedin" as const, titulo: "LinkedIn", texto: quitarProtocolo(perfil.linkedin) },
        { href: perfil.github, icon: "github" as const, titulo: "GitHub", texto: quitarProtocolo(perfil.github) },
    ]

    return (
        <dialog
            ref={ref}
            className="modal-gato"
            aria-labelledby="contacto-titulo"
            onClick={(e) => {
                if (e.target === e.currentTarget) cerrar()
            }}
        >
            <div className="relative pt-9">
                <GatitoMini className="absolute top-0 left-1/2 z-0 w-[72px] -translate-x-1/2" />

                <div className="relative z-10 rounded-[32px] border border-rose/50 bg-paper p-7 shadow-[0_40px_90px_rgba(59,44,50,.28)] sm:p-9">
                    <button
                        type="button"
                        onClick={cerrar}
                        aria-label="Cerrar contacto"
                        className="absolute top-4 right-4 cursor-pointer rounded-full p-2 text-muted transition-colors hover:bg-rose-pale hover:text-rose-dark"
                    >
                        <Icon name="close" size={18} />
                    </button>

                    <p className="font-hand text-2xl text-rose-dark">₊˚⊹ ♡ hola, hola</p>
                    <h2 id="contacto-titulo" className="mt-1 mb-2 font-serif text-[clamp(28px,5vw,36px)] leading-[1.1] font-medium">
                        Escríbeme
                    </h2>
                    <p className="mb-6 text-sm leading-[1.7] text-muted">
                        Cuéntame sobre tu idea, una oportunidad o simplemente di hola.
                    </p>

                    <div className="rounded-2xl bg-rose-pale p-4 sm:p-5">
                        <p className="font-hand text-xl leading-none text-rose-dark">Correo</p>
                        <p className="mt-2 font-serif text-[clamp(17px,4.2vw,21px)] break-all select-all">{perfil.email}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={copiar}
                                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-cacao px-4 py-2.5 text-[13px] font-medium text-paper transition-colors hover:bg-rose-dark"
                            >
                                <Icon name={copiado ? "check" : "copy"} size={15} />
                                {copiado ? "¡Copiado!" : "Copiar correo"}
                            </button>
                            <a
                                href={`mailto:${perfil.email}`}
                                className="inline-flex items-center gap-2 rounded-full border border-rose-dark/30 bg-paper px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-white"
                            >
                                <Icon name="mail" size={15} /> Abrir mi app de correo
                            </a>
                        </div>
                        <span className="sr-only" role="status">{copiado ? "Correo copiado al portapapeles" : ""}</span>
                    </div>

                    <ul className="m-0 mt-3 grid list-none gap-2 p-0">
                        {redes.map((red) => (
                            <li key={red.titulo}>
                                <a
                                    href={red.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 rounded-2xl border border-line px-4 py-3 transition-colors hover:border-cielo-dark/30 hover:bg-cielo"
                                >
                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cielo text-cielo-dark transition-colors group-hover:bg-paper">
                                        <Icon name={red.icon} size={16} />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-sm font-semibold">{red.titulo}</span>
                                        <span className="block truncate text-xs text-muted">{red.texto}</span>
                                    </span>
                                    <Icon name="external" size={15} />
                                    <span className="sr-only">(se abre en una pestaña nueva)</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </dialog>
    )
}
