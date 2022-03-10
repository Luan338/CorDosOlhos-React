import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({title, titleBtn, img, titleImg, choice}) => {
  return (
    <section className={styles.card}>
        <div className={styles.cardColor}>
            <div className={styles.boxImg}>
                <img src={img} alt={titleImg} />
            </div>
            <h2>{title}</h2>
        </div>
        <Link to={choice}>
          <button className={styles.btnCard}>{titleBtn}</button>   
        </Link>
    </section>
  )
}

export default Card