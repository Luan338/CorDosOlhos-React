import React, { Component } from 'react'
import Contato from '../../services/Contato'

class ListContato extends Component {
    constructor(props) {
        super(props)

        this.state = {
                contato: []
        }
        this.addContato = this.addContato.bind(this);
        this.editContato = this.editContato.bind(this);
        this.deleteContato = this.deleteContato.bind(this);
    }

    deleteContato(id){
        Contato.deleteContato(id).then( res => {
            this.setState({contato: this.state.contato.filter(contato => contato.id !== id)});
        });
    }
    viewContato(id){
        this.props.history.push(`/view-contato/${id}`);
    }
    editContato(id){
        this.props.history.push(`/add-contato/${id}`);
    }

    componentDidMount(){
        Contato.getContato().then((res) => {
            this.setState({ contato: res.data});
        });
    }

    addContato(){
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className='container'>
                 <h2 className="text-center">contato List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addContato}> Add contato</button>
                 </div>
                 <br></br>
                 <div className = "table-responsive">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> nome</th>
                                    <th> email</th>
                                    <th> mensagem</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.contato.map(
                                        contato => 
                                        <tr key = {contato.id}>
                                            
                                             <td> {contato.nome} </td>   
                                             <td> {contato.email}</td>
                                             <td> {contato.mensagem}</td>
                                             <td>
                                                 <button onClick={ () => this.editContato(contato.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteContato(contato.id)} className="btn btn-danger">Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewContato(contato.id)} className="btn btn-info">View </button> */}
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

export default ListContato