import type { ComponentPropsWithoutRef } from "react"

export function Contenedor({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
    return (
        <div
            className={`mx-auto w-full max-w-[1440px] px-[clamp(24px,6vw,96px)] ${className}`}
            {...props}
        />
    )
}

type SeccionProps = ComponentPropsWithoutRef<"section"> & {
    contenedorClassName?: string
}

export function Seccion({
    className = "",
    contenedorClassName = "",
    children,
    ...props
}: (
    SeccionProps
)) {
    return (
        <section className={`scroll mt-[72px] md:scroll-mt-[84px] ${className}`} {...props}>
            <Contenedor className={`py-[clamp(64px,10vw,200px)] ${contenedorClassName}`}>
                {children}
            </Contenedor>
        </section>
    )
}