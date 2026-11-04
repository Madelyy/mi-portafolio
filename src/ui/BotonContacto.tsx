"use client"
import type { ComponentPropsWithoutRef } from "react"

export const EVENTO_CONTACTO = "abrir-contacto"

/* Cualquier botón que quiera abrir el modal de contacto */
export function BotonContacto({ className = "", children, ...props }: ComponentPropsWithoutRef<"button">) {
    return (
        <button
            type="button"
            className={`cursor-pointer ${className}`}
            onClick={() => window.dispatchEvent(new Event(EVENTO_CONTACTO))}
            {...props}
        >
            {children}
        </button>
    )
}