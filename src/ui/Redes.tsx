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
            className="flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2 text-[13px] text-muted backdrop-blur-sm transition-all duration-200 hover:border-rose hover:bg-rose-pale hover:text-rose-dark focus-visible:bg-rose-pale focus-visible:text-rose-dark motion-safe:hover:-translate-y-0.5"
            href={href}
            {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            <Icon name={icon} size={16} />
            {label}
        </a>
    )
}
