import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate('/login');
  };
  const redirecCadastro = () => {
    navigate('/cadastro');
  };
  return (
    <div style={{ backgroundColor: "#1d1d1d", color: "#fff" }}>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#121212" }}>
        <div className="container">
          <a className="navbar-brand" href={'http://localhost:3000'}>
            <img alt='' style={{width: "50px", height: "50px"}} src={logo}></img>
          </a>
          <div>
            <button className="btn btn-light" type="button" style={{marginRight: "10px"}} onClick={redirectLogin}>Login</button>
            <button className="btn btn-light" type="button" onClick={redirecCadastro}>Cadastro</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

