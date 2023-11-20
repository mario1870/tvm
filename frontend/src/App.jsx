import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Aktive from "./pages/Aktive";
import Gymnastik from "./pages/Gymnastik";
import Kinderturnen from "./pages/Kinderturnen";
import Sponsoren from "./pages/Sponsoren";
import Kontakt from "./pages/Kontakt";
import Sportheim from "./pages/Sportheim";
import Veranstaltungen from "./pages/Veranstaltungen";


function App() {
  return (
    <>
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-400 to-violet-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aktive" element={<Aktive />} />
        <Route path="/gymnsatik" element={<Gymnastik />} />
        <Route path="/kinderturnen" element={<Kinderturnen />} />
        <Route path="/sponsoren" element={<Sponsoren />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/sportheim" element={<Sportheim />} />
        <Route path="/veranstaltungen" element={<Veranstaltungen />} />
      </Routes>
      </div>
    </>
  )
}

export default App
