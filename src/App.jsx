import { BrowserRouter, Routes, Route } from "react-router-dom";

import Alumni from "./pages/Alumni.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Institute from "./pages/Institutes.jsx";
import Academics from "./pages/Academics.jsx";
import Events from "./pages/Events.jsx";
import Sports from "./pages/Sports.jsx"
import Achivement from "./pages/Achivement.jsx"
import Career from "./pages/Career.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/Alumni" element={<Alumni />} />
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Institute" element={<Institute />} />
      <Route path="/Academics" element={<Academics />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Sports" element={<Sports />} />
      <Route path="/Achivement" element={<Achivement />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    );
};

export default App;