/* Nube suave (usa currentColor) */
export function Nube({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg className={className} style={style} viewBox="0 0 112 56" aria-hidden="true" fill="currentColor">
            <path d="M26 52a16 16 0 0 1-2-31.9A22 22 0 0 1 66 14a18 18 0 0 1 30 14 12 12 0 0 1-2 24Z" />
        </svg>
    )
}

/* Borde de nubecitas para transiciones entre secciones (usa currentColor) */
export function BordeNube({ className = "" }: { className?: string }) {
    const d = "M0 0H1200V10" + "a30 22 0 0 1-60 0".repeat(20) + "Z"
    return (
        <svg className={`block w-full ${className}`} viewBox="0 0 1200 34" preserveAspectRatio="none" aria-hidden="true" fill="currentColor">
            <path d={d} />
        </svg>
    )
}
