// src/app/components/Footer.js

import React from "react";
import Image from "next/image";
import styles from "../styles/footer.module.css";

// Componente de rodapé
export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.fade}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            {/* Texto de direitos autorais */}
            <p>&copy; 2024 <strong>Direitos Reservados</strong></p>
          </div>
          <div className={styles.contactInfo}>
            {/* Ícone de e-mail */}
            <Image
              width={52}
              height={28}
              src={"https://www.site.com.br/wp-content/uploads/hospedagem-icone-13c-1.png"}
              alt="Ícone de E-mail"
            />
            {/* Endereço de e-mail */}
            <a
              className={styles.emailLink}
              href="mailto:samueltorochagas@gmail.com"
            >
              samueltorochagas@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
