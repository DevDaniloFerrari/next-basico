"use client";
import { useEffect, useState } from "react";

export default function questao() {
  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123").then((response) => {
      response.json().then(setQuestao);
    });
  }, []);

  function renderizarRespostas() {
    if (questao) {
      return questao.respostas.map((resposta, index) => {
        return <li key={index}>{resposta}</li>
      });
    }
  }

  return (
    <div>
      <h1>Questão</h1>
      <div>
        <span>{questao?.id} - {questao?.enunciado}</span>
        <ul>{renderizarRespostas()}</ul>
      </div>
    </div>
  );
}
