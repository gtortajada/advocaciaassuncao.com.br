import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.page}>

      {/* Hero Section */} {/*Adicionar Paralax*/}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Advocacia especializada em causas trabalhistas bancárias, com foco nos resultados e atendimento personalizado em todo o Brasil.</h1>
          <button className={styles.buttonhero}> Entrar em contato </button> {/*Falta o direcionamento do botão*/}
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
        <div className={styles.servicoscontent}>
          <div className={styles.tituloservicos}>
            <h2>PRINCIPAIS PEDIDOS BANCÁRIOS</h2>
          </div>
          <div id="pedidos" className={styles.pedidos}> {/*Adicionar ícones*/}

            <div className={styles.box}>
              <div id="boxesq" className={styles.boxesq}>
                <ul className={styles.lista}>
                  <li className={styles.linhas}>HORAS EXTRAS (7ª e 8ª);</li>
                  <li className={styles.linhas}>HORAS EXTRAS ALÉM DA 8ª;</li>
                  <li className={styles.linhas}>HORAS EXTRAS INTERJORNADA;</li>
                  <li className={styles.linhas}>HORAS EXTRAS INTRAJORNADAS;</li>
                  <li className={styles.linhas}>ARTIGO 384 (INTERVALO DA MULHER);</li>
                  <li className={styles.linhas}>DESVIO DE FUNÇÃO;</li>
                  <li className={styles.linhas}>EQUIPARAÇÃO SALARIAL;</li>
                  <li className={styles.linhas}>ADICIONAL DE TRANSFERÊNCIA;</li>
                  <li className={styles.linhas}>VENDA OBRIGATÓRIA DE FÉRIAS;</li>
                  <li className={styles.linhas}>USO DE VEÍCULO PARTICULAR;</li>
                  <li className={styles.linhas}>REINTEGRAÇÃO AO EMPREGO;</li>
                  <li className={styles.linhas}>PERICULOSIDADE;</li>
                </ul>
              </div>
              <div id="boxdir" className={styles.boxdir}>
                <ul className={styles.lista}>
                  <li className={styles.linhas}>DANOS MORAIS;</li>
                  <li className={styles.linhas}>ASSÉDIO MORAL;</li>
                  <li className={styles.linhas}>DANO MATERIAL;</li>
                  <li className={styles.linhas}>DOENÇA OCUPACIONAL;</li>
                  <li className={styles.linhas}>ACIDENTE DE TRABALHO;</li>
                  <li className={styles.linhas}>DANO EXISTENCIAL;</li>
                  <li className={styles.linhas}>ANÁLISE E REVERSÃO DE JUSTA CAUSA;</li>
                  <li className={styles.linhas}>REINTEGRAÇÃO POR TUTELA DE URGÊNCIA</li>
                  <li className={styles.linhas}>PROTESTO INTERRUPTIVO DE PRESCRIÇÃO;</li>
                  <li className={styles.linhas}>REINTEGRAÇÃO AO EMPREGO;</li>
                  <li className={styles.linhas}>PLANO DE SAÚDE (MESMA CONDIÇÃO DE <br />CONTRATO ATIVO);</li>
                </ul>
              </div>
            </div>
          </div>
          <button className={styles.buttonservicos}> Fale com um especialista</button>
          <div className={styles.bancos}> {/*Adicionar Accordion*/}
            <p className={styles.banco}>BANCO ITAÚ</p>
            <p className={styles.banco}>BANCO SANTANDER</p>
            <p className={styles.banco}>BANCO BRADESCO</p>
            <p className={styles.banco}>BANCO SAFRA</p>
            <p className={styles.banco}>BANCO DAYCOVAL</p>
          </div>
        </div>

      </section>

      {/* Prova Social Section */}
      <section id="provasocial" className={styles.provasocial}>
        <div className={styles.contentprovasocial}>
          <h3 className={styles.tituloprovasocial}>O QUE NOSSOS CLIENTES DIZEM</h3>
          <div className={styles.depoimentos}>
            <div className={styles.depoimento1}>
              <p className={styles.textodepoimento}>Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso,<br /> Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso.</p>
              <p className={styles.nomedepoimento}>Jośe da Silva, Campo Grande, MS</p>
              <p className={styles.pedidodepoimento}>Causa de adicional de transferência</p>
            </div>
            <div className={styles.depoimento1}>
              <p className={styles.textodepoimento}>Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso,<br /> Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso.</p>
              <p className={styles.nomedepoimento}>Jośe da Silva, Campo Grande, MS</p>
              <p className={styles.pedidodepoimento}>Causa de adicional de transferência</p>
            </div>
            <div className={styles.depoimento1}>
              <p className={styles.textodepoimento}>Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso,<br /> Sou muito grato ao João, excelente <br />atendimento e dedicação ao caso.</p>
              <p className={styles.nomedepoimento}>Jośe da Silva, Campo Grande, MS</p>
              <p className={styles.pedidodepoimento}>Causa de adicional de transferência</p>
            </div>
          </div>
        </div>
      </section>

      {/*Diferencias Section*/}
      <section id="diferencial" className={styles.diferencial}>
        <div className={styles.contentdiferenciais}>
          <div className={styles.headerdiferenciais}>
            <h4 className={styles.h4}>ESPECIALIDADES</h4>
            <p className={styles.titulodiferenciais}>POR QUE ESCOLHER A ADVOCACIA ASSUNÇÃO?</p>
          </div>
          <div className={styles.cardsdiferenciais}>
            <div className={styles.cards1e2diferenciais}>
              <div className={styles.card1}>
                <p>Foco nos resultados</p>
                <p>Trabalhamos com determinação<br />para alcançar resultados<br />concretos e efetivos.</p>
              </div>
              <div className={styles.card2}>
                <p>Agilidade e profissionalismo</p>
                <p>Soluções rápidas e ágeis para<br />cada situação, com foco na<br />resolução do seu caso.</p>
              </div>
            </div>
            <div className={styles.cards3e4diferenciais}>
              <div className={styles.card3}>
                <p>Profissionalismo</p>
                <p>Comprometimento em cada<br />detalhe do seu processo,<br />assegurando atendimento<br />de alto nível.</p>
              </div>
              <div className={styles.card4}>
                <p>Disponibilidade</p>
                <p>Estamos prontos para<br />agir com rapidez e eficiência.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/*Sobre nós Section*/}
      <section id="sobreNos" className={styles.sobrenos}>
        <div className={styles.contentsobrenos}>
          <div className={styles.headersobrenos}>
            <h2>CONHEÇA NOSSO ESCRITÓRIO</h2>
          </div>
          <div className={styles.corposobrenos}>
            <div className={styles.joao}>
              <Image
              src="/fotoperfil.jpg" alt="Foto de perfil do João Pedro Assunção" 
              layout="fill" objectFit="cover" className={styles.imagejoao}/>
              <div className={styles.overlay}></div>
              <p className={styles.textoimagemjoao}>João Pedro Assunção é um advogado especializado<br />
              em causas trabalhistas bancárias. Com uma atuação<br /> sólida na área, ele oferece estratégias<br />
               personalizadas, sempre focado em alcançar os melhores resultados.</p>
            </div>
            <div className={styles.textoescritorio}>
              <p>Especializada em direito trabalhista bancário,<br />a Advocacia Assunção é reconhecida por sua<br />
              atuação diligente e estratégica. Nossa prática<br />é orientada pelos valores de excelência,<br />
              inovação, dedicação e transparência, que guiam<br />cada etapa do processo. Com atendimento remoto<br />
              para clientes em todo o Brasil, oferecemos uma<br /> experiência eficiente e resultados consistentes.<br />
              Com dedicação, defendemos os direitos dos<br />trabalhadores bancários, garantindo justiça<br />
               e equidade no ambiente de trabalho.</p>
            </div>
          </div>
        </div>

      </section>

      {/*Contato Section*/}
      <section id="contato" className={styles.contato}>
        <h2>Contato</h2>
        <p>Descrição de contato.</p>
      </section>

    </section>
  );
}
