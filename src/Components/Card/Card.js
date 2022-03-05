import React from 'react';
import styles from './Card.module.css';

const Card = ({title, titleBtn, img, titleImg}) => {
  return (
    <section className={styles.card}>
        <div className={styles.cardColor}>
            <div className={styles.boxImg}>
                <img src={img} alt={titleImg} />
            </div>
            <h2>{title}</h2>
        </div>
        <button className={styles.btnCard}>{titleBtn}</button>   
    </section>
  )
}

export default Card