import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Baffles from "./pages/Baffles";
import Falante from "./pages/Falante";
import Cabos from "./pages/Cabos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/baffles" element={<Baffles/>}/>
        <Route path="/falante" element={<Falante/>}/>
        <Route path="/cabos" element={<Cabos/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
