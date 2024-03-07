/* @next/react */
import React from "react";
import Loading from "/home/samuel/Documentos/Development/PTAC-3-AULA02-1/src/app/components/createLoading.js";

export default function ClientSideLoading() {
  return (
    <div>
      {loading && <Loading />}
      {/* Resto do conteúdo do seu componente */}
    </div>
  );
}