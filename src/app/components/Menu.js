import Link from "next/link";
import styles from "../styles/menu.module.css";
import Image from "next/image";

export default function Menu() {
  return (
    <div className={styles.fade}>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <Link className={styles.navLink} href="/">
            <span aria-label="Página inicial">Home</span>
          </Link>
          <Link className={styles.navLink} href="registro">
            Registrar
          </Link>
          <Link className={styles.navLink} href="localizacao">
            Mapa
          </Link>
        </ul>
      </nav>
      <div className={styles.logo}>
        <a
          href="https://chat.openai.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={50}
            height={50}
            src={"https://auth.openai.com/assets/openai-logo-5lqCnCN9.svg"}
            alt="OpenAI Logo"
          />
        </a>
      </div>
    </header>
    </div>
  );
}
