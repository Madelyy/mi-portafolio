import { perfil } from "@/data/perfil"
import { Icon } from "@/ui/Icons"
import { Redes } from "@/ui/Redes"

export function Hero() {
    return (
        <section id="inicio" className="overflow-x-clip cursor-default">
            <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-x-[clamp(32px,5vw,80px)] gap-y-6 px-[clamp(24px,6vw,96px)] pt-12 pb-16 md:grid-cols-[1fr_.85fr] md:gap-y-0 md:pt-20 md:pb-20 lg:grid-cols-2 lg:pt-24">
                <div className="contents md:block">
                    <p className="order-1 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-rose-dark sm:text-sm md:mb-7">
                        <span className="h-px w-8 bg-rose-dark" /> Portafolio · 2026
                    </p>
                    <h1 className="order-2 m-0 text-balance font-serif text-[clamp(2.5rem,11vw,4rem)] font-medium leading-[.99] tracking-[-.055em] md:text-[clamp(3.25rem,6.3vw,5.75rem)]">
                        Diseño experiencias <br className="hidden md:block" /> con{" "}
                        <em className="font-medium text-rose-dark">propósito</em>
                    </h1>
                    <p className="order-4 max-w-[60ch] text-[15px] leading-[1.8] text-muted md:mt-9 md:mb-8 md:text-lg">
                        Hola, soy <strong className="font-semibold text-ink">{perfil.nombre}</strong>, estudiante de Desarrollo de
                        Software apasionada por el desarrollo web, el diseño de interfaces y la creación de productos digitales
                        funcionales, atractivos e intuitivos.
                    </p>
                    <div className="order-5 flex flex-wrap items-center gap-x-7 gap-y-4">
                        <a
                            className="inline-flex min-w-48 items-center justify-center gap-[18px] bg-ink px-[22px] py-4 text-sm font-medium text-white transition-all duration-200 hover:bg-rose-dark motion-safe:hover:-translate-y-0.5 max-sm:w-full"
                            href="#proyectos"
                        >
                            Ver mis proyectos <Icon name="arrow" />
                        </a>
                        <a
                            className="flex gap-2 border-b border-line py-2.5 text-sm font-semibold"
                            href={`mailto:${perfil.email}`}
                        >
                            Hablemos{" "}
                            <span className="text-rose-dark" aria-hidden="true">
                                ↗
                            </span>
                        </a>
                    </div>
                    <div className="order-6 flex flex-wrap gap-x-7 gap-y-3 md:mt-12">
                        <Redes href={perfil.github} icon="github" label="Github" />
                        <Redes href={perfil.linkedin} icon="linkedin" label="LinkedIn" />
                        <Redes href={`mailto:${perfil.email}`} icon="mail" label="Email" />
                    </div>
                </div>
                <div className="relative order-3 w-full max-w-sm justify-self-center pt-4 pr-7 sm:max-w-md md:max-w-xl md:order-none">
                    <div className="absolute inset-y-0 right-0 left-[12%] bg-rose-pale" />
                    <figure className="group relative z-[1] m-0">
                        <img
                            className="aspect-[0.78] w-full object-cover object-[center_30%] saturate-[0.75]"
                            src={perfil.foto}
                            alt="Foto portafolio"
                            width={780}
                            height={1000}
                            decoding="async"
                        />
                        <figcaption className="absolute bottom-3.5 left-3.5 bg-[rgba(255,253,251,0.9)] px-2.5 py-[7px] text-[10px] uppercase tracking-wider text-muted opacity-0 transition-opacity group-hover:opacity-100">
                            Foto
                        </figcaption>
                    </figure>
                    <p className="absolute top-1/2 right-2.5 z-[2] hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.2em] [writing-mode:vertical-rl] sm:block">
                        Desarrollo de Software · Diseño web
                    </p>
                    <div className="absolute right-0 bottom-0.5 z-[2] bg-paper px-4 py-3 text-[10px] uppercase tracking-[.1em] shadow-[0_10px_30px_rgba(62,43,45,0.08)]">
                        <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#8ca884]" /> Abierta a aprender y colaborar
                    </div>
                </div>
            </div>
        </section>
    )
}
