const skills = [
    "C#", ".NET", "React", "TypeScript", "SQL", "Git",
    "Microsoft 365", "Entra ID", "Azure", "C++",
]

const certs = [
    "ITIL 4 Foundation",
    "AWS Certified Cloud Practitioner",
    "CompTIA Project+",
]

function About() {
    return (
        <section>
            <h1>Hi, I'm Jake.</h1>
            <p className="tagline">
                IT tech by day. Developer by... also day, just later. Gamer 24/7.
            </p>

            <p>
                I'm an IT tech at a managed service provider in the Tulsa area, juggling
                Microsoft 365, Entra ID, access and permissions, endpoints, email, and
                more RMM tools than any one person should know. Every client is a new
                puzzle, and some of them fight back.
            </p>

            <p>
                I finished my software engineering degree at WGU, where I learned Java
                and also learned I don't like Java. C++ is still my favorite. Right now
                I'm relearning full stack the hard way, with C#, .NET, and React.
                This site is project #1. You're looking at it.
            </p>

            <p>
                I also like building small portable tools: no installer, no nonsense,
                just run it and get on with your day.
            </p>

            <h2>What I work with</h2>
            <ul className="skills">
                {skills.map(s => <li key={s}>{s}</li>)}
            </ul>

            <h2>Certifications</h2>
            <ul className="certs">
                {certs.map(c => <li key={c}>{c}</li>)}
            </ul>

            <h2>Off the clock</h2>
            <p>
                Gamer at heart. World of Warcraft junkie with a hint of Aion 2 mixed in.
                Getting humbled in Tarkov. Rebuilding my entire city in a city builder
                because I didn't like the layout.
            </p>
            <p>
                I also dabble in game development, with a graveyard of half-started
                projects to prove it, each one overthrown by a shinier idea. This site
                is the one I'm actually finishing. Next up: a questionable promise to
                run local AI models.
            </p>
            <p>
                Most importantly: dad to my boy, a baby girl on the way, and a fiancée
                who puts up with all of it. So "sleep" is about to become a deprecated
                feature.
            </p>

            <h2>Find me</h2>
            <p>
                <a href="https://github.com/JakeyBee" target="_blank" rel="noopener noreferrer">GitHub</a>
                {" · "}
                <a href="https://linkedin.com/in/jacob-burnett-ok" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
        </section>
    )
}

export default About