import axios from 'axios';

const CONTATO_API_BASE_URL = "http://localhost:8080/api/v1/contato";
//api e a porta de entrada
class Contato {

    getContato(){
        return axios.get(CONTATO_API_BASE_URL);
    }

    createContato(contato){
        return axios.post(CONTATO_API_BASE_URL, contato);
    }

    getContatoById(contatoId){
        return axios.get(CONTATO_API_BASE_URL + '/' + contatoId);
    }

    updateContato(contato, contatoId){
        return axios.put(CONTATO_API_BASE_URL + '/' + contatoId, contato);
    }

    deleteContato(contatoId){
        return axios.delete(CONTATO_API_BASE_URL + '/' + contatoId);
    }

    
}

export default new Contato()