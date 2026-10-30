import { Link, NavLink, Routes, Route } from "react-router"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
  return (
      <>
        <nav>
          <Link to="/" className="brand" aria-label="BurnByte home">
            <img src="/icon.svg" alt="" width="28" height="28" />
            <span><span className="burn">burn</span><span className="byte">byte</span></span>
          </Link>
          <NavLink to="/">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </>
  )
}

export default App