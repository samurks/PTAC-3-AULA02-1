import React from "react";
import Card from "./components/Card";
import styles from "./styles/home.module.css";

export default async function Home(){
  try {
  const response = await fetch("https://back-end-ifms-ebon.vercel.app/campi ",{
    next:{revalidate: 1}
  });

  if (!response.ok) {
    throw new Error("Erro na requisição");
  }

  const campi = await response.json();

  return(
    <div className={styles.fade}>
      <main className={styles.container}>
        <section className={styles.introSection}>
          <h1>Descubra os Melhores Filmes!</h1>
          <p className={styles.subtitle}>Explore nossa seleção de filmes incríveis.</p>
        </section>
        <div className={styles.grid}>
         
          {campi.map((campus) => (
            <Card
            key={campus.id}
            imagemUrl={campus.image_url}
            nomeCampus={campus.nome_campus}
          />
          ))}
        </div>
      </main>
    </div>
  );
  } catch (error) {
    return (
      <div>
        <h1>Erro 505: API Indisponível</h1>
        <p>Atualmente, a API não está disponível. Tente novamente mais tarde.</p>
      </div>
    );
  }
}

