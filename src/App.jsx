import './App.css'
import Home from './components/Home'
import Cliente from './components/Projetos'
import Footer from './components/Footer'
import Contato from './components/Contato'
import Menu from './components/Menu'
import Sobre from './components/Sobre'

import { BrowserRouter as Navegador, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navegador>
        <Menu />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/projetos" element={<Cliente />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Navegador>
      <Footer />
    </>
  )
}
export default App;