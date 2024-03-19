// src/app/components/Card.js

import React from "react";
import styles from "../styles/card.module.css";

// Componente de card para exibir informações do filme
const Card = ({ imagemUrl, nomeFilme, genero }) => {
  return (
    <div className={styles.card}>
      <img src={imagemUrl} alt={nomeFilme} />
      <h3>{nomeFilme}</h3>
      <p className={styles.genre}>{genero}</p> {/* Adicionando a classe para o gênero */}
    </div>
  );
};

export default Card;
