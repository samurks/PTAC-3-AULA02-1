import React from "react";
import styles from "../stylesheet/css/Footer.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <p>&copy; 2024 Direitos Reservados por [Nome da Empresa]</p>
        </div>
        <div className={styles.email}>
          <p>Email: contato@exemplo.com</p>
        </div>
      </div>
    </footer>
  );
}
