import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import Navbar from "../components/nav/Navbar";
import Cover from "../components/Cover/Cover";
import Body from "../components/body/Body";
// import ModalNavbar from "../components/nav/ModalNavbar";

function LoginPages() {
  // const [scrollHeight, setscrollHeight] = useState(0);

  // const handlScroll = () => {
  //   const posicion = window.scrollY;
  //   console.log(posicion);
  //   setscrollHeight(posicion);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handlScroll);
  // }, [scrollHeight]);
  return (
    <div className="LoginPages">
      <Navbar />
      <Cover />
      <Body />
      {/* <ModalNavbar /> */}
    </div>
  );
}

export default LoginPages;
