import { Routes, Route } from "react-router-dom"

// Pages
import InternshipPage from './pages/InternshipPage.jsx'
import NoPage from "./pages/NoPage.jsx"

// Components
import NavbarComponent from './components/NavbarComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'

function App() {

  return (
    <>
      <NavbarComponent />
        <Routes>
          <Route index element={<InternshipPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      <FooterComponent />
    </>
  )
}

export default App
