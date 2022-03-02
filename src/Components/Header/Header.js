import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logoNomeBranco.png';
import Menu from '../../Assets/menu.png';
import styles from './Header.module.css';

const Header = () => {

  const navRef = useRef();

  function activeMenu(){
    navRef.current.classList.toggle('active');
  }

  return (
    <section className={styles.container}>
      <Link className={styles.boxLogo} to="/" aria-label="Cor dos Olhos - Home">
        <img src={Logo} alt="Logo" />
      </Link>
      <ul className={styles.list}>
        <Link className={styles.text} to="/">Home</Link>
        <Link className={styles.text} to="/contato">Contato</Link>
        <Link className={styles.text} to="/sobre">Sobre</Link>
        <Link className={styles.text} to="/registrar">Registrar</Link>
        <Link className={styles.text} to="/consultar">Consultar</Link>
      </ul>
      <ul className={styles.login}>
        <Link className={styles.text} to="/logar">Logar</Link>
        <span></span>
        <Link className={styles.textEspecial} to="/cadastrar">Cadastrar</Link>
      </ul>
      <div className={styles.menuMobile}>
        <img src={Menu} alt-="Menu" onClick={activeMenu}/>
      </div>
    </section>
  )
}

export default Header;