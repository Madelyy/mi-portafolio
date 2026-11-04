import type { ReactNode } from 'react'

export type IconName =
    | 'arrow' | 'download' | 'github' | 'linkedin' | 'mail' | 'external' | 'menu' | 'close'
    | 'paw' | 'sparkle' | 'copy' | 'check'

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
    const paths: Record<IconName, ReactNode> = {
        arrow: <><path className="stroke-current" d="M5 12h14M14 5l7 7-7 7" /></>,
        download: <><path className="stroke-current" d="M12 3v12m0 0 5-5m-5 5-5-5" /><path className="stroke-current" d="M5 21h14" /></>,
        github: <path className="stroke-current" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.2.5S18.1.1 15 1.8a13.4 13.4 0 0 0-6 0C5.9.1 4.8.5 4.8.5A5 5 0 0 0 4.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" />,
        linkedin: <><path className="stroke-current" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><path className="stroke-current" d="M2 9h4v12H2z" /><path className="stroke-current" d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></>,
        mail: <><rect className="stroke-current" x="3" y="5" width="18" height="14" rx="2" /><path className="stroke-current" d="m3 7 9 6 9-6" /></>,
        external: <><path className="stroke-current" d="M15 3h6v6M10 14 21 3" /><path className="stroke-current" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
        menu: <><path className="stroke-current" d="M4 7h16M4 12h16M4 17h16" /></>,
        close: <><path className="stroke-current" d="m6 6 12 12M18 6 6 18" /></>,
        copy: <><rect className="stroke-current" x="9" y="9" width="11" height="11" rx="2" /><path className="stroke-current" d="M5 15V6a2 2 0 0 1 2-2h9" /></>,
        check: <path className="stroke-current" d="m5 12.5 4.5 4.5L19 7.5" />,
        paw: (
            <g fill="currentColor" stroke="none">
                <ellipse cx="5" cy="11" rx="1.9" ry="2.5" />
                <ellipse cx="9" cy="6.8" rx="1.9" ry="2.5" />
                <ellipse cx="15" cy="6.8" rx="1.9" ry="2.5" />
                <ellipse cx="19" cy="11" rx="1.9" ry="2.5" />
                <path d="M12 11.5c-3 0-6 3.6-6 6 0 1.8 1.4 2.6 3 2.6 1.1 0 2-.5 3-.5s1.9.5 3 .5c1.6 0 3-.8 3-2.6 0-2.4-3-6-6-6Z" />
            </g>
        ),
        sparkle: <path fill="currentColor" stroke="none" d="M12 2c.6 4.8 2.2 7.4 8 10-5.8 2.6-7.4 5.2-8 10-.6-4.8-2.2-7.4-8-10 5.8-2.6 7.4-5.2 8-10Z" />,
    }

    return (
        <svg className="shrink-0" aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            {paths[name]}
        </svg>
    )
}