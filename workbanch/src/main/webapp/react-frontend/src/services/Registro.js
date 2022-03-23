import axios from 'axios';

const REGISTRO_API_BASE_URL = "http://localhost:8080/api/v1/registro";
//api e a porta de entrada
class Registro {

    getRegistro(){
        return axios.get(REGISTRO_API_BASE_URL);
    }

    createRegistro(registro){
        return axios.post(REGISTRO_API_BASE_URL, registro);
    }

    getRegistroById(registroId){
        return axios.get(REGISTRO_API_BASE_URL + '/' + registroId);
    }

    updateRegistro(registro, registroId){
        return axios.put(REGISTRO_API_BASE_URL + '/' + registroId, registro);
    }

    deleteRegistro(registroId){
        return axios.delete(REGISTRO_API_BASE_URL + '/' + registroId);
    }

    
}

export default new Registro()