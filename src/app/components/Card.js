// src/app/components/Card.js

import Image from "next/image";
import React from "react";
import styles from "../styles/card.module.css";


const Card = ({ imagemUrl, nomeCampus }) => {
  return (
    <div className={styles.card}>
      <Image   
      alt={"nome do campus"}
      width={300}
      height={150}src={imagemUrl} 
      />
      <h3>{nomeCampus}</h3>
    </div>
  );
};

export default Card;
