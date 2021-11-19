import Axios from "axios";
import React, { Fragment, useState } from "react";
import "./BodyPresentacion.css";
import img from "./sunset.jpg";

const BodyPresentacion = () => {
  const [mensaje, setmenss] = useState("");

  const usuario = sessionStorage.getItem("usuarioId");
  const firstname = sessionStorage.getItem("firstname");
  const lastname = sessionStorage.getItem("lastname");
  const email = sessionStorage.getItem("email");

  const sendmens = async (e) => {
    e.preventDefault();
    const menss = { firstname, email, mensaje };
    console.log(menss);
    const respuesta = await Axios.post("/new-mensaje", menss);
    const mundo = respuesta.data;
    console.log(mundo);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="cuerpo">
          <div className="header">
            <h1>Basil Sebastian Mosquera</h1>
            <h3> administration sciene</h3>
          </div>
          <div className="body-page">
            <section className="inf-present">
              <article>
                <div className="title-artic">
                  <h1>About me</h1>
                </div>
                <div className="inf-artic">
                  <p>
                    Es un hecho establecido hace demasiado tiempo que un lector
                    se distraerá con el contenido del texto de un sitio mientras
                    que mira su diseño. El punto de usar Lorem Ipsum es que
                    tiene una distribución más o menos normal de las letras, al
                    contrario de usar textos como por ejemplo "Contenido aquí,
                    contenido aquí". Estos textos hacen parecerlo un español que
                    se puede leer. Muchos paquetes de autoedición y editores de
                    páginas web usan el Lorem Ipsum como su texto por defecto, y
                    al hacer una búsqueda de "Lorem Ipsum" va a dar por
                    resultado muchos sitios web que usan este texto si se
                    encuentran en estado de desarrollo. Muchas versiones han
                    evolucionado a través de los años, algunas veces por
                    accidente, otras veces a propósito por ejemplo insertándole
                    humor y cosas por el estilo.
                  </p>
                </div>
              </article>
              <article>
                <div className="title-artic">
                  <h1>About me</h1>
                </div>
                <div className="inf-artic">
                  <p>
                    Es un hecho establecido hace demasiado tiempo que un lector
                    se distraerá con el contenido del texto de un sitio mientras
                    que mira su diseño. El punto de usar Lorem Ipsum es que
                    tiene una distribución más o menos normal de las letras, al
                    contrario de usar textos como por ejemplo "Contenido aquí,
                    contenido aquí". Estos textos hacen parecerlo un español que
                    se puede leer. Muchos paquetes de autoedición y editores de
                    páginas web usan el Lorem Ipsum como su texto por defecto, y
                    al hacer una búsqueda de "Lorem Ipsum" va a dar por
                    resultado muchos sitios web que usan este texto si se
                    encuentran en estado de desarrollo. Muchas versiones han
                    evolucionado a través de los años, algunas veces por
                    accidente, otras veces a propósito por ejemplo insertándole
                    humor y cosas por el estilo.
                  </p>
                </div>
              </article>
              <article>
                <div className="title-artic">
                  <h1>About me</h1>
                </div>
                <div className="inf-artic">
                  <p>
                    Es un hecho establecido hace demasiado tiempo que un lector
                    se distraerá con el contenido del texto de un sitio mientras
                    que mira su diseño. El punto de usar Lorem Ipsum es que
                    tiene una distribución más o menos normal de las letras, al
                    contrario de usar textos como por ejemplo "Contenido aquí,
                    contenido aquí". Estos textos hacen parecerlo un español que
                    se puede leer. Muchos paquetes de autoedición y editores de
                    páginas web usan el Lorem Ipsum como su texto por defecto, y
                    al hacer una búsqueda de "Lorem Ipsum" va a dar por
                    resultado muchos sitios web que usan este texto si se
                    encuentran en estado de desarrollo. Muchas versiones han
                    evolucionado a través de los años, algunas veces por
                    accidente, otras veces a propósito por ejemplo insertándole
                    humor y cosas por el estilo.
                  </p>
                </div>
              </article>
              <article>
                <div className="title-artic">
                  <h1>About me</h1>
                </div>
                <div className="inf-artic">
                  <p>
                    Es un hecho establecido hace demasiado tiempo que un lector
                    se distraerá con el contenido del texto de un sitio mientras
                    que mira su diseño. El punto de usar Lorem Ipsum es que
                    tiene una distribución más o menos normal de las letras, al
                    contrario de usar textos como por ejemplo "Contenido aquí,
                    contenido aquí". Estos textos hacen parecerlo un español que
                    se puede leer. Muchos paquetes de autoedición y editores de
                    páginas web usan el Lorem Ipsum como su texto por defecto, y
                    al hacer una búsqueda de "Lorem Ipsum" va a dar por
                    resultado muchos sitios web que usan este texto si se
                    encuentran en estado de desarrollo. Muchas versiones han
                    evolucionado a través de los años, algunas veces por
                    accidente, otras veces a propósito por ejemplo insertándole
                    humor y cosas por el estilo.
                  </p>
                </div>
              </article>
              <article>
                <div className="title-artic">
                  <h1>About me</h1>
                </div>
                <div className="inf-artic">
                  <p>
                    Es un hecho establecido hace demasiado tiempo que un lector
                    se distraerá con el contenido del texto de un sitio mientras
                    que mira su diseño. El punto de usar Lorem Ipsum es que
                    tiene una distribución más o menos normal de las letras, al
                    contrario de usar textos como por ejemplo "Contenido aquí,
                    contenido aquí". Estos textos hacen parecerlo un español que
                    se puede leer. Muchos paquetes de autoedición y editores de
                    páginas web usan el Lorem Ipsum como su texto por defecto, y
                    al hacer una búsqueda de "Lorem Ipsum" va a dar por
                    resultado muchos sitios web que usan este texto si se
                    encuentran en estado de desarrollo. Muchas versiones han
                    evolucionado a través de los años, algunas veces por
                    accidente, otras veces a propósito por ejemplo insertándole
                    humor y cosas por el estilo.
                  </p>
                </div>
              </article>
            </section>
            <section className="inf-sect">
              <article>
                <div className="inf-sect-img">
                  <img src={img} alt="imagen"></img>
                </div>
              </article>
              <article>
                <div className="inf-sect-educ">
                  <ul>
                    <ol>educacion</ol>
                    <ol>universidad pensyl</ol>
                    <ol>Acducta</ol>
                  </ul>
                </div>
              </article>
              <article>
                <div className="inf-sect-lenga">
                  <ul>
                    <ol>Language</ol>
                    <ol>English</ol>
                    <ol>Spanish</ol>
                  </ul>
                </div>
              </article>
              <article className="ref-sect">
                <p>
                  hola mundo, como vamos... Todo bien, todo correcto y yo que me
                  alegro.
                </p>
              </article>
              <article>
                <div className="finish-sect">
                  <p>Mis curiositos como estáis</p>
                </div>
              </article>
            </section>
          </div>
          <div className="commentarios">
            <div className="card">
              <div className="card-body">
                <form onSubmit={sendmens}>
                  <label> comentarios</label>
                  <textarea
                    type="text"
                    className="form-control col-12"
                    style={{ height: "100px" }}
                    placeholder="comenta por favor tu experiencia"
                    onChange={(e) => setmenss(e.target.value)}
                  />
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-3"
                  />
                </form>
                <div className="prevent-comment mt-4">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className="imagen d-flex align-content-center justify-content-center">
                          <div className="imag-body ">
                            <img
                              src={img}
                              className="img-fluid rounded-circle w-100 h-100"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-8">
                        <div className="card-body">
                          <div className="body-commet">
                            <h5 className="card-title">marta</h5>
                            <p className="card-text">
                              hola masdasd sahdblasvdha dasydgasdgsad
                              asdhadslgdsabdasd asdgasgdasda saldgasd
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BodyPresentacion;
