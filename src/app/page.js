import React from "react";
import ClientSideLoading from "/home/samuel/Documentos/Development/PTAC-3-AULA02-1/src/app/components/ClientSideLoading.js";

export default function Page() {
  return (
    <div>
      <ClientSideLoading />
      <main className={styles.container}>
      
      <section className={styles.introSection}>
        <h1>Olá, Seja bem-vindo!</h1>
        <p className={styles.subtitle}>Estamos felizes por você estar aqui.</p>
      </section>
    </main>
    </div>
  );
}