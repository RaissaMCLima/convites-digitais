// src/components/Preview.js
import React from 'react';

function Preview({ data }) {
  return (
    <div className="preview">
      <h2>Pré-visualização do Convite</h2>
      <p>Evento: {data.name}</p>
      <p>Data: {data.date}</p>
      <p>Local: {data.location}</p>
      {/* Adicione a imagem do tema aqui */}
    </div>
  );
}

export default Preview;

