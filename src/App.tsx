import { NavLink, Routes, Route } from "react-router"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
  return (
      <>
        <nav>
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