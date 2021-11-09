import React, { useState, useEffect } from "react";
import ModalNavbar from "./ModalNavbar";
import "./Navbar.css";

const Navbar = ({ isScroll }) => {
  const [isOpen, setOpen] = useState(false);
  const [scrollHeight, setscrollHeight] = useState(0);
  const pasusarModal = () => {
    if (isOpen) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScroll > 20 ? "scro" : null}`}>
        <div className="navbar-logo">Sebastian</div>
        <div className="container d-flex justify-content-end">
          <button onClick={() => setOpen(!isOpen)}> Menú</button>
        </div>
      </nav>
      <ModalNavbar estado={isOpen} cambiar={setOpen} />
    </>
  );
};

export default Navbar;
