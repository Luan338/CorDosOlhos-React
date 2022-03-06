import React from 'react';
import contact from '../../Assets/contact.jpg';
import Input from '../Form/Input';
import Button from '../Form/Button';
import styles from './Contato.module.css';
import Textarea from '../Form/Textarea';

const Contato = () => {
  return (
    <section className={styles.container}>
      <div className={styles.boxImg}>
        <img src={contact} alt="Contato" />
      </div>
      <div className={styles.animeLeft}>
          <div className={styles.boxTitle}>
            <h1 className={styles.title}>Entre em contato</h1>
          </div>
          <form className={styles.form}>
              <Input 
              children="Nome"
              type= "text"
              name= "nome"
              placeholder="Nome"
              />
              <Input 
              children="E-mail"
              type= "text"
              name= "email"
              placeholder= "E-mail"
              />
              <Textarea 
              children="Mensagem"
              placeholder=" Mensagem" 
              type="text"
              />
              <div className={styles.boxBtn}>
                <Button>Entrar</Button>
              </div>
          </form>
      </div>
    </section>
  )
}

export default Contato;