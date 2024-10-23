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
      window.removeEventListener('scroll',handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${shrink ? styles.shrink : ''}`}>
      <Image
        src="/variacaoLogo.png"
        alt="Logo da empresa"
        width={100}
        height={100}
        className={styles.navLogo}
        onClick={() => router.push('/')} //Navega para a home
      />
              
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#hero">Início</a></li> {// ver ref no site do galileo (usar next link)
        }
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