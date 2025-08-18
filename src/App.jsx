import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import Accueil from "./pages/Accueil.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Competences from "./pages/Competences.jsx"
import Contact from "./pages/Contact.jsx"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App