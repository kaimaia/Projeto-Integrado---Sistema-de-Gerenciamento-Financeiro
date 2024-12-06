import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CadastroObra = () => {
    return(
        <div className="" style={{backgroundColor: "#2C2C2C", color: "white", padding: "80px"}}>
            <h1 className="text-center mb-4">Cadastro de Obra</h1>
            <div className="form-container" style={{maxWidth: "400px",margin: "0 auto",padding: "20px",backgroundColor: "#1e1e1e",borderRadius: "8px"}}>
                <form>
                    <div className="mb-3">
                    <label htmlFor="cliente" className="form-label">Cliente</label>
                    <input type="text" className="form-control" id="cliente" placeholder="Ex: Cristian Ryan"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="localizacao" className="form-label">Localização</label>
                    <input type="text" className="form-control" id="localizacao" placeholder="Ex: Rua Fulano de Tal, nº x, Bairro Tal"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <input type="text" className="form-control" id="descricao" placeholder="Ex: Apartamento de tal jeito..."/>
                    </div>
                    <button type="submit" className="btn btn-light w-100">Cadastrar</button>
                </form>
                </div>
        </div>
    )
}

export default CadastroObra;