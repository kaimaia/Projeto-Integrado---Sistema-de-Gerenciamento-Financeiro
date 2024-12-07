import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import React from 'react';

const Navbar2 = () => {
  const picture = localStorage.getItem('picture');
  return (
    <div style={{ backgroundColor: "#1d1d1d", color: "#fff" }}>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#121212" }}>
        <div className="container">
          <a className="navbar-brand" href={'/biblioteca'}>
            <img alt='' style={{width: "50px", height: "50px"}} src={logo}></img>
          </a>
          <div>
            <a href={'/biblioteca'}>
              {
                picture ? (
                  <img alt='' style={{width: "50px", height: "50px", borderRadius:'100px'}} src={picture}></img>
                ) : <i className="bi bi-person-circle" style={{fontSize: "30px"}}></i>
              }
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;