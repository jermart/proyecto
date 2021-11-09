import React from "react";
// import ModalNavbar from "./ModalNavbar";
import { Link as La } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isScroll }) => {
  //   const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* <nav className="navbar">
        <div className="navbar-logo">Sebastian</div>
        <div className="container d-flex justify-content-end">
          <button onClick={() => setOpen(!isOpen)}> Menú</button>
        </div>
      </nav>
      <ModalNavbar estado={isOpen} cambiar={setOpen} /> */}
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid container ">
          <a className="navbar-brand" href="!#">
            Menú
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-5 mb-lg-1 ">
            <li className="nav-item">
              <La className="nav-link active" aria-current="page" to="/home">
                Home
              </La>
            </li>
            <li className="nav-item">
              <La className="nav-link" aria-current="page" to="!#">
                Cuenta
              </La>
            </li>
            <li className="nav-item">
              <La className="nav-link" aria-current="page" to="!#">
                Proyectos
              </La>
            </li>
            <li className="nav-item">
              <La className="nav-link" aria-current="page" to="!#">
                Cuenta
              </La>
            </li>
          </ul>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div classNameclass="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="!#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
