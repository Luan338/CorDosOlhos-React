import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import HomeAbordo from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Sobre from './components/Sobre/Sobre';
import ListContato from './components/contato/ListContato';
import ContatoComponent from './components/contato/ContatoComponent';
import ListRegistro from './components/Registrar/ListRegistro';
import RegistroComponent from './components/Registrar/RegistroComponent';
import Consultar from './components/Consultar/Consultar'
import Graficos from './components/Graficos/Graficos'
import ConsuRegistro from './components/Consultar/Consultar.jsx'




const App = () => {
  return(
    
        <Router>
        <Header/>
       
       
              
        <section className='wrapper'>
                    <Switch> 
                          

                          <Route path={["/home", "/"]} component={HomeAbordo} exact ></Route>
                          <Route path = "/sobre" component = {Sobre}></Route>
                          <Route path="/contato" component={ListContato}></Route>
                          <Route path = "/add-contato/:id" component = {ContatoComponent}></Route>
                          <Route path="/registro" component={ListRegistro}></Route>
                          <Route path = "/add-registro/:id" component = {RegistroComponent}></Route>
                          {/* <Route path = "/consultar" component = {Consultar}></Route> */}
                          <Route path = "/graficos" component = {Graficos}></Route>
                          <Route path = "/consultar" component = {ConsuRegistro}></Route>

                          
                    </Switch>
               
              <Footer/>
              </section>
        </Router>
    
    
  );
};

export default App;