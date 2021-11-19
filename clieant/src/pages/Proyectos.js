import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Usuarios from "../components/proyectos/Usuarios";
// import "./proyectos.css";

const Proyectos = () => {
  const [usuario, setusuario] = useState([]);
  const [role, setrole] = useState("ingeniero");

  const irse = (id) => {
    if (id) {
      console.log(id);
      sessionStorage.setItem("usuarioSelect", id);
      window.location.href = "/presentacion";
    }
  };

  const obtenerAll = async (role) => {
    const respuesta = await Axios.get("/engineer-all");
    const obtencion = respuesta.data.engineerAll;

    // console.log(respuesta.data.engineerAll);
    setusuario(obtencion);
    // usuarios.push(respuesta.data);
    console.log(usuario);
  };
  useEffect(() => {
    obtenerAll();
  }, []);

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Proyectos
          </Link>
        </div>
      </nav>

      {/* <Usuarios usuarios={usuarios} /> */}

      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {usuario.map((item, index) => (
            <div key={index} className="col">
              <div className="card">
                <div className="imagen">
                  <img
                    src={"http://localhost:9000/" + item.img}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.firstname}</h5>
                  <p className="card-text">{item.introduccion}</p>
                </div>
                <div className="col-4 my-3 mx-4">
                  <button
                    className="btn btn-warning"
                    type="button"
                    onClick={(e) => irse(item._id)}
                    to="/presentacion"
                  >
                    Más información
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Proyectos;
