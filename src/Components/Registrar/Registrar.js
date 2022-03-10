import React from 'react';
import Button from '../Form/Button';
import Input from '../Form/Input';
import Textarea from '../Form/Textarea';
import styles from './Registrar.module.css';

const Registrar = () => {
  return (
    <section className={styles.container}>
      <div className={styles.boxMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14706.22690269513!2d-43.24328165!3d-22.85588385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1646911883667!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div className={styles.animeLeft}>
          <div className={styles.boxTitle}>
            <h1 className={styles.title}>Registre o ato de racismo</h1>
          </div>
          <form className={styles.form}>
              <Input 
              children="Endereço do ocorrido"
              type= "text"
              name= "adress"
              />
              <Input 
              children="Número"
              type= "number"
              name= "number"
              />
              <Input 
              children="CEP"
              type= "number"
              name= "cep"
              />
              <Input 
              children="Bairro"
              type= "text"
              name= "bairro"
              />
              <Input 
              children="Cidade"
              type= "text"
              name= "cidade"
              />
              <Input 
              children="Ponto de referência"
              type= "text"
              name= "local"
              />
              <Textarea
              children="Descreva o ocorrido (física, verbal)"
              type="text"
              />
              <div className={styles.boxBtn}>
                <Button>Enviar</Button>
              </div>
          </form>
      </div>
    </section>
  )
}

export default Registrar