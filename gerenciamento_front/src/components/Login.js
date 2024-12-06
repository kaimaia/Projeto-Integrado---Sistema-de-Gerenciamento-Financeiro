import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React , { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

const Login = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setPicture] = useState('');
    const url = 'http://localhost:8000/api/users';
    const headers={
        'Content-Type': 'application/json'
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(typeof data.name,typeof data.email,typeof data.job,typeof data.password);
                const response = await axios.post(url, data, { headers });
                console.log(response.data);
                axios.get(response.data.location, response.data.userid, { headers }).then(
                    localStorage.setItem('userid', response.data.userid),localStorage.setItem('picture', profilePicture),navigate('/biblioteca')
                ).catch(
                    error => console.error('Erro ao fazer requisição:', error.response.data.message, error.response.status, error.response.data.error)
                );
            } catch (error) {
                console.error('Erro ao fazer requisição:', error.response.data.message, error.response.status, error.response.data.error);
            }
        };
        fetchData();
    
        // fetchData();
    },[data]);
    const inputValues =  (e) => {
        e.preventDefault();
        setData({
            name: name,
            email: email,
            job: job,
            password: password
        });
    }
    return (
        <div style={{backgroundColor: "#2C2C2C", color: "white", padding: "80px"}}>
            <div className="container py-5">
                {
                    props.type==='cadastro'?(<h1 className="text-center mb-4">Cadastro</h1>):<h1 className="text-center mb-4">Login</h1>
                }
                <div className="form-container" style={{maxWidth: "500px",margin: "0 auto",padding: "20px",backgroundColor: "#1e1e1e",borderRadius: "8px"}}>
                    <form onSubmit={inputValues}>
                        {
                            props.type==='cadastro' ? (<>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nome</label>
                                    <input type="text" onChange={(e)=> setName(e.target.value)} className="form-control" id="name" placeholder="Ex: Cristian Ryan" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="job" className="form-label">Função</label>
                                    <input type="text" onChange={(e)=> setJob(e.target.value)} className="form-control" id="job" placeholder="Ex: mestre de obra" />
                                </div>
                            </>) : <></>
                        }
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{color: 'white'}}>Email</label>
                            <input type="email" onChange={(e)=> setEmail(e.target.value)} className="form-control" id="email" placeholder="Ex: xxxxxxx@email.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" style={{color: 'white'}}>Senha</label>
                            <input type="password" onChange={(e)=> setPassword(e.target.value)} className="form-control" id="password" placeholder="Senha" />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-light w-100">Entrar</button>
                        </div>
                        <div className='mb-3'>
                        <GoogleLogin
                                onSuccess={  (credentialResponse) => {
                                    let data = jwtDecode(credentialResponse.credential);
                                    console.log(jwtDecode(credentialResponse.credential));
                                    setPicture(data.picture);
                                    setEmail(data.email);
                                    setName(data.name);
                                    setPassword('undefined');
                                    setJob('Mestre de Obras');
                                    inputValues();
                                }}
                                onError={() => {
                                console.log("Login Failed");
                                }}
                            />
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    );
}

export default Login;