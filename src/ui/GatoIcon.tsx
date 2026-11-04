/* Gatito de línea original (se mantiene por compatibilidad) */
export function GatoIcon() {
    return (
        <svg className="ml-auto mb-2.5 h-auto w-25 stroke-rose-dark opacity-40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-70 max-[760px]:ml-0" aria-hidden="true" viewBox="0 0 64 44" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path className="stroke-current" d="M16 34c-6-2-9-7-8-13 1-5 5-8 10-9l3-7 7 6c3-1 7-1 10 0l7-6 2 9c5 3 7 7 7 12 0 8-7 13-18 13H20" />
            <path className="stroke-current" d="M25 23h.1M40 23h.1M29 29c2 2 5 2 7 0M53 29c7 0 8-5 5-8" />
        </svg>
    )
}

/* Carita de gatito: la usa la regla del scroll, el header y el modal */
export function GatitoMini({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 36 34" fill="none" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 16 5 4l7 5q6-1.6 12 0l7-5v12q1 12-13 14T5 16Z" className="fill-paper stroke-rose-dark" strokeWidth="1.4" />
            <path d="M8 8.5v3.2l2.8-1.6ZM28 8.5v3.2l-2.8-1.6Z" className="fill-rose stroke-none" />
            <circle cx="10" cy="23.5" r="2.2" className="fill-rose stroke-none" opacity=".45" />
            <circle cx="26" cy="23.5" r="2.2" className="fill-rose stroke-none" opacity=".45" />
            <g className="anim-blink">
                <circle cx="13" cy="18" r="1.5" className="fill-ink stroke-none" />
                <circle cx="23" cy="18" r="1.5" className="fill-ink stroke-none" />
            </g>
            <path d="M16.6 21.8h2.8L18 23.4Z" className="fill-rose-dark stroke-none" />
            <path d="M18 23.4v1.2m-2.2.4q2.2 1.6 4.4 0" className="stroke-rose-dark" strokeWidth="1" />
            <path d="M7 21.5 1.5 20.5M7 24 1.5 25.5M29 21.5l5.5-1M29 24l5.5 1.5" className="stroke-rose" strokeWidth="1" />
        </svg>
    )
}