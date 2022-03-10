import React from 'react';
import styles from './Consultar.module.css';
import Button from '../Form/Button';
import Input from '../Form/Input';
import paisagem from '../../Assets/paisagem.jpg';

const Consultar = () => {
  return (
    <section className={styles.container}>
      <div className={styles.boxImg}>
        <img src={paisagem} alt="Paisagem"/>
      </div>
      <div className={styles.animeLeft}>
          <div className={styles.boxTitle}>
            <h1 className={styles.title}>Verifique a região que deseja saber mais informações</h1>
          </div>
          <form className={styles.form}>
              <Input 
              children="Endereço"
              type= "text"
              name= "adress"
              />
              <div className={styles.containerInput}>
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
              </div>
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
              <div className={styles.boxBtn}>
                <Button>Consultar</Button>
              </div>
          </form>
      </div>
    </section>
  )
}

export default Consultar;