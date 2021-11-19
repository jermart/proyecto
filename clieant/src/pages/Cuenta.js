import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cuenta = () => {
  const [id, setid] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [telefono, settelefono] = useState("");
  const [idiomas, setidiomas] = useState("");
  const [referencias, setreferencias] = useState("");
  const [talento, settalento] = useState("");
  const [introduccion, setintroduccion] = useState("");
  const [experiencia, setexperiencia] = useState("");
  const [educacion, seteducacion] = useState("");
  const [profesion, setprofesion] = useState("");
  const [creado, setcreado] = useState("false");

  const usuario = sessionStorage.getItem("usuarioId");
  const nombre = sessionStorage.getItem("firstname");
  const apellido = sessionStorage.getItem("lastname");

  console.log(creado);

  // console.log(firstname);
  // console.log(usuario);
  // console.log(nombre);
  // console.log(user);

  useEffect(() => {
    // setfirstname(nombre);
    // setlastname(apellido);
    setid(usuario);
    console.log(firstname + lastname);
  }, [firstname, nombre, apellido, usuario]);

  const userHold = async (e) => {
    e.preventDefault();

    setcreado("true");

    const update = {
      id,
      firstname,
      lastname,
      email,
      telefono,
      idiomas,
      referencias,
      talento,
      introduccion,
      experiencia,
      educacion,
      profesion,
      creado,
    };

    const respuesta = await Axios.post("/updatUser", update);
  };

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            cuenta
          </Link>
        </div>
      </nav>
      <div className="container m-5 ">
        <div className="container">
          <div className="card ">
            <div className=" card-body w-auto col-8 ">
              <form onSubmit={userHold}>
                <div className="from-group">
                  <label>Nombre</label>
                  <input
                    className="form-control col-12"
                    type="text"
                    required
                    placeholder={nombre}
                    onChange={(e) => setfirstname(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Apellido</label>
                  <input
                    className="form-control col-12"
                    type="text"
                    required
                    placeholder={apellido}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Email</label>
                  <input
                    className="form-control col-12"
                    type="text"
                    required
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Telefono</label>
                  <input
                    className="form-control col-12"
                    type="text"
                    onChange={(e) => settelefono(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Idiomas</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "100px" }}
                    placeholder="los idiomas que manejas"
                    onChange={(e) => setidiomas(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Referencias</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "150px" }}
                    placeholder="Nombre de lugares de referencia o personas que te referencian
                    
                    Sebastian mosquera
                    Jefe de Company Engenery
                    contacto: sebasEs200@hotmail"
                    onChange={(e) => setreferencias(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Talento</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "100px" }}
                    placeholder="Describe las habilidades y fortalezas en una descripcion "
                    onChange={(e) => settalento(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Introduccion</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "150px" }}
                    placeholder="haz una breve introduccion acerca de tu vida"
                    onChange={(e) => setintroduccion(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Experiencia</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "150px" }}
                    placeholder="haz una descripcion de tu experiencia en el campo"
                    onChange={(e) => setexperiencia(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Educación</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "250px" }}
                    placeholder="Por favor escriba la información acerca de su trayectoria en la educación;
                    
                    ejemplo:
                    
                    Bachiller
                    GranColombo 2010-2020
                    
                    Pregrado: ingeniera indrustrial 
                    Universidad Antioquia 2021-2023
                    
                    Posgrado: mecanica cuantica
                    Universidad Oxford 2040-2044"
                    onChange={(e) => seteducacion(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Profesión</label>
                  <input
                    className="form-control col-12"
                    type="text"
                    placeholder="escribe tu profesión"
                    required
                    onChange={(e) => setprofesion(e.target.value)}
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
    </Fragment>
  );
};

export default Cuenta;
