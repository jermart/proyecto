import React, { Fragment, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default function HomePages() {
  const [file, setFile] = useState(null);
  const [img, setimg] = useState([]);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const usuario = { firstname, lastname, password, email };
    const respuesta = await Axios.post("/new-user", usuario);

    console.log(respuesta.data);

    if (respuesta.data.mensaje) {
      Swal.fire({
        icon: "error",
        text: `${respuesta.data.mensaje}`,
        timer: 1800,
      });

      document.getElementById("registro").reset();
    } else {
      Swal.fire({
        icon: "success",
        text: "Registrado exitosamente",
        timer: 1800,
      });
    }
  };

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const sendHandler = () => {
    if (!file) {
      alert("you must upload any file");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", file);

    fetch("http://localhost:9000/images/post", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((res) => setimg(res))
      .catch((err) => {
        console.error(err);
      });

    document.getElementById("fileinput").value = null;
    setFile(null);
  };

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="#!" className="navbar-brand">
            Image App
          </a>
        </div>
      </nav>
      <form>
        <div className="container mt-5">
          {/* <input type="text" value={text} placeholder="nombre"></input>
          <input type="text" value="" placeholder="correo"></input> */}
        </div>
      </form>
      <div className="container mt-5">
        <div className="card p-3">
          <div className="row">
            <div className="col-10">
              <input
                id="fileinput"
                onChange={selectedHandler}
                className="form-control"
                type="file"
              />
            </div>
            <div className="col-2">
              <button
                onClick={sendHandler}
                type="button"
                className="btn btn-primary col-12"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <img
            src={"http://localhost:9000/" + img}
            alt="..."
            className="card-img-top"
          />
        </div>
      </div>

      {/* <div className="container">
        <div className=" input-group mb-3">
          <form className="form-control">
            <div className="row">
              <label>Ingrese su nombre</label>

              <input
                className="mb-3"
                placeholder="ingrese su nombre"
                type="text"
              />
              <label>Ingrese su apellido</label>

              <input
                className="mb-3"
                placeholder="ingrese su apellido"
                type="text"
              />
              <label>ingrese su correo</label>

              <input className="mb-3" placeholder="correo" type="correo" />
              <label>Ingrese su password</label>

              <input
                className="mb-3"
                placeholder="ingrese su password"
                type="password"
              />
              <label className="input-group-text " htmlFor="inputGroupSelect01">
                Role que quieres:
              </label>
              <select className="form-select mb-3" id="inputGroupSelect01">
                <option selected>Role que quieres: </option>
                <option value="regular">Usuario</option>
                <option value="creador">creador</option>
              </select>
            </div>
            <button className="btn btn-info" type="subtmi">
              registrar
            </button>
          </form>
        </div>
      </div> */}

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card">
              <div className=" container text-center fa-5x">
                <i className=" fas fa-user"></i>
              </div>
              <div className="card-header text-center">
                <h3> Registro de sesion</h3>
              </div>
              <div className="card-body">
                <form onSubmit={login} id="registro">
                  <div className="form-group">
                    <label> Fistname</label>
                    <input
                      id="Fistname"
                      type="text"
                      className="form-control"
                      required
                      onChange={(e) => setfirstname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label> lastname</label>
                    <input
                      id="lastname"
                      type="text"
                      className="form-control"
                      required
                      onChange={(e) => setlastname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label> password</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      required
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label> Correo</label>
                    <input
                      id="Correo"
                      type="email"
                      className="form-control"
                      autoFocus
                      required
                      onChange={(e) => setemail(e.target.value)}
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
}
