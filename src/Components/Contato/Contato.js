import React from 'react';
import contact from '../../Assets/contact.jpg';
import Input from '../Form/Input';
import Button from '../Form/Button';
import styles from './Contato.module.css';
import Textarea from '../Form/Textarea';
import { useState } from 'react';


const Contato = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail]= useState('');

  function handleRegister(){
    if((nome) && (email)){
      alert("Enviado com sucesso!");
    }else{
      alert("Preencha os campos de Nome e E-mail !");
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.boxImg}>
        <img src={contact} alt="Contato" />
      </div>
      <div className={styles.animeLeft}>
          <div className={styles.boxTitle}>
            <h1 className={styles.title}>Entre em contato</h1>
          </div>
          <form className={styles.form} onSubmit={handleRegister}>
              <Input 
              children="Nome"
              type= "text"
              name= "nome"
              value={nome}
              onChange={({target}) => setNome(target.value) }
              />
              <Input 
              children="E-mail"
              type= "text"
              name= "email"
              value={email}
              onChange={({target}) => setEmail(target.value) }
              />
              <Textarea 
              children="Mensagem"
              type="text"
              name="textarea"
              />
              <div className={styles.boxBtn}>
                <Button type="submit">Enviar</Button>
              </div>
          </form>
      </div>
    </section>
  )
}

export default Contato;