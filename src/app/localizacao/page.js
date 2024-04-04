// src/app/localizacao/page.js
import styles from "../styles/map.module.css"
import React from "react";
import Map from "../components/Map";

// Página de localização
export default function LocalizacaoPage() {
  return (
    <main>
    <div>
      {/* Componente de mapa */}
      <Map className={styles.map}/>
    </div>
    </main>
  );
}
