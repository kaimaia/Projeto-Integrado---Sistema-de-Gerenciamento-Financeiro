import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Relacionado = () => {
    return (
        <div style={{backgroundColor: "#2C2C2C", color: "white", padding: "15px", height: "500px"}}>
        <div className="container">
            <div className="d-flex">
                <h1>Relacionado</h1>
            </div>
            <div>
                <ul>
                    <div className="d-flex">
                        <p className="fw-bold" style={{marginBottom: "10px", marginRight: "5px"}}>Nome:</p>
                        <a><i className="bi bi-pencil"></i></a> 
                    </div>
                    <div className="d-flex">
                        <p className="fw-bold" style={{marginBottom: "10px", marginRight: "5px"}}>Descrição:</p>
                        <a><i className="bi bi-pencil"></i></a> 
                    </div>
                    <div className="d-flex">
                        <p className="fw-bold" style={{marginBottom: "10px", marginRight: "5px"}}>Custo:</p>
                        <a><i className="bi bi-pencil"></i></a> 
                    </div>
                </ul>
            </div>
            <div className="d-flex flex-row-reverse bd-highlight">
                    <button className="btn btn-light p-2 m-1 d-absolute">Voltar</button>
            </div>
        </div>
        </div>
    )
}

export default Relacionado;