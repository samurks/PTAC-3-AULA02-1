// src/app/localizacao/page.js

import React from "react";
import Map from "../components/Map";

// Página de localização
export default function LocalizacaoPage() {
  return (
    <div>
      {/* Componente de mapa */}
      <Map style={{ width: "100%", height: "80vh" }} />
    </div>
  );
}
