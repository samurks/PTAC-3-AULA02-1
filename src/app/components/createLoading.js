/* @next/react */
import React, { useState, useEffect } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);


  return (
    <div>
      <img src="/home/samuel/Documentos/Development/PTAC-3-AULA02-1/public/assets/grey-9026_256.gif" alt="Carregando" />
    </div>
  );
}