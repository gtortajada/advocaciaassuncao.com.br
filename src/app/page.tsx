// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.page}>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Advocacia especializada em causas trabalhistas bancárias, com foco nos resultados e atendimento personalizado em todo o Brasil.</h1>
          <button> Entrar em contato </button> {/*Falta o direcionamento do botão*/}
        </div>

      </section>
      <section className={styles.cards}>
        <div className={styles.card}>
          <h3>Estratégia e precisão</h3>
        </div>
        <div className={styles.card}>
          <h3>Atendimento online facilitado</h3>
        </div>
        <div className={styles.card}>
          <h3>Recursos até a última instância</h3>
        </div>
      </section>

      {/* Pedidos bancários */}
      <section id="servicos" className={styles.servicos}>
        <div>
          <h2>PRINCIPAIS PEDIDOS BANCÁRIOS</h2>
        </div>
        <div id="pedidos">
          <div id="boxesq" className={styles.section}>
            <ul>
              <li>HORAS EXTRAS (7ª e 8ª);</li>
              <li>HORAS EXTRAS ALÉM DA 8ª;</li>
              <li>HORAS EXTRAS INTERJORNADA;</li>
              <li>HORAS EXTRAS INTRAJORNADAS;</li>
              <li>ARTIGO 384 (INTERVALO DA MULHER);</li>
              <li>DESVIO DE FUNÇÃO;</li>
              <li>EQUIPARAÇÃO SALARIAL;</li>
              <li>ADICIONAL DE TRANSFERÊNCIA;</li>
              <li>VENDA OBRIGATÓRIA DE FÉRIAS;</li>
              <li>DESPESAS COM USO DE VEÍCULO PARTIPLAR;</li>
              <li>REINTEGRAÇÃO AO EMPREGO;</li>
              <li>PERICULOSIDADE;</li>
              <li>DANOS MORAIS;</li>
            </ul>
          </div>
          <div id="boxdir" className={styles.section}>
            <ul>
              <li>ASSÉDIO MORAL;</li>
              <li>DANO MATERIAL;</li>
              <li>DOENÇA OCUPACIONAL;</li>
              <li>ACIDENTE DE TRABALHO;</li>
              <li>DANO EXISTENCIAL;</li>
              <li>ANÁLISE E REVERSÃO DE JUSTA CAUSA;</li>
              <li>REINTEGRAÇÃO POR TUTELA DE URGÊNCIA – ESTABILIDADE;</li>
              <li>PROTESTO INTERRUPTIVO DE PRESCRIÇÃO;</li>
              <li>DESPESAS COM USO DE VEÍCULO PARTIPLAR;</li>
              <li>REINTEGRAÇÃO AO EMPREGO;</li>
              <li>MANUTENÇÃO DO PLANO DE SAÚDE NAS MESMAS CONDIÇÕES ENQUANTO CONTRATO ATIVO – URGÊNCIA;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prova Social Section */}
      <section id="provasocial" className={styles.provasocial}>
        <h2>O que nossos clientes dizem</h2>
        <p>Testemunhos e avaliações de clientes.</p>
      </section>

      {/*Diferencias Section*/}
      <section id="diferencial" className={styles.diferencial}>
        <h2>Diferenciais</h2>
        <p>Destaques e diferenciais da empresa</p>
      </section>

      {/*Sobre nós Section*/}
      <section id="sobreNos" className={styles.sobreNos}>
        <h2>Sobre nós.</h2>
        <p>Descrição da empresa.</p>
      </section>

      {/*Contato Section*/}
      <section id="contato" className={styles.contato}>
        <h2>Contato</h2>
        <p>Descrição de contato.</p>
      </section>

    </section>
  );
}
