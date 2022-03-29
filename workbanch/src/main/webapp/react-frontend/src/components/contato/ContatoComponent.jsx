import React, { Component } from 'react'
import Contato from '../../services/Contato';
import styles from './Contato.module.css';
import Input from '../Form/Input';
import Textarea from '../Form/Textarea';

import contact from './contact.jpg';

import Button from '../Form/Button';


class ContatoComponent extends Component {
    constructor(props) {
        super(props)


        


        this.state = {
            // step 2
            id: this.props.match.params.id,
            nome: '',
            email: '',
            mensagem: ''
            
        }
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeMensagemHandler = this.changeMensagemHandler.bind(this);
        this.saveOrUpdateContato = this.saveOrUpdateContato.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            Contato.getContatoById(this.state.id).then( (res) =>{
                let contato = res.data;
                this.setState({nome: contato.nome,
                    email: contato.email,
                    mensagem : contato.mensagem
                    
                });
            });
        }        
    }
    saveOrUpdateContato = (e) => {
        e.preventDefault();
        let contato = {nome: this.state.nome, email: this.state.email, mensagem: this.state.mensagem};
        console.log('contato => ' + JSON.stringify(contato));

        // step 5
        if(this.state.id === '_add'){
            Contato.createContato(contato).then(res =>{
                this.props.history.push('/home');
            });
        }else{
            Contato.updateContato(contato, this.state.id).then( res => {
                this.props.history.push('/contato');
            });
        }
    }
    
    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeMensagemHandler= (event) => {
        this.setState({mensagem: event.target.value});
    }
   

    cancel(){
        this.props.history.push('/contato');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add contato</h3>
        }else{
            return <h3 className="text-center">Update contato</h3>
        }
    }
    render() {
        return (
            
            //teste
            <section className={styles.containerteste}>
                <div className={styles.boxImg}>
        <img src={contact} alt="Contato" />
      </div>
      <div className={styles.animeLeft}>
          <div className={styles.boxTitle}>
            <h1 className={styles.title}>Entre em contato</h1>
          </div>
          <form className={styles.form}  >
          <Input children="Nome" placeholder="" name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNomeHandler}/>
              <Input children="E-mail" placeholder="" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
              <Textarea children="Mensagem" placeholder="" name="mensagem" className="form-control" 
                                                value={this.state.mensagem} onChange={this.changeMensagemHandler}/>
              <div className={styles.boxBtn}>
                <Button type="submit" onClick={this.saveOrUpdateContato}>Enviar</Button>
              </div>
          </form>
      </div>
      {/* teste */}
            
        </section>    
        )
    }
}

export default ContatoComponent