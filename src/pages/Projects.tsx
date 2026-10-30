type Project = {
    name: string
    description: string
    tech: string[]
    live?: string
    code?: string
}

const projects: Project[] = [
    {
        name: "burnbyte.dev",
        description: "My portfolio site. You're on it. Pair-programmed.",
        tech: ["React", "TypeScript", "Vite"],
        live: "https://burnbyte.dev",
        code: "https://github.com/JakeyBee/portfolio",
    },
    {
        name: "Fractal Explorer",
        description: "Zoom into the Mandelbrot set, Burning Ship and Julia fractals, drawn on the GPU. Pair-programmed.",
        tech: ["JavaScript", "WebGL", "GLSL"],
        live: "https://fractal.burnbyte.dev",
        code: "https://github.com/JakeyBee/fractal",
    },
]

function Projects() {
    return (
        <section>
            <h1>Projects</h1>

            {projects.map(p => (
                <article className="card" key={p.name}>
                    <h2>{p.name}</h2>
                    <p>{p.description}</p>
                    <ul className="skills">
                        {p.tech.map(t => <li key={t}>{t}</li>)}
                    </ul>
                    <p className="links">
                        {p.live && <a href={p.live}>Live</a>}
                        {p.code && <a href={p.code}>Code</a>}
                    </p>
                </article>
            ))}
        </section>
    )
}

export default Projects