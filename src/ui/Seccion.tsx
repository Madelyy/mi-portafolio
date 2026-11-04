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
}: SeccionProps) {
    return (
        /* scroll-mt compensa el header flotante; antes "scroll" + mt-[72px] sumaban un hueco de 72px entre secciones */
        <section className={`relative scroll-mt-20 ${className}`} {...props}>
            <Contenedor className={`py-[clamp(64px,9vw,140px)] ${contenedorClassName}`}>
                {children}
            </Contenedor>
        </section>
    )
}