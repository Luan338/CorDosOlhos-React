import React from 'react';
import Card from '../Card/Card';
import styles from './Home.module.css';
import Lupa from '../Assets/lupab.png';
import Som from '../Assets/caixas-de-somb.png';
import grafico from '../Assets/grafico-de-barrasb.png';
import mapa from '../Assets/mapa.png';


const Home = () => {
  return (
    <section className={styles.contain}>
      <div className={styles.container}>
        <div className={styles.boxText}>
          <h1>Denúncie</h1>
          <p>Aqui, poderemos interagir com as informações coletadas por diversos colaboradores que pretendem manter a integridade de cada brasileiro, independente da raça ou etnia. Explore, reflita, se cuide e nos ajude!</p>
        </div>
        <div className={styles.boxMap}>
          <img src={mapa} alt="Mapa"/>
        </div>
      </div>
      <div className={styles.boxCard}>
        <Card 
        title="Consulte dados do local que deseja especificar"
        titleBtn="Consultar"
        img={Lupa}
        titleImg="Lupa"
        choice="/consultar"
        />
        <Card 
        title="Registre sua ocorrência"
        titleBtn="Registrar"
        img={Som}
        titleImg="Som"
        choice="/add-registro/_add"
        /> 
        <Card 
        title="Gráficos gerados"
        titleBtn="Verificar"
        img={grafico}
        titleImg="grafico"
        choice="/graficos"
        />
      </div>
    </section>
  )
}

export default Home;