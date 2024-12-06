import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import Login from "./Login.js";

const Navbar1 = () => {
  return (
    <div style={{ backgroundColor: "#1d1d1d", color: "#fff" }}>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#121212" }}>
        <div className="container">
          <a className="navbar-brand" href="">
            <img style={{width: "50px", height: "50px"}} src={logo}></img>
          </a>
          <div className=" d-flex justify-content-center align-items-center">
            <button className="btn btn-light" style={{marginRight: "10px"}}>Biblioteca</button>
            <a><i className="bi bi-person-circle" style={{fontSize: "30px"}}></i></a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;