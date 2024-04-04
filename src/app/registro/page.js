'use client'
import React from "react";
import styles from "../styles/registro.module.css";


export default function RegisterPage() {
  const handleSubmit = (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const data = {};

    for (let [name, value] of formData.entries()) {
      data[name] = value;
    }

    console.log("Dados do formulário:", data);
  };


  return (
   <main className={styles.registrocontainer}>
    <div>
      <h1>Registre-se agora!</h1>
      <form className={styles.registroform} onSubmit={handleSubmit}>

        <div className={styles.formgroup}>
          <label htmlFor="nome_campus">Nome do Campus:</label>
          <input name="nome_campus" />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="imagem_url">Imagem do Campus:</label>
          <input name="imagem_url" />
        </div>

        <button className={styles.buttonRegister} type="submit">
          Registrar
        </button>
      </form>
    </div>
    </main>
  );
}