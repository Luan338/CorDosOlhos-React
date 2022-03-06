import React from 'react';
import Card from '../Card/Card';
import styles from './Home.module.css';
import Lupa from '../../Assets/lupa.png';
import Som from '../../Assets/som.png';
import grafico from '../../Assets/grafico-de-barras.png';
import mapa from '../../Assets/mapa.png';


const Home = () => {
  return (
    <section>
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
        title="Cosulte dados do local que deseja especificar"
        titleBtn="Consultar"
        img={Lupa}
        titleImg="Lupa"
        />
        <Card 
        title="Registre sua ocorrência"
        titleBtn="Registrar"
        img={Som}
        titleImg="Som"
        /> 
        <Card 
        title="Gráficos gerados"
        titleBtn="Verificar"
        img={grafico}
        titleImg="grafico"
        />
      </div>
    </section>
  )
}

export default Home;