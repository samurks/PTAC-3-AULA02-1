import React from "react";
import Card from "./components/Card";
import styles from "./styles/home.module.css";

export default async function Home(){
  try {
    const response = await fetch("https://back-end-ifms-ebon.vercel.app/campi",{
      next:{revalidate: 1}
    });

    if (!response.ok) {
      throw new Error("Erro na requisição HTTP");
    }

    const campi = await response.json();

    return(
     
        <main className={styles.container}>
          <section className={styles.introSection}>
            <h1>Veja os Campus!</h1>
            <p className={styles.subtitle}>Explore os Campus Federais</p>
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
      
    );
  } catch (error) {
    console.log(error.message)
    return (
      <div>
      <h1>{error.message}</h1>
        <p>Atualmente, a API não está disponível. Tente novamente mais tarde.</p>
      </div>
    );
  }
}

