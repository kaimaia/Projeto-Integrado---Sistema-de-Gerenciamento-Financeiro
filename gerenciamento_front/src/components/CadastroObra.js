import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useLocation,useNavigate  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CadastroObra = (props) => {
    const obra = useLocation().state || {};
    const navigate = useNavigate();
    const user_id = localStorage.getItem('userid');
    const [cliente, setCliente] = useState();
    const [localizacao, setLocalizacao] = useState();
    const [descricao, setDescricao] = useState();
    const url = 'http://localhost:8000/api/users/'+localStorage.getItem('userid')+'/obras';
    const headers={
        'Content-Type': 'application/json'
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if(props.type === 'store'){
                    const response = await axios.post(url, data, { headers });
                    console.log(response.data);
                    axios.get(response.data.location, response.data.userid, { headers }).then(
                        navigate('/biblioteca')
                    ).catch(
                        error => console.error('Erro ao postar obra:', error.response.data.message, error.response.status, error.response.data.error)
                    );
                } else if (props.type === 'edit') {
                    const response = await axios.put(url+'/'+obra.id, data, { headers });
                    console.log(response.data);
                    axios.get(response.data.location, response.data.userid, { headers }).then(
                        navigate('/biblioteca')
                    ).catch(
                        error => console.error('Erro ao editar obra:', error.response.data.message, error.response.status, error.response.data.error)
                    );
                }
            } catch (error) {
                console.error('Erro ao fazer requisição:', error.response.data.message, error.response.status, error.response.data.error);
            }
        };
        fetchData();
    },[data]);
    const inputValues =  () => {
        setData({
            cliente: cliente || obra.cliente,
            localizacao: localizacao || obra.localizacao,
            descricao: descricao || obra.descricao,
            user_id: user_id
        });
    }
    return(
        <div className="" style={{backgroundColor: "#2C2C2C", color: "white", padding: "80px"}}>
            {props.type === 'edit' ? <h1 className="text-center mb-4">Edição de Obra</h1> : <h1 className="text-center mb-4">Cadastro de Obra</h1> }
            
            <div className="form-container" style={{maxWidth: "400px",margin: "0 auto",padding: "20px",backgroundColor: "#1e1e1e",borderRadius: "8px"}}>

                {props.type === 'edit' ? 
                    <form>
                        <div className="mb-3">
                        <label htmlFor="cliente" className="form-label">Cliente: {obra.cliente}</label>
                        <input onChange={(e)=> setCliente(e.target.value)} type="text" className="form-control" id="cliente" placeholder="Preencha se quiser alterar o valor"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="localizacao" className="form-label">Localização: {obra.localizacao}</label>
                        <input onChange={(e)=> setLocalizacao(e.target.value)} type="text" className="form-control" id="localizacao" placeholder="Preencha se quiser alterar o valor"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="descricao" className="form-label">Descrição: {obra.descricao}</label>
                        <input onChange={(e)=> setDescricao(e.target.value)} type="text" className="form-control" id="descricao" placeholder="Preencha se quiser alterar o valor"/>
                        </div>
                        <button type="submit" className="btn btn-light w-100">Cadastrar</button>
                    </form> 
                    :
                    <form>
                        <div className="mb-3">
                        <label htmlFor="cliente" className="form-label">Cliente</label>
                        <input onChange={(e)=> setCliente(e.target.value)} type="text" className="form-control" id="cliente" placeholder="Ex: Cristian Ryan"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="localizacao" className="form-label">Localização</label>
                        <input onChange={(e)=> setLocalizacao(e.target.value)} type="text" className="form-control" id="localizacao" placeholder="Ex: Rua Fulano de Tal, nº x, Bairro Tal"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="descricao" className="form-label">Descrição</label>
                        <input onChange={(e)=> setDescricao(e.target.value)} type="text" className="form-control" id="descricao" placeholder="Ex: Apartamento de tal jeito..."/>
                        </div>
                        <button type="submit" className="btn btn-light w-100">Cadastrar</button>
                    </form>
                }
                </div>
        </div>
    )
}

export default CadastroObra;