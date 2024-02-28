import React from "react";
import styles from "./footer.module.css"; 
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footercontainer}>
      <div className={styles.footercontent}>
        <div>
          <p>&copy; 2024 Direitos Reservados por ...</p>
        </div>
        <div>
        <Image
        width={100}
        height={100}
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/2048px-TK_email_icon.svg.png"}
      />
          <p>: samueltorochagas@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
