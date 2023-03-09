import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from "assets/circuloanimado.gif";
import minhaFoto from "assets/profile.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Hello World! 👋</h1>
        <p className={styles.paragrafo}>
          Bem-vindo ao meu blog pessoal =)<br />
          Sou João Lucca, Desenvolvedor Frontend, apaixonado por tecnologia e estrutura de dados.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="Color Circle"
          aria-hidden={true}
        />
        <img 
            className={styles.minhaFoto}
            src={minhaFoto}
            alt="Foto Perfil"
        />
      </div>
    </div>
  );
}
