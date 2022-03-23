import React from 'react';
import axios from 'axios';
import styles from './Consultar.module.css';
import Button from '../Form/Button';
import Input from '../Form/Input';

class Consultar extends React.Component{
  constructor(props){
    super(props)
    this.state ={
        registros:[],
        currentPage:1,
        recordPerPage:7,
        search:'',
    }
}

componentDidMount(){        
  this.getRegistrosByPagination(this.state.currentPage);
}
getRegistrosByPagination(currentPage){
      currentPage=currentPage-1;
  axios.get("http://localhost:8080/registros?page="+currentPage+"&size="+this.state.recordPerPage)
  .then(response => response.data).then((data) =>{
       this.setState({registros:data.content,
          totalPages:data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number+1
      });
     });
}
showNextPage = () =>{
  if(this.state.currentPage < Math.ceil(this.state.totalElements/this.state.recordPerPage)){
      if(!this.state.search){
      this.getRegistrosByPagination(this.state.currentPage + 1);
      }else{
          this.searchRegistro(this.state.currentPage + 1)
      }
  }
};
  //Show Last Page
  showLastPage = () =>{
    if(this.state.currentPage < Math.ceil(this.state.totalElements/this.state.recordPerPage)){
        if(!this.state.search){
        this.getRegistrosByPagination(Math.ceil(this.state.totalElements/this.state.recordPerPage));
        }
        else{
            this.searchRegistro(Math.ceil(this.state.totalElements/this.state.recordPerPage));
        }
    }
};
 //Show First page
 showFirstPage = ()=>{
  let firstPage = 1;
  if(this.state.currentPage > firstPage){
      if(!this.state.search){
      this.getRegistrosByPagination(firstPage);
      }else{
          this.searchRegistro(firstPage)
      }
  }
};

  //Show previous page
  showPrevPage = () =>{
    let prevPage = 1
    if(this.state.currentPage > prevPage){
        if(!this.state.search){
        this.getRegistrosByPagination(this.state.currentPage - prevPage);
        }else{
            this.searchRegistro(this.state.currentPage - prevPage);
        }
    }
};
 //Search Box Method
 searchBox = (e) => {
  this.setState({
      //assigning value to event target
      [e.target.name]:e.target.value,
  });
};
//Search Method Logic
searchRegistro=(currentPage)=> {
  currentPage=currentPage-1;
  axios.get("http://localhost:8080/registros/"+this.state.search+"?page="+currentPage+"&size="+this.state.recordPerPage)
  .then(response => response.data).then((data) =>{
       this.setState({registros:data.content,
          totalPages:data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number+1
      });
     });
};
//Reset Search Box
resetRegistro = (currentPage)=>{
  this.setState({"search":''});
  this.getRegistrosByPagination(this.state.currentPage);
};


render(){
  const {registros, currentPage, totalPages,recordPerPage,search} = this.state;

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
              type="text" class="form-control" name="search" size="50"  placeholder="" value={search}  onChange={this.searchBox}

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
                <Button style={{marginLeft:'10px'}} onClick={this.resetRegistro}>Cancelar</Button>
                <Button onClick={this.searchRegistro}>Consultar</Button>

              </div>
              
            
            
           
            <div className='table-responsive' style={{float: 'center'}} align="center">
                
           
            <table className="table table-bordered border-info shadow">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Bairro</th>
                    <th>Cep</th>
                    <th>Cidade</th>
                    <th>Data</th>
                    <th>Descreva</th>
                    <th>Endereço</th>
                    <th>Número</th>
                    <th>Ponto de referencia</th>
                    <th>Etnia</th>
                    <th>Genero</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {registros.length===0?
                        <tr align="center"><td colSpan="5">No Record Found</td></tr>:
                        registros.map(
                            (registros,index) =>(
                                <tr key = {registros.id}>
                                        <td>{(recordPerPage*(currentPage-1))+index+1}</td>
                                        <td>{registros.bairro}</td>
                                        <td>{registros.cep}</td>
                                        <td>{registros.cidade}</td>
                                        <td>{registros.data}</td>
                                        <td>{registros.descreva}</td>
                                        <td>{registros.endereco}</td>
                                        <td>{registros.numero}</td>
                                        <td>{registros.pontoreferencia}</td>
                                        <td>{registros.etnia}</td>
                                        <td>{registros.genero}</td>
                                    
                                </tr>
                            )
                        )
                    }
                </tbody>

            </table>
            <table className="table">
                <div style={{float:'left',fontFamily: 'monospace',color: '#0275d8'}}>
                    Page {currentPage} of {totalPages}
                </div>
                <div style={{float:'right'}}>
                <div class="clearfix"></div>
                
                </div>
            </table>
            </div>



          </form>
      </div>
    </section>
    
        
    </div>
  )
}
}

export default Consultar;