import React from "react";
import styles from "./registro.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.registrocontainer}>
      <h1>Registre-se agora!</h1>
      <form className={styles.registroform}>
        <div className={styles.formgroup}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" />
        </div>

        <button className={styles.buttonRegister} type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
}
