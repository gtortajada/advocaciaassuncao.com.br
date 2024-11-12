import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.page}>
      <div className={styles.div}>
        <Image
          src="/variacaoLogo.png"
          alt="Logo da Advocacia Assunção"
          className={styles.fotologo}
          layout="responsive"
          width={3006}
          height={692}
        />

        <p>Site em construção.</p>
        <p>Contato (44) 98859-2720.</p>
      </div>
    </section>
  );
}
