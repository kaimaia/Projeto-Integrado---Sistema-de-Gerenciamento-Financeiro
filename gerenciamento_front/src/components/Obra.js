import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Geral.css';
import axios from 'axios';
import { useLocation,useNavigate  } from "react-router-dom";

const Obra = () => {
    const obra = useLocation().state || {};
    const navigate = useNavigate();
    const baseUrl = 'http://localhost:8000/api/users/'+localStorage.getItem('userid')+'/obras';
    const editObra = (obra) => {
      navigate('/editar-obra',{ state: obra });
    };
    return (
        <div style={{backgroundColor: "#2C2C2C", color: "white", padding: "15px", minHeight: "100vh"}}>
        <div className="container">
            <div className="d-flex">
                <h1>Obra do cliente: {obra.cliente}</h1>
            </div>
            <div>
                <ul>
                    <div className="d-flex">
                        <p className="fw-bold" style={{marginBottom: "10px", marginRight: "5px"}}>Localização: {obra.localizacao}</p>
                    </div>
                    <div className="d-flex">
                        <p className="fw-bold" style={{marginBottom: "10px", marginRight: "5px"}}>Descrição: {obra.descricao}</p>
                    </div>
                    <p className="fw-bold" style={{marginBottom: "0px"}}>Despesas:</p>
                        <ol>
                            <div className="d-flex">
                                <li style={{marginRight: "5px"}}>Despesa</li>
                                <a style={{marginRight: "5px"}} href=""><i className="bi bi-pencil"></i></a>
                                <a href=""><i className="bi bi-backspace"></i></a>
                            </div>
                            <div className="d-flex">
                                <li style={{marginRight: "5px"}}>Despesa</li>
                                <a style={{marginRight: "5px"}} href=""><i className="bi bi-pencil"></i></a> 
                                <a href=""><i className="bi bi-backspace"></i></a>
                            </div>
                        </ol>
                    <p className="fw-bold" style={{marginTop: "10px", marginBottom: "0px"}}>Relacionados:</p>
                    <ol>
                        <div className="d-flex">
                            <li style={{marginRight: "5px"}}>Relacionado</li>
                            <a style={{marginRight: "5px"}} href=""><i className="bi bi-pencil"></i></a>
                            <a href=""><i className="bi bi-backspace"></i></a>
                        </div>
                        <div className="d-flex">
                            <li style={{marginRight: "5px"}}>Relacionado</li>
                            <a style={{marginRight: "5px"}} href=""><i className="bi bi-pencil"></i></a>
                            <a href=""><i className="bi bi-backspace"></i></a>
                        </div>
                    </ol>
                </ul>
            </div>
            <div className="position-fixed bottom-0 end-0 m-5 d-flex flex-row-reverse bd-highlight">
                    <button onClick={
                        async () => {
                            axios.get(baseUrl+'/'+obra.id, null, {
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })
                            .then(response => editObra(response.data))
                            .catch(error => alert('Erro ao mostrar obra: ' + error.message));
                        }
                    }className="btn btn-light p-2 m-1">Editar obra</button>
                    <button className="btn btn-light p-2 m-1 d-absolute">Nova despesa</button>
                    <button className="btn btn-light p-2 m-1">Novo relacionado</button>
            </div>
        </div>
        </div>
    )
}

export default Obra;