import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar1 = () => {
  const picture = localStorage.getItem('picture');
  const navigate = useNavigate();
  const returnToLibrary = () => {
    navigate('/biblioteca');
  };
  return (
    <div style={{ backgroundColor: "#1d1d1d", color: "#fff" }}>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#121212" }}>
        <div className="container">
          <a className="navbar-brand" href={'/biblioteca'}>
            <img style={{width: "50px", height: "50px"}} src={logo}></img>
          </a>
          <div className=" d-flex justify-content-center align-items-center">
            <button onClick={returnToLibrary} className="btn btn-light" style={{marginRight: "10px"}}>Biblioteca</button>
            <div>
              <a href={'/obra'}>
                {
                  picture ? (
                    <img alt='' style={{width: "50px", height: "50px", borderRadius:'100px'}} src={picture}></img>
                  ) : <i className="bi bi-person-circle" style={{fontSize: "30px"}}></i>
                }
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;