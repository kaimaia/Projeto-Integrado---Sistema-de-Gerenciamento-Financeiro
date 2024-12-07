import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import HomePage from './components/HomePage';
import Login from './components/Login';
import ListagemObra from './components/ListagemObra';
import Obra from './components/Obra';
import Despesa from './components/Despesa';
import Relacionado from './components/Relacionado';
import CadastroObra from './components/CadastroObra';
import CadastroDespesa from './components/CadastroDespesa';
import CadastroRelacionado from './components/CadastroRelacionado';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar/> <HomePage/> <Footer/>
          </>
          }/>
        <Route path='/cadastro' element={
          <>
            <Navbar/> <Login type='cadastro'/> <Footer/>
          </>
          }/>
        <Route path='/login' element={
          <>
            <Navbar/> <Login type='login'/> <Footer/>
          </>
          }/>
        <Route path='/biblioteca' element={
          <>
            <Navbar2/> <ListagemObra/> <Footer/>
          </>
        }/>
        <Route path='/obra' element={
          <>
            <Navbar3/> <Obra/> <Footer/>
          </>
        }/>
        <Route path='/obra/despesas' element={
          <>
            <Navbar3/> <Despesa/> <Footer/>
          </>
        }/>
        <Route path='/obra/relacionados' element={
          <>
            <Navbar3/> <Relacionado/> <Footer/>
          </>
        }/>
        <Route path='/cadastrar-obra' element={
          <>
            <Navbar3/> <CadastroObra type='store'/> <Footer/>
          </>
        }/>
        <Route path='/editar-obra' element={
          <>
            <Navbar3/> <CadastroObra type='edit'/> <Footer/>
          </>
        }/>
        <Route path='/cadastrar-despesa' element={
          <>
            <Navbar3/> <CadastroDespesa/> <Footer/>
          </>
        }/>
        <Route path='/cadastrar-relacionado' element={
          <>
            <Navbar3/> <CadastroRelacionado/> <Footer/>
          </>
        }/>
        <Route path='*' element={<h1>Página não encontrada</h1>}/>
      </Routes>
    </BrowserRouter>
  )

}
export default App