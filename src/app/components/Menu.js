  // src/app/components/Menu.js

  import Link from "next/link";
  import styles from "../styles/menu.module.css";
  import Image from "next/image";

  // Componente de menu de navegação
  export default function Menu() {
    return (
      <div className={styles.fade}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {/* Links para as páginas */}
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
            {/* Logo do OpenAI */}
            <a
              href="https://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={50}
                height={50}
                src={"https://www.ifms.edu.br/marcaifms.png"}
                alt="IFMS Logo"
              />
            </a>
          </div>
        </header>
      </div>
    );
  }