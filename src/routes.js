import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import ScrollToTop from "components/ScrollToTop";
import NotFound from "paginas/NotFound";
import Post from "paginas/Post";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import "./index.css";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function AppRoutes() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((temaAtual) => (temaAtual === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <div id={theme}>
          <ScrollToTop />
          <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark"}
              offColor="#A8D1D1"
              offHandleColor="#E7AB79"
              onColor="#635985"
              onHandleColor="#4C3A51"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={38}
            />
          </div>

          <Menu />

          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="sobremim" element={<SobreMim />} />
            </Route>

            <Route path="posts/:id/*" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Rodape />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default AppRoutes;
