import React from "react";
import styles from "../styles/registro.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.fade}>
    <div className={styles.registrocontainer}>
      <h1>Registre-se agora!</h1>
      <form className={styles.registroform}>
        <div className={styles.formgroup}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="email">Nome do Campus:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="senha">Imagem do Campus:</label>
          <input type="password" id="senha" name="senha" />
        </div>

        <button className={styles.buttonRegister} type="submit">
          Registrar
        </button>
      </form>
    </div>
    </div>
  );
}