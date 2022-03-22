import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logoNomeBranco.png';
import styles from './Header.module.css';

const Header = () => {

  const navRef = useRef();

  function activeMenu(){
    navRef.current?.classList.toggle('active');
  }

  window.addEventListener("resize", () => {
   if(window.matchMedia("(min-width: 890px)").matches){
    navRef.current?.classList.remove('active');
   } 
  })

  return (
    <section className={styles.container}>
      <Link className={styles.boxLogo} to="/" aria-label="Cor dos Olhos - Home">
        <img src={Logo} alt="Logo" />
      </Link>
      <nav className={styles.nav} ref={navRef}>
        <ul className={styles.list}>
          <Link className={styles.text} to="/home">Home</Link>
          <Link className={styles.text} to="/add-contato/_add">Contato</Link>
          <Link className={styles.text} to="/sobre">Sobre</Link>
          <Link className={styles.text} to="/add-registro/_add">Registrar</Link>
          <Link className={styles.text} to="/consultar">Consultar</Link>
        </ul>
        {/* <ul className={styles.login}>
          <Link className={styles.text} to="/logar">Logar</Link>
          <span></span>
          <Link className={styles.textEspecial} to="/cadastrar">Cadastrar</Link>
        </ul> */}
      </nav>
      <div className={styles.menuMobile} onClick={activeMenu}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>
    </section>
  )
}

export default Header;