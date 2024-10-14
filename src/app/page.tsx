// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
     <div id="hero" className={styles.section}>
      <h1>Bem vindo ao nosso site!</h1>
      <p>Esta é a hero section.</p>     
      </div>

      <div id="servicos" className={styles.section}>
        <div>
          <h2>NOSSOS SERVIÇOS - Falei com cliente e vamos tentar reduzir essa lista toda</h2>
          <p>PRINCIPAIS PEDIDOS BANCÁRIOS</p>
        </div>
        <div id="esquerda" className={styles.section}>
          <ul>
            <li>HORAS EXTRAS (7ª e 8ª);</li>
            <li>HORAS EXTRAS ALÉM DA 8ª;</li>
            <li>HORAS EXTRAS INTERJORNADA;</li>
            <li>HORAS EXTRAS INTRAJORNADAS;</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            
          </ul>
        </div>
        <div id="direita" className={styles.section}>
          <ul>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            <li>HORAS EXTRAS (7 e 8);</li>
            
          </ul>
        </div>
      </div>
 
      <div id="provasocial" className={styles.section}>
      <h2>O que nossos clientes dizem</h2>
      <p>Testemunhos e avaliações de clientes.</p>
      </div>

      <div id="diferencial" className={styles.section}>
      <h2>Diferenciais</h2>
      <p>Destaques e diferenciais da empresa</p>
      </div>

      <div id="sobreNos" className={styles.section}>
      <h2>Sobre nós.</h2>
      <p>Descrição da empresa.</p>
      </div>

      <div id="contact" className={styles.section}>
      <h2>Contato</h2>
      <p>Descrição de contato.</p>
      </div>

    </div>
  );
}
