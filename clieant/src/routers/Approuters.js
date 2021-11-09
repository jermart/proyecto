import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import LoginPages from "../pages/LoginPages";

function Approuters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="/home" element={<HomePages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuters;
