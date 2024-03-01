import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
      <Link className={styles.navLink} href="/">
            <li className={styles.navItem}>Home</li>
          </Link>
          <Link className={styles.navLink} href="registro">
            <li className={styles.navItem}>Registrar</li>
          </Link>
          <Link className={styles.navLink} href="localização">
            <li className={styles.navItem}>Localização</li>
          </Link>
        </ul>
      </nav>
      <div className={styles.logo}>
      <Image
        width={50}
        height={50}
        src={"https://auth.openai.com/assets/openai-logo-5lqCnCN9.svg"}
        />
      </div>
    </header>
  );
}
