'use client'; //Adicionei pelo scroll ao clicar na logo.

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './NavBar.module.css';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [shrink, setShrink] = useState(false);
  const router = useRouter(); //Para direcionamento, usa 'next/navigation' //olhar iste galileo para ver como links funcionam.

  //Função para detectar o scroll e ajustar o tamanho da navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${shrink ? styles.shrink : ''}`}>
      <div className={styles.navContainer}>
        <Image
          src="/variacaoLogo.png"
          alt="Logo da empresa"
          width={shrink ? 50 : 100}
          height={shrink ? 50 : 100}
          className={styles.navLogo}
          onClick={() => router.push('/')} //Navega para a home
        />

        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#hero">INÍCIO</a></li> {// ver ref no site do galileo (usar next link)
          }
          <li className={styles.navItem}><a href="#servicos">PEDIDOS</a></li>
          <li className={styles.navItem}><a href="#provasocial">APRESENTAÇÃO</a></li>
          <li className={styles.navItem}><a href="#diferencial">PERGUNTAS FREQUENTES</a></li>
          <li className={styles.navItem}><a href="#sobreNos">PROVA SOCIAL</a></li>
          <li className={styles.navItem}><a href="#contact">CONTATO</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;