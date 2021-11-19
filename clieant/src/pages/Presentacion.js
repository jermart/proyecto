import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BodyPresentacion from "../components/presentacion/body/BodyPresentacion";

const Presentacion = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Presentacion
          </Link>
        </div>
      </nav>
      <BodyPresentacion />
    </Fragment>
  );
};

export default Presentacion;
