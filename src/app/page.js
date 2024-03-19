import React from "react";
import Card from "./components/Card";
import styles from "./styles/home.module.css";

export default async function Home(){
  const response = await fetch("http://localhost:3000/api",{
    next:{revalidate: 1}
  });
  const filmes = await response.json();

  return (
    <div className={styles.fade}>
      <main className={styles.container}>
        <section className={styles.introSection}>
          <h1>Descubra os Melhores Filmes!</h1>
          <p className={styles.subtitle}>Explore nossa seleção de filmes incríveis.</p>
        </section>
        <div className={styles.grid}>
          {/* Renderização dos cards dos filmes */}
          {filmes.map((filme) => (
            <Card
              key={filme.id}
              imagemUrl={filme.imagem_url}
              nomeFilme={filme.nome}
              genero={filme.genero}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
