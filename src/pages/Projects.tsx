type Project = {
    name: string
    description: string
    tech: string[]          // string[] = a list of strings
}

const projects: Project[] = [
    {
        name: "burnbyte.dev",
        description: "My portfolio site. You're on it. Pair-programmed.",
        tech: ["React", "TypeScript", "Vite"],
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
                </article>
            ))}
        </section>
    )
}

export default Projects