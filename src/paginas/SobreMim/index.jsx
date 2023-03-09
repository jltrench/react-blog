import React from 'react';
import styles from './SobreMim.module.css'
import PostModelo from 'components/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/fibo.jpg';


export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou João Lucca
      </h3>

      <img src={fotoSobreMim} alt="Profile" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>⌨️</p>

      <p className={styles.paragrafo}>Conheci o desenvolvimento web sem saber, ao editar blogs com 11 anos para os jogos que jogava.</p>

      <p className={styles.paragrafo}>Porém meu contato real com a programação começou no início de 2021, época na qual conheci de fato essa área e fiquei fascinado pela possibilidade de criação de sistemas e resolução de problemas na qual um código pode ter.</p> 

      <p className={styles.paragrafo}>Com isso, também em  2021, optei por cursar Ciência da Computação (Unisagrado), durante o curso vi muitas coisas interessantes, porém, por eu querer focar muito em programação, em 2023 iniciei o curso de ADS (FIAP).</p>

      <p className={styles.paragrafo}>Durante todos esses anos tive experiência com várias linguagens, porém foi somente neste (2023) que me encontrei em uma linguagem, que é o famoso JavaScript.</p>

      <p className={styles.paragrafo}>Desde então comecei a me aprofundar em JavaScript e todo o seu conteúdo.</p>

      <p className={styles.paragrafo}>Este foi um breve resumo sobre mim, espero que goste dos posts. 😄</p>
    </PostModelo>
  )
}
