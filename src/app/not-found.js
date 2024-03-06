import Link from "next/link";
import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <div>
      <h2>Não foi possível encontrar essa página :(</h2>
      <Link href="/">
        Voltar para página inicial
      </Link>
    </div>
  );
}
