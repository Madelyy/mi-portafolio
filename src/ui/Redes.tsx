import { Icon, type IconName } from "@/ui/Icons"

type RedesProps = {
    href: string
    icon: IconName
    label: string
}

export function Redes({ href, icon, label }: RedesProps) {
    const externo = /^https?:\/\//.test(href)

    return (
        <a
            className="flex items-center gap-2 py-1 text-[13px] text-muted transition-colors hover:text-rose-dark focus-visible:text-rose-dark"
            href={href}
            {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            <Icon name={icon} />
            {label}
        </a>
    )
}
