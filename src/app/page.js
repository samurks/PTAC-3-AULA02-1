import React from "react";
import styles from "./styles/home.module.css";


export default async function Home(){
  const response = await fetch("http://localhost:3000/api",{
    next:{revalidate: 1}
  });
  const campus = await response.json();

  return(
    <div className={styles.fade}>
    <main className={styles.container}>
    <section className={styles.introSection}>
      <h1>Olá, Seja bem-vindo!</h1>
      <p className={styles.subtitle}>Estamos felizes por você estar aqui.</p>
    </section>
    {
      campus.map((campi) => 
      <div>
        <p>{campi.nome_campi}</p>
        <img src={campi.imagem_url}></img>
      </div>
      )
    }
    
  </main>
  </div>
  )
}
