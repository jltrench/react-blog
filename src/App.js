import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import SobreMim from "./components/SobreMim";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobremim" element={<SobreMim/>} />
        <Route path="*" element={<div>Pag n encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
