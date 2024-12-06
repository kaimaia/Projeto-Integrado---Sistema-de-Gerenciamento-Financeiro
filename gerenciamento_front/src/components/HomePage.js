import bg from "./images/bg.gif";
import maria from "./images/maria.png";
import cristian from "./images/cristian.png";
import ricken from "./images/ricken.png";
import kaiane from "./images/kaiane.png";

const HomePage = () => {
    return (
        <div>
                <div>
                    <div>
                        <div className="container-fluid d-flex align-items-center" style={{flexDirection: "column", position: "absolute", color: "white", marginTop: "200px"}}>
                            <h1 className="title mb-0">Gerenciador de Finanças</h1>
                            <h6 style={{fontWeight: "400", fontSize: "32px", color: "#ffffffb3"}} className="mb-3">Para mestres de obra</h6>
                            <button className="btn btn-light" style={{paddingRight: "50px", paddingLeft: "50px", marginBottom: "10px"}}>Comece agora</button>
                            <button className="btn btn-light" style={{paddingRight: "30px", paddingLeft: "30px"}}>Saiba mais</button>
                        </div>

                        <div  className="d-flex" style={{position: "static"}}>
                            <img src={bg} style={{ width: "100%", height: "600px"}}></img>
                        </div>
                    </div>
                    
                    <div className="d-flex" style={{background: "#F2F2F7"}}> 
                        <div style={{padding: "100px 50px 100px 50px", textAlign: "block", position: "static"}}>
                            <h1>Sobre o sistema</h1>
                            <div style={{marginLeft: "15px"}}>
                                <p style={{marginBottom: "0px"}} className="text-align-justify">O Gerenciador de Planilhas tem como objetivo simplificar e otimizar o trabalho manual de criação e organização de documentos voltados para o controle e gestão de relações financeiras. </p> 
                                <p style={{marginBottom: "0px"}} className="text-align-justify">Com a crescente demanda por soluções que economizem tempo e reduzam a possibilidade de erros humanos, esse tipo de aplicação se torna essencial para empresas e profissionais do ramo de obras civis, que lidam com dados financeiros de forma frequente.</p>
                                <p className="text-align-justify">Em suma, a ideia central do Gerenciador de Planilhas é proporcionar uma solução prática e eficiente para quem precisa gerar documentos financeiros de forma rápida, precisa e com a menor intervenção manual possível.</p>
                            </div>
                        </div>
                    </div>

                <div style={{padding: "30px 50px 60px 50px", textAlign: "block", position: "relative"}}>
                    <h1 style={{marginBottom: "30px"}}>Sobre nós</h1>
                    <div className="container d-flex">
                        <div className="row" style={{marginRight: "70px"}}>
                            <div className="border mb-3 d-flex align-items-center" style={{width: "540px", height: "180px"}}>
                                <div className="row align-items-center ">
                                    <div className="col-md-4 d-flex">
                                        <img src={cristian} alt="..." style={{width: "150px"}} className="d-flex" ></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Cristian Ryan</h5>
                                            <p className="card-text">Tem 20 anos e, atualmente, reside em Jardim de Piranhas, Rio Grande do Norte. Além disso, cursa o Técnico em Informática para Internet, no IFRN, Campus Caicó.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border mb-3 d-flex align-items-center" style={{width: "540px", height: "180px"}}>
                                <div className="row align-items-center ">
                                    <div className="col-md-4 d-flex">
                                        <img src={maria} alt="..." style={{width: "150px"}} className="d-flex" ></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Maria das Graças</h5>
                                            <p className="card-text">Tem 19 anos e, atualmente, reside em São Fernando, Rio Grande do Norte. Além disso, cursa o Técnico em Informática para Internet, no IFRN, Campus Caicó.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{marginRight: "70px"}}>
                            <div className="border mb-3 d-flex align-items-center" style={{width: "540px", height: "180px"}}>
                                <div className="row align-items-center ">
                                    <div className="col-md-4 d-flex">
                                        <img src={kaiane} alt="..." style={{width: "150px"}} className="d-flex" ></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Kaiane Maia</h5>
                                            <p className="card-text">Tem 18 anos e, atualmente, reside em São Fernando, Rio Grande do Norte. Além disso, cursa o Técnico em Informática para Internet, no IFRN, Campus Caicó.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border mb-3 d-flex align-items-center" style={{width: "540px", height: "180px"}}>
                                <div className="row align-items-center ">
                                    <div className="col-md-4 d-flex">
                                        <img src={ricken} alt="..." style={{width: "150px"}} className="d-flex" ></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Ricken Diniz</h5>
                                            <p className="card-text">Tem 18 anos e, atualmente, reside em Caicó, Rio Grande do Norte. Além disso, cursa o Técnico em Informática para Internet, no IFRN, Campus Caicó.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                </div>

                
        </div>
    )
}

export default HomePage;