import React, { Component } from 'react'
import Registro from '../../services/Registro';
import Button from '../Form/Button';
import Input from '../Form/Input';
import Textarea from '../Form/Textarea';
import styles from './Registrar.module.css';

class RegistroComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            endereco: '',
            numero: '',
            cep: '',
            bairro:'',
            cidade: '',
            pontoreferencia: '',
            descreva: '',
            etnia:'',
            genero:''
        }
        this.changeEnderecoHandler = this.changeEnderecoHandler.bind(this);
        this.changeNumeroHandler = this.changeNumeroHandler.bind(this);
        this.changeCepHandler = this.changeCepHandler.bind(this);
        this.changeBairroHandler = this.changeBairroHandler.bind(this);
        this.changeCidadeHandler = this.changeCidadeHandler.bind(this);
        this.changePontoreferenciaHandler = this.changePontoreferenciaHandler.bind(this);
        this.changeDescrevaHandler = this.changeDescrevaHandler.bind(this);
        this.changeEtniaHandler = this.changeEtniaHandler.bind(this);
        this.changeGeneroHandler = this.changeGeneroHandler.bind(this);
        this.saveOrUpdateRegistro = this.saveOrUpdateRegistro.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            Registro.getRegistroById(this.state.id).then( (res) =>{
                let registro = res.data;
                this.setState({endereco: registro.endereco,
                    numero: registro.numero,
                    cep : registro.cep,
                    bairro : registro.bairro,
                    cidade: registro.cidade,
                    pontoreferencia : registro.pontoreferencia,
                    descreva : registro.descreva,
                    etnia: registro.etnia,
                    genero : registro.genero
                    
                });
            });
        }        
    }
    saveOrUpdateRegistro = (e) => {
        e.preventDefault();
        let registro = {endereco: this.state.endereco, numero: this.state.numero, cep: this.state.cep, bairro:  this.state.bairro, cidade:  this.state.cidade, pontoreferencia:  this.state.pontoreferencia, descreva:  this.state.descreva, etnia:  this.state.etnia, genero:  this.state.genero};
        console.log('registro => ' + JSON.stringify(registro));

        // step 5
        if(this.state.id === '_add'){
            Registro.createRegistro(registro).then(res =>{
                this.props.history.push('/home');
            });
        }else{
            Registro.updateRegistro(registro, this.state.id).then( res => {
                this.props.history.push('/registro');
            });
        }
    }
    
    changeEnderecoHandler= (event) => {
        this.setState({endereco: event.target.value});
    }

    changeNumeroHandler= (event) => {
        this.setState({numero: event.target.value});
    }

    changeCepHandler= (event) => {
        this.setState({cep: event.target.value});
    }
    changeBairroHandler=(event)=>{
        this.setState({bairro: event.target.value});
    }

    changeCidadeHandler= (event) => {
        this.setState({cidade: event.target.value});
    }

    changePontoreferenciaHandler= (event) => {
        this.setState({pontoreferencia: event.target.value});
    }

    changeDescrevaHandler= (event) => {
        this.setState({descreva: event.target.value});
    }
    changeEtniaHandler=(event)=>{
        this.setState({etnia: event.target.value});
    }
    changeGeneroHandler=(event)=>{
        this.setState({genero: event.target.value});
    }



    cancel(){
        this.props.history.push('/registro');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Registro</h3>
        }else{
            return <h3 className="text-center">Editar Registro</h3>
        }
    }
    render() {
        return (
            <section className={styles.container}>
                 <div className={styles.boxMap}>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14706.22690269513!2d-43.24328165!3d-22.85588385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1646911883667!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
                 </div>
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Endereço: </label>
                                            <input placeholder="" name="endereco" className="form-control" 
                                                value={this.state.endereco} onChange={this.changeEnderecoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> numero: </label>
                                            <input placeholder="" name="numero" className="form-control" 
                                                value={this.state.numero} onChange={this.changeNumeroHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> cep: </label>
                                            <input placeholder="" name="cep" className="form-control" 
                                                value={this.state.cep} onChange={this.changeCepHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> bairro: </label>
                                            <input placeholder="" name="bairro" className="form-control" 
                                                value={this.state.bairro} onChange={this.changeBairroHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> cidade: </label>
                                            <input placeholder="" name="cidade" className="form-control" 
                                                value={this.state.cidade} onChange={this.changeCidadeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> pontoreferencia: </label>
                                            <input placeholder="" name="pontoreferencia" className="form-control" 
                                                value={this.state.pontoreferencia} onChange={this.changePontoreferenciaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> descreva: </label>
                                            <input placeholder="" name="descreva" className="form-control" 
                                                value={this.state.descreva} onChange={this.changeDescrevaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Genero: </label>
                                            {/* <input placeholder="Situacao" name="situacao" className="form-control" 
                                                value={this.state.situacao} onChange={this.changeSituacaoHandler}/> */}
                                                <select class="custom-select" placeholder="Genero" name="genero" className="formselect" 
                                                value={this.state.genero} onChange={this.changeGeneroHandler} >
                                                     <option selected>-- Selecione uma opção --</option>
                                                     <option>Mulher cis</option>
                                                     <option>Home cis</option>
                                                     <option>Homem</option>
                                                     <option>Mulher</option>
                                                     <option>Outro</option>
                                                 </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Etnia: </label>
                                            {/* <input placeholder="Situacao" name="situacao" className="form-control" 
                                                value={this.state.situacao} onChange={this.changeSituacaoHandler}/> */}
                                                <select class="custom-select" placeholder="Etnia" name="etnia" className="formselect" 
                                                value={this.state.etnia} onChange={this.changeEtniaHandler} >
                                                     <option selected>-- Selecione uma opção --</option>
                                                     <option>Negro</option>
                                                     <option>Pardo</option>
                                                     <option>Branco</option>
                                                     
                                                 </select>
                                        </div>


                                       

                                        <button className="btn btn-success" onClick={this.saveOrUpdateRegistro}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
            </section>    
        )
    }
}

export default RegistroComponent