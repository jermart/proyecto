import Axios from "axios";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const respuesta = await Axios.post("/auth-user", user);
    const resMen = respuesta.data.mensaje;

    if (resMen) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${resMen}`,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "bienvenido",
        timer: 2000,
      });
      window.location.replace("/");
      sessionStorage.setItem("usuarioId", respuesta.data.id);
      sessionStorage.setItem("firstname", respuesta.data.firstname);
      sessionStorage.setItem("lastname", respuesta.data.lastname);
      sessionStorage.setItem("role", respuesta.data.role);

      console.log(respuesta.data);
    }
  };

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Login
          </Link>
        </div>
      </nav>
      <div className="container m-5 d-flex justify-content-center">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className=" container text-center fa-7x">
                <i className=" fas fa-user"></i>
              </div>
              <div className="card-header text-center">
                <h1>Login</h1>
              </div>
              <div className="card-body">
                <form onSubmit={userLogin} id="Logueate">
                  <div className="form-group">
                    <label>Fistname</label>
                    <input
                      id="Fistname"
                      type="text"
                      className="form-control"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label> password</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-3"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginUser;
