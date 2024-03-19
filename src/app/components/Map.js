// src/app/components/Map.js

import React from "react";

// Componente de mapa
export default function Map() {
  return (
    <main>
      {/* Iframe para exibir o mapa do campus */}
      <iframe
        id="gmap_canvas"
        src={
          "https://maps.google.com/maps?q=Nova%20Andradina%20+IFMS+&t=&z=13&ie=UTF8&iwloc=&output=embed"
        }
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </main>
  );
}
