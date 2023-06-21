import { lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Home = lazy(() => import("./Pages/Home"))
const Portfolio = lazy(() => import("./Pages/Portfolio"))
const Experience = lazy(() => import("./Pages/Experience"))
const Books = lazy(() => import("./Pages/Books"))
const Contact = lazy(() => import("./Pages/Contact"))

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/books" element={< Books/>} />
            <Route exact path="/contactme" element={< Contact/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App