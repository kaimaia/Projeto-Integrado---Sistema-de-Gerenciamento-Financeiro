import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Página inicial</h1>}/>
        {/* <Route path='/produto' element={}/> */}
        <Route path='*' element={<h1>Página não encontrada</h1>}/>
      </Routes>
    </BrowserRouter>
  )

}
export default App