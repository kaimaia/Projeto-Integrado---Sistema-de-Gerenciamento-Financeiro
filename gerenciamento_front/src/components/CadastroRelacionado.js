import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CadastroRelacionado = () => {
    return (
        <div style={{backgroundColor: "#2C2C2C", color: "white", padding: "80px"}}>
            <h1 className="text-center mb-4">Relacionado</h1>
            <div className="form-container" style={{maxWidth: "400px",margin: "0 auto",padding: "20px",backgroundColor: "#1e1e1e",borderRadius: "8px"}}>
                <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="name" placeholder="Ex: Fulano - Servente"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="custo" className="form-label">Custo</label>
                    <input type="text" className="form-control" id="custo" placeholder="Ex: R$160,00"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <input type="text" className="form-control" id="descricao" placeholder=""/>
                    </div>
                    <button type="submit" className="btn btn-light w-100">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default CadastroRelacionado;