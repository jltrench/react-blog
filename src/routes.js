import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import ScrollToTop from "components/ScrollToTop";
import NotFound from "paginas/NotFound";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function AppRoutes() {
  return(
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio />}/>
          <Route path="sobremim" element={<SobreMim/>} />
        </Route>

        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
