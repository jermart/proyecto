import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cuenta from "../pages/Cuenta";
import HomePages from "../pages/HomePages";
import LoginPages from "../pages/LoginPages";
import LoginUser from "../pages/LoginUser";
import Presentacion from "../pages/Presentacion";
import Proyectos from "../pages/Proyectos";

function Approuters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="/home" element={<HomePages />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/presentacion" element={<Presentacion />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuters;
