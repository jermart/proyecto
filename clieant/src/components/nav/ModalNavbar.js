import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

const ModalNavbar = ({ estado, cambiar }) => {
  if (estado) {
    window.scroll({ top: 0, left: 100 });
  }
  return (
    <>
      {" "}
      {estado && (
        <div className="Conatiner-modal" onClick={() => cambiar(false)}>
          <div className="cortina">
            <div className="cotenedor">
              <div className="text-modal">
                <ul>
                  <li>
                    <Link to="/home"> home</Link>
                  </li>
                  <li>
                    <a href="#">Servicios</a>
                  </li>
                  <li>
                    <a href="#">Proyectos</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalNavbar;
