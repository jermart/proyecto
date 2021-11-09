import React, { Fragment, useState } from "react";

export default function HomePages() {
  const [file, setFile] = useState(null);
  const [img, setimg] = useState([]);
  // const [text, setText] = useState("");

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
    </Fragment>
  );
}
