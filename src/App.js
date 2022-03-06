import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home.js';
import Contato from './Components/Contato/Contato.js';
import Sobre from './Components/Sobre/Sobre.js';
import Registrar from './Components/Registrar/Registrar.js';
import Consultar from './Components/Consultar/Consultar.js';
import Logar from './Components/Logar/Logar.js';
import Cadastrar from './Components/Cadastrar/Cadastrar.js';
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
    <BrowserRouter>
      <section className='wrapper'>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="contato" element={<Contato />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="consultar" element={<Consultar />} />
          <Route path="logar/*" element={<Logar />} />
          <Route path="cadastrar/*" element={<Cadastrar />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  );
};

export default App;