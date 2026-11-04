"use client"
import { useEffect, useRef, type ComponentPropsWithoutRef, type CSSProperties } from "react"

type RevealProps = ComponentPropsWithoutRef<"div"> & { delay?: number }

export function Reveal({ delay = 0, className = "", style, children, ...props }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible")
                    io.disconnect()
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])

    return (
        <div ref={ref} className={`reveal ${className}`} style={{ ...style, "--d": `${delay}ms` } as CSSProperties} {...props}>
            {children}
        </div>
    )
}