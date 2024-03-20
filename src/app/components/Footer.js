import React from "react";
import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
  
    <footer className={styles.footerContainer}>
      <div className={styles.fade}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <p>
            &copy; 2024 <strong>Direitos Reservados</strong>
          </p>
        </div>
        <div className={styles.contactInfo}>
          <Image
            width={52}
            height={28}
            src={
              "https://www.site.com.br/wp-content/uploads/hospedagem-icone-13c-1.png"
            }
            alt="Ícone de E-mail"
          />
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