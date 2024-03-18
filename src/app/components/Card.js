import React from "react";
import styles from "../styles/card.module.css";

const Card = ({ imagemUrl, nomeCampus }) => {
  return (
    <div className={styles.card}>
      <img src={imagemUrl}/>
      <h3>{nomeCampus}</h3>
    </div>
  );
};

export default Card;
