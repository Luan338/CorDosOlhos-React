import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import HomeAbordo from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Sobre from "./components/Sobre/Sobre";
import ListContato from "./components/contato/ListContato";
import ContatoComponent from "./components/contato/ContatoComponent";
import ListRegistro from "./components/Registrar/ListRegistro";
import RegistroComponent from "./components/Registrar/RegistroComponent";
import Consultar from "./components/Consultar/Consultar";
import Graficos from "./components/Graficos/Graficos";
const App = () => {
  return (
    <Router>
      <Header />
      <section className="wrapper">
        <Routes>
          <Route exact path="/home" element={<HomeAbordo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<ListContato />} />
          <Route path="/add-contato/:id" element={ContatoComponent} />
          <Route path="/registro" element={ListRegistro} />
          <Route path="/add-registro/:id" element={RegistroComponent} />
          <Route path="/consultar" element={Consultar} />
          <Route path="/graficos" element={Graficos} />
        </Routes>
        <Footer />
      </section>
    </Router>
  );
};

export default App;
