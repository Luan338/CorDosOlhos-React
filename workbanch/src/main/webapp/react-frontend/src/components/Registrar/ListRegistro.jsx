import React, { Component } from 'react'
import Registro from '../../services/Registro';

class ListRegistro extends Component {
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
            <div className='container'>
                 <h2 className="text-center">Registro List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addRegistro}> Add Registro</button>
                 </div>
                 <br></br>

                 <div className = "table-responsive">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> endereco</th>
                                    <th> numero</th>
                                    <th> cep</th>
                                    <th> bairro</th>
                                    <th> cidade</th>
                                    <th> pontoreferencia</th>
                                    <th> descreva</th>
                                    <th> etnia</th>
                                    <th> genero</th>
                                    <th>Data</th>
                                   
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
                                             <td> {registro.etnia}</td>
                                             <td> {registro.genero}</td>
                                             <td> {registro.data}</td>
                                             <td>
                                                 <button onClick={ () => this.editRegistro(registro.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteRegistro(registro.id)} className="btn btn-danger">Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewRegistro(registro.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListRegistro