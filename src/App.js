import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Notebook from "./pages/Notebook";
import Closet from "./pages/Closet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/notebook" element={<Notebook />} />
      <Route path="/closet" element={<Closet />} />
    </Routes>
  );
}

export default App;
