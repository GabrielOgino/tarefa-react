import React, { useState } from "react";
import { cardEstilo } from "../styles/commonStyles";

function JogoDaVelha() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [xProximo, setXProximo] = useState(true);

  function jogar(i) {
    if (tabuleiro[i] || vencedor(tabuleiro)) return;
    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[i] = xProximo ? "X" : "O";
    setTabuleiro(novoTabuleiro);
    setXProximo(!xProximo);
  }

  function vencedor(casas) {
    const linhas = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of linhas) {
      if (casas[a] && casas[a] === casas[b] && casas[a] === casas[c]) return casas[a];
    }
    return null;
  }

  const ganhador = vencedor(tabuleiro);

  return (
    <div style={cardEstilo}>
      <h2>❌⭕ Jogo da Velha</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 70px)', gap: '10px', margin: '16px 0' }}>
        {tabuleiro.map((valor, i) => (
          <button
            key={i}
            onClick={() => jogar(i)}
            style={{
              width: '70px',
              height: '70px',
              fontSize: '24px',
              fontWeight: 'bold',
              backgroundColor: '#fff',
              border: '2px solid #cbd5e1',
              borderRadius: '6px'
            }}
          >
            {valor}
          </button>
        ))}
      </div>
      <p>{ganhador ? `🎉 Vencedor: ${ganhador}` : `👉 Próximo: ${xProximo ? "X" : "O"}`}</p>
    </div>
  );
}

export default JogoDaVelha;
