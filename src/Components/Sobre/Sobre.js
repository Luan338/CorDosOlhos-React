import React from 'react';
import Luan from '../../Assets/luan.jpg';
import Lari from '../../Assets/lari.jpeg';
import Iara from '../../Assets/iara.jpeg';
import Gabi from '../../Assets/gabi.jpeg';
import homem from '../../Assets/homem.jpg';
import balao from '../../Assets/balao-fala.png';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <section className={styles.contain}>
      <div className={styles.group}>
        <img src={homem} alt="Imagem de esperança" className={styles.img} />
        <div className={styles.boxParagraph}>
          <p className={styles.paragraph}>
            A Cor dos olhos, em atenção com os Objetivos de Desenvolvimento Sustentável (ODS),
            organizados através da parceria entre 193 países, membros da Organização das Nações 
            Unidas (ONU). São 17 objetivos que norteiam a Agenda 2030 contendo 169 metas que visam
            o desenvolvimento mundial, “abrangendo as dimensões ambiental, econômica e social do 
            desenvolvimento sustentável, de forma integrada e inter-relacionada”. Hoje, atuamos 
            diretamente com os ODS “3 - Boa Saúde e Bem-Estar” e “16 - Paz, Justiça e Instituições
            Eficazes”.
          </p>
        </div>
      </div>
      <section className={styles.aboutUs}>
        <div className={styles.box}>
          <img src={Luan} alt="Luan" className={styles.imgLuan}/>
          <img src={balao} alt="balão de fala" className={styles.balao}/>
        </div>
        <div className={styles.box}>
          <img src={Lari} alt="Lari" className={styles.imgLari}/>
          <img src={balao} alt="balão de fala" className={styles.balao}/>
        </div>
        <div className={styles.box}>
          <img src={Iara} alt="Iara" className={styles.imgIara}/>
          <img src={balao} alt="balão de fala" className={styles.balao}/>
        </div>
        <div className={styles.box}>
          <img src={Gabi} alt="Gabi" className={styles.imgGabi}/>
          <img src={balao} alt="balão de fala" className={styles.balao}/>
        </div>
      </section>
    </section>
  )
}

export default Sobre;