import React from 'react';
import Luan from '../Assets/luan.jpg';
import Lari from '../Assets/lari.jpeg';
import Iara from '../Assets/iara.jpeg';
import Gabi from '../Assets/gabi.jpeg';
import homem from '../Assets/homem.jpg';
import balao from '../Assets/balao-fala.png';
import styles from './Sobre.module.css';
import { useState } from 'react';


const Sobre = () => {

  const [currentCheckedInfo, setCurrentCheckedInfo] = useState('');

  const [info, setInfo] = useState([
    {
      img: Luan,
      balaoImg: balao,
      nome: "Luan",
      paragrafo: "Sou carioca e tenho 22 anos de idade, atualmente estou em formação na área Full Stack na Recode Pro, possuo conhecimento com Front-end, e sempre dando o melhor em tudo o que faço."   
    },
    {
      img: Lari,
      balaoImg: balao,
      nome: "Lari",
      paragrafo: "Em formação para ser uma futura programadora full stack, apaixonada por tecnologia e tudo que ela proporciona, fã de arte, design, com um desejo de ajudar a solucionar problemas da sociedade. movida pela curiosidade de descobrir cada vez mais sobre esta especialidade, para garantir mais resultados dos projetos que participa e sempre a procura de novos desafios para aflorar a criatividade."   
    },
    {
      img: Iara,
      balaoImg: balao,
      nome: "Iara",
      paragrafo: "Paulista, casada e mãe de duas maravilhosas crianças, ela é psicóloga e neuropsicóloga, trabalha no processo de autoconhecimento, desenvolvimento e empoderamento feminino. Atua com a perspectiva de melhorar a qualidade de vida, autopercepção, sociabilidade e ressignificação de correntes psíquicas que impactam a saúde e bem estar dos afro brasileiros."   
    },
    {
      img: Gabi,
      balaoImg: balao,
      nome: "Gabi",
      paragrafo: "Vinda de humanas pra programar e trazer esse olhar e vivencias para aproximar cada vez mais o software das pessoas, ama entender como funciona e se atinge o bem estar e cuidado através da tecnologia. Formada em turismo e iniciante teatro."   
    },
]);

  function handleClick(item){
    setCurrentCheckedInfo(
    item.nome
    )
    setInfo(info)
  }

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
        {info.map((item, key) => {
          return(
          <div className={styles.box} key={key}>
            <div>
              <img src={item.img} alt="Desenvolvedores" className={styles.imgDevs}/>
              <img src={item.balaoImg} alt="Balão de fala" className={styles.balao} onClick={() => handleClick(item)}/>
            </div>
            {currentCheckedInfo === item.nome &&
            <div className={styles.card}>
              <h3>{item.nome}</h3>
              <p>{item.paragrafo}</p>
            </div>
            }
        </div>
          )
        })}
        
      </section>
    </section>
  )
}

export default Sobre;