import React from "react";
import Card from "./components/Card";
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
        <div className={styles.grid}>
          <div className={styles.column}>
            {campus.slice(0, Math.ceil(campus.length / 3)).map((campi) => (
              <Card
                key={campi.id}
                imagemUrl={campi.imagem_url}
                nomeCampus={campi.nome_campi}
              />
            ))}
          </div>
          <div className={styles.column}>
            {campus.slice(Math.ceil(campus.length / 3), Math.ceil((campus.length / 3) * 2)).map((campi) => (
              <Card
                key={campi.id}
                imagemUrl={campi.imagem_url}
                nomeCampus={campi.nome_campi}
              />
            ))}
          </div>
          <div className={styles.column}>
            {campus.slice(Math.ceil((campus.length / 3) * 2)).map((campi) => (
              <Card
                key={campi.id}
                imagemUrl={campi.imagem_url}
                nomeCampus={campi.nome_campi}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
