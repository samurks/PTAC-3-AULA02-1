import React from "react";
import styles from "./home.module.css";

export default function Page() {
  return (
    <div className={styles.fade}>
      <main className={styles.container}>
      <section className={styles.introSection}>
        <h1>Olá, Seja bem-vindo!</h1>
        <p className={styles.subtitle}>Estamos felizes por você estar aqui.</p>
      </section>
    </main>
    </div>
  );
}