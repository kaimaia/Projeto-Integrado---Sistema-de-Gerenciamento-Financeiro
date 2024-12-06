import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Geral.css';

const Obra = () => {
    return (
        <div style={{backgroundColor: "#2C2C2C", color: "white", padding: "15px", height: "500px"}}>
        <div className="container">
            <div className="d-flex">
                <h1>Obra 1</h1>
            </div>
            <div>
                <ul>
                    <div className="d-flex">
                        <p className="fw-bold" style={{marginBottom: "10px", marginRight: "5px"}}>Localização:</p>
                        <a href=""><i className="bi bi-pencil"></i></a> 
                    </div>
                    <div className="d-flex">
                        <p className="fw-bold" style={{marginBottom: "10px", marginRight: "5px"}}>Descrição:</p>
                        <a href=""><i className="bi bi-pencil"></i></a> 
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
            <div className="d-flex flex-row-reverse bd-highlight">
                    <button className="btn btn-light p-2 m-1 d-absolute">Nova despesa</button>
                    <button className="btn btn-light p-2 m-1">Novo relacionado</button>
            </div>
        </div>
        </div>
    )
}

export default Obra;