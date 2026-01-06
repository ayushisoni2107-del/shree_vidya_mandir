import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Institute from "./pages/Institutes.jsx";
import Academics from "./pages/Academics.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Institute" element={<Institute />} />
      <Route path="/Academics" element={<Academics />} />
    </Routes>
    );
};

export default App;