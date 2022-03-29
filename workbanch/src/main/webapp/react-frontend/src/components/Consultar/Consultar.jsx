import React, { Component } from 'react'
import Registro from '../../services/Registro';
import styles from './Consultar.module.css';
import Button from '../Form/Button';
import Input from '../Form/Input';
class ConsuRegistro extends Component {
    constructor(props) {
        super(props)

        this.state = {
                registro: []
        }
        this.addRegistro = this.addRegistro.bind(this);
        this.editRegistro = this.editRegistro.bind(this);
        this.deleteRegistro = this.deleteRegistro.bind(this);
    }

    deleteRegistro(id){
        Registro.deleteRegistro(id).then( res => {
            this.setState({registro: this.state.registro.filter(registro => registro.id !== id)});
        });
    }
    editRegistro(id){
        this.props.history.push(`/view-registro/${id}`);
    }
    editRegistro(id){
        this.props.history.push(`/add-registro/${id}`);
    }

    componentDidMount(){
        Registro.getRegistro().then((res) => {
            this.setState({ registro: res.data});
        });
    }

    addRegistro(){
        this.props.history.push('/home');
    }

    render() {
        return (
        <div>  
            <section className={styles.container}>
              <div className={styles.boxMap}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14706.22690269513!2d-43.24328165!3d-22.85588385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1646911883667!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
              </div>
              <div className={styles.animeLeft}>
                  <div className={styles.boxTitle}>
                    <h1 className={styles.title}>Verifique a região que deseja saber mais informações</h1>
                  </div>
                  <form className={styles.form}>
                      <Input 
                      children=""
                      type="text" class="form-control" name="search" size="50"  placeholder=""   onChange={this.searchBox}
        
                      />
                      {/* <div className={styles.containerInput}>
                        <Input 
                        children="Número"
                        type= "number"
                        name= "number"
                        />
                        <Input 
                        children="CEP"
                        type= "text"
                        name= "cep"
                        />
                      </div> */}
                      {/* <Input 
                      children="Bairro"
                      type= "text"
                      name= "bairro"
                      />
                      <Input 
                      children="Cidade"
                      type= "text"
                      name= "cidade"
                      /> */}
                      <div className={styles.boxBtn}>
                        <Button style={{marginLeft:'10px'}} >Cancelar</Button>
                        <Button >Consultar</Button>
        
                      </div>
            
                 

                 <div className = "table-responsive">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> endereço</th>
                                    <th> numero</th>
                                    <th> cep</th>
                                    <th> bairro</th>
                                    <th> cidade</th>
                                    <th> ponto de referencia</th>
                                    <th> descreva</th>
                                    <th> Data</th>
                                    
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.registro.map(
                                        registro => 
                                        <tr key = {registro.id}>
                                            
                                             <td> {registro.endereco} </td>   
                                             <td> {registro.numero}</td>
                                             <td> {registro.cep}</td>
                                             <td> {registro.bairro} </td>   
                                             <td> {registro.cidade}</td>
                                             <td> {registro.pontoreferencia}</td>
                                             <td> {registro.descreva} </td>   
                                             <td> {registro.data}</td>
                                             
                                             <td>
                                                 {/* <button onClick={ () => this.editRegistro(registro.id)} className="btn btn-info">Update </button> */}
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.deleteRegistro(registro.id)} className="btn btn-danger">Delete </button> */}
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewRegistro(registro.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        
                        </table>

                 </div>

            
            
            </form>
            </div>
        </section>
    
       
    </div>
        )
    }
}

export default ConsuRegistro