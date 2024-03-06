// pages/not-found.js
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    
      <div className={styles.container}>
        <h2 className={styles.title}>Oops! Página não encontrada</h2>
        <p className={styles.message}>Desculpe, não conseguimos encontrar a página que você está procurando.</p>
        <Link className={styles.link} href="/">
        Voltar para a página inicial
        </Link>
      </div>
    
  );
}

