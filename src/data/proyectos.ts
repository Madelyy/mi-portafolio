export const proyectos = [
    {
        index: "01",
        subtitulo: "Proyecto de prácticas preprofesionales · Albatros Asociados SAC",
        titulo: "Desarrollo web corporativo",
        texto: "Desarrollo de una página web corporativa para Albatros Asociados SAC, orientada a presentar la empresa, sus servicios y su información de contacto. Implementé una interfaz responsiva y componentes reutilizables, priorizando la usabilidad y la adaptación a distintos dispositivos.",
        tags: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
        ],
        imagen: '/images/albatros-asociados.vercel.app.jpg',
        alt: "Interfaz de la página web corporativa de Albatros Asociados",
        tone: "blue",
        demo: "https://albatros-asociados.vercel.app/"
    }
]

export type Proyecto = (typeof proyectos)[number]
