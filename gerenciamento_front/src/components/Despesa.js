import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Despesa = () => {
    return (
        <div style={{backgroundColor: "#2C2C2C", color: "white", padding: "15px", height: "500px"}}>
        <div className="container">
            <div className="d-flex">
                <h1>Despesa</h1>
            </div>
            <div>
                <ul>
                    <div className="d-flex">
                        <p className="fw-bold" style={{marginBottom: "10px", marginRight: "5px"}}>Nome:</p>
                    </div>
                    <div className="d-flex">
                        <p className="fw-bold" style={{marginBottom: "10px", marginRight: "5px"}}>Descrição:</p>
                    </div>
                    <div className="d-flex">
                        <p className="fw-bold" style={{marginBottom: "10px", marginRight: "5px"}}>Custo:</p>
                    </div>
                </ul>
            </div>
            <div className="d-flex flex-row-reverse bd-highlight">
                    <button className="btn btn-light p-2 m-1">Voltar</button>
                    <button className="btn btn-light p-2 m-1">Editar</button>
            </div>
        </div>
        </div>
    )
}

export default Despesa;