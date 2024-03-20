// src/app/registro/page.js
'use client'
import React from "react";
import styles from "../styles/registro.module.css";

// Página de registro
export default function RegisterPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    try {
      const response = await fetch('/api', {
        method: 'POST',
        body: JSON.stringify(formProps),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // ...
    } catch (error) {
      // ...
    }
  };

  return (
    <div className={styles.fade}>
      <div className={styles.registrocontainer}>
        <h1>Registre um novo filme!</h1>
        <form className={styles.registroform} onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <label htmlFor="nome">Nome do Filme:</label>
            <input type="text" id="nome" name="nome" />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="genero">Gênero:</label>
            <input type="text" id="genero" name="genero" />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="imagem_url">URL da Imagem:</label>
            <input type="text" id="imagem_url" name="imagem_url" />
          </div>
          <div></div>
          <div className={styles.formgroup}>
            <label htmlFor="url_filme">URL do Filme:</label>
            <input type="text" id="url_filme" name="url_filme" />
          </div>
          {/* Botão de registro */}
          <button className={styles.buttonRegister} type="submit">
            Registrar Filme
          </button>
        </form>
      </div>
    </div>
  );
}
