import React from 'react';
import Image from 'next/image';
import styles from './NavBar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        src="/variacaoLogo.png"
        alt="Logo da empresa"
        width={50}
        height={100}
        className={styles.navLogo}
      />
              
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#hero">Início</a></li>
        <li className={styles.navItem}><a href="#servicos">Serviços</a></li>
        <li className={styles.navItem}><a href="#provasocial">O que dizem</a></li>
        <li className={styles.navItem}><a href="#diferencial">Diferenciais</a></li>
        <li className={styles.navItem}><a href="#sobreNos">Sobre nós</a></li>
        <li className={styles.navItem}><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;