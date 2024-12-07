import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Geral.css';
import axios from 'axios';
// eslint-disable-next-line
import { useNavigate } from "react-router-dom"; 

const ListagemObra = () => {
    const baseUrl = 'http://localhost:8000/api/users/'+localStorage.getItem('userid')+'/obras';
    const navigate = useNavigate();
    const storeObra = () => {
      navigate('/cadastrar-obra');
    };
    const showObra = (obra) => {
      navigate('/obra',{ state: obra });
    };

    const userId = localStorage.getItem('userid');
    useEffect(()=>{
        const fetchData = async () => {
            // alert(localStorage.getItem('userid'));
            axios.get(baseUrl, null, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {setDataObras(response.data);console.log(response.data)})
            .catch(error => alert('Erro ao cadadsdassdaastrar usuários: ' + error.message));
        };
        
        fetchData();
    },[userId])
    const [dataObras, setDataObras] = useState([]);
    // para pegar

    return(
        <div style={{backgroundColor: "#2C2C2C", color: "white", padding: "15px", minHeight: "100vh"}}>
            <div className="container">
                <h1>Obras</h1>
                <ul>
                    {
                        dataObras.map(obra => (<li>
                            <ul>
                                Cliente: {obra.cliente}
                            </ul>
                            <ul>
                                Local: {obra.localizacao}
                            </ul>   
                            <ul>
                                Descrição: {obra.descricao}
                            </ul>  
                            <ul>
                                <button onClick={
                                    async () => {
                                        axios.get(baseUrl+'/'+obra.id, null, {
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                        })
                                        .then(response => showObra(response.data))
                                        .catch(error => alert('Erro ao mostrar obra: ' + error.message));
                                    }
                                }className="btn btn-light p-1 m-1">Ver obra</button>

                                <button onClick={
                                    async () => {
                                        axios.delete(baseUrl+'/'+obra.id, null, {
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                        })
                                        .then(response => {console.log(response.status);window.location.reload()})
                                        .catch(error => alert('Erro ao apagar obra: ' + error.message));
                                    }
                                }className="btn btn-danger p-1 m-1">Apagar obra</button> 
                            </ul> 
                        </li>))
                    }
                </ul>
                <div className="position-fixed bottom-0 end-0 d-flex flex-row-reverse bd-highlight">
                        <button onClick={storeObra} className="btn btn-light p-2 m-5 d-absolute">Nova Obra</button>
                </div>
            </div>
        </div>
    )
}

export default ListagemObra;