import { perfil } from "@/data/perfil"
import { Icon } from "@/ui/Icons"
import { Redes } from "@/ui/Redes"
import { Nube } from "@/ui/Nubes"
import { BotonContacto } from "@/ui/BotonContacto"

const retraso = (ms: number) => ({ ["--d" as string]: `${ms}ms` })

function Oreja({ className = "" }: { className?: string }) {
    return (
        <div aria-hidden="true" className={`absolute z-0 h-20 w-20 bg-rose [clip-path:polygon(50%_0,0_100%,100%_100%)] ${className}`}>
            <div className="absolute inset-x-[27%] top-[42%] bottom-0 bg-rose-pale [clip-path:polygon(50%_0,0_100%,100%_100%)]" />
        </div>
    )
}

export function Hero() {
    return (
        <section id="inicio" className="relative overflow-x-clip cursor-default">
            {/* ambiente: manchas de color, nubes y destellos */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -top-28 -left-28 h-[440px] w-[440px] rounded-full bg-rose-pale opacity-90 blur-3xl" />
                <div className="absolute top-1/4 -right-24 h-[380px] w-[380px] rounded-full bg-cielo opacity-90 blur-3xl" />
                <Nube className="anim-drift absolute top-[12%] left-[5%] w-24 text-white drop-shadow-[0_10px_18px_rgba(156,94,104,.14)]" />
                <Nube className="anim-drift absolute top-[58%] left-[38%] hidden w-16 text-white drop-shadow-[0_10px_18px_rgba(156,94,104,.12)] md:block" style={{ animationDuration: "22s", animationDelay: "-6s" }} />
                <Nube className="anim-drift absolute top-[8%] right-[9%] w-32 text-white drop-shadow-[0_10px_18px_rgba(71,105,127,.14)]" style={{ animationDuration: "19s", animationDelay: "-3s" }} />
                <span className="anim-twinkle absolute top-[26%] left-[44%] text-oro" style={retraso(0)}><Icon name="sparkle" size={14} /></span>
                <span className="anim-twinkle absolute top-[70%] right-[44%] text-rose" style={retraso(900)}><Icon name="sparkle" size={18} /></span>
                <span className="anim-twinkle absolute top-[16%] right-[30%] text-oro" style={retraso(1700)}><Icon name="sparkle" size={12} /></span>
            </div>

            <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-x-[clamp(32px,5vw,80px)] gap-y-6 px-[clamp(24px,6vw,96px)] pt-10 pb-16 md:grid-cols-[1fr_.85fr] md:gap-y-0 md:pt-16 md:pb-20 lg:grid-cols-2 lg:pt-20">
                <div className="contents md:block">
                    <p className="anim-in order-1 flex items-center gap-2 font-hand text-[28px] leading-none text-rose-dark md:mb-6" style={retraso(0)}>
                        <span className="text-oro"><Icon name="sparkle" size={18} /></span>
                        Portafolio · 2026 
                    </p>
                    <h1 className="anim-in order-2 m-0 text-balance font-serif text-[clamp(2.5rem,11vw,4rem)] font-medium leading-[1.02] tracking-[-.05em] md:text-[clamp(3.25rem,6.3vw,5.6rem)]" style={retraso(110)}>
                        Diseño experiencias <br className="hidden md:block" />
                        <span className="relative inline-block italic text-rose-dark">
                            con propósito
                            <svg aria-hidden="true" viewBox="0 0 300 14" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-2.5 w-full text-oro" fill="none">
                                <path d="M2 8c24-8 24 8 48 0s24-8 48 0 24 8 48 0 24-8 48 0 24 8 48 0 24-8 48 0 8 4 10 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>
                    <p className="anim-in order-4 mt-2 max-w-[60ch] text-[15px] leading-[1.8] text-muted md:mt-9 md:mb-8 md:text-lg" style={retraso(240)}>
                        Hola, soy <strong className="font-semibold text-ink">{perfil.nombre}</strong>, estudiante de Desarrollo de
                        Software apasionada por el desarrollo web, el diseño de interfaces y la creación de productos digitales
                        funcionales, atractivos e intuitivos.
                    </p>
                    <div className="anim-in order-5 flex flex-wrap items-center gap-x-6 gap-y-4" style={retraso(340)}>
                        <a
                            className="group inline-flex min-w-48 items-center justify-center gap-3 rounded-full bg-cacao px-7 py-4 text-sm font-medium text-white shadow-[0_12px_30px_rgba(59,44,50,.22)] transition-all duration-200 hover:bg-rose-dark motion-safe:hover:-translate-y-0.5 max-sm:w-full"
                            href="#proyectos"
                        >
                            Ver mis proyectos
                            <span className="transition-transform duration-200 group-hover:translate-x-1"><Icon name="arrow" /></span>
                        </a>
                        <BotonContacto className="flex items-center gap-2 border-b-2 border-oro/60 py-2 text-sm font-semibold transition-colors hover:border-rose-dark hover:text-rose-dark">
                            Hablemos <Icon name="mail" size={16} />
                        </BotonContacto>
                    </div>
                    <div className="anim-in order-6 flex flex-wrap gap-3 md:mt-12" style={retraso(440)}>
                        <Redes href={perfil.github} icon="github" label="Github" />
                        <Redes href={perfil.linkedin} icon="linkedin" label="LinkedIn" />
                        <Redes href={`mailto:${perfil.email}`} icon="mail" label="Email" />
                    </div>
                </div>

                {/* foto en arco con orejitas de gato */}
                <div className="anim-in relative order-3 w-full max-w-sm justify-self-center pt-12 pr-7 sm:max-w-md md:order-none md:max-w-[440px]" style={retraso(180)}>
                    <Oreja className="top-[40px] left-[9%] -rotate-[16deg]" />
                    <Oreja className="top-[40px] right-[calc(9%+28px)] rotate-[16deg]" />
                    <div className="absolute inset-y-6 right-0 left-[14%] z-0 rounded-t-full bg-rose-pale" />
                    <figure className="group relative z-[1] m-0 overflow-hidden rounded-t-full border-[6px] border-white shadow-[0_30px_70px_rgba(156,94,104,.22)]">
                        <img
                            className="aspect-[0.78] w-full object-cover object-[center_30%] saturate-[0.8] transition-transform duration-700 motion-safe:group-hover:scale-[1.04]"
                            src={perfil.foto}
                            alt="Foto portafolio"
                            width={780}
                            height={1000}
                            decoding="async"
                        />
                    </figure>

                    {/* sello giratorio */}
                    <div aria-hidden="true" className="absolute top-[34px] -right-1 z-[3] grid h-24 w-24 place-items-center rounded-full border border-rose/50 bg-paper shadow-[0_10px_30px_rgba(156,94,104,.16)]">
                        <svg viewBox="0 0 96 96" className="anim-giro absolute inset-0">
                            <path id="circ-sello" d="M48 48m-33 0a33 33 0 1 1 66 0a33 33 0 1 1-66 0" fill="none" />
                            <text className="fill-rose-dark font-sans text-[9px] font-semibold">
                                <textPath href="#circ-sello" textLength="205" lengthAdjust="spacing">front-end ✦ gatitos ✦ código ✦ detalles ✦</textPath>
                            </text>
                        </svg>
                        <span className="text-oro"><Icon name="paw" size={22} /></span>
                    </div>

                    {/* tarjeta de código */}
                    <div aria-hidden="true" className="anim-float absolute bottom-16 -left-3 z-[3] w-[196px] rounded-2xl bg-cacao/95 p-3.5 font-mono text-[11px] leading-[1.65] text-paper shadow-[0_20px_50px_rgba(59,44,50,.35)] backdrop-blur sm:-left-10 sm:w-[216px]">
                        <span className="mb-2 flex gap-1.5">
                            <i className="h-2 w-2 rounded-full bg-rose" />
                            <i className="h-2 w-2 rounded-full bg-oro" />
                            <i className="h-2 w-2 rounded-full bg-cielo" />
                        </span>
                        <p className="m-0"><span className="text-rose">const</span> <span className="text-cielo">madely</span> = {"{"}</p>
                        <p className="m-0 pl-3">rol: <span className="text-oro">"Front-End"</span>,</p>
                        <p className="m-0 pl-3">ama: [<span className="text-oro">"gatitos"</span>, <span className="text-oro">"React"</span>],</p>
                        <p className="m-0 pl-3">café: <span className="text-rose">true</span>,</p>
                        <p className="m-0">{"}"}</p>
                    </div>

                    <div className="absolute right-0 bottom-1 z-[3] flex items-center gap-2.5 rounded-full border border-line bg-paper px-4 py-2.5 text-xs shadow-[0_10px_30px_rgba(156,94,104,0.12)]">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8ca884] opacity-70" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8ca884]" />
                        </span>
                        Abierta a aprender y colaborar
                    </div>
                </div>
            </div>
        </section>
    )
}
