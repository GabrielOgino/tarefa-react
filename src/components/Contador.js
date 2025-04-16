import React, { useState } from "react";
import { cardEstilo, botaoAmarelo } from "../styles/commonStyles";

function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <div style={cardEstilo}>
      <h2>🧮 Contador de Cliques</h2>
      <p>Você clicou <strong>{contador}</strong> vezes</p>
      <button onClick={() => setContador(contador + 1)} style={botaoAmarelo}>Clique aqui</button>
    </div>
  );
}

export default Contador;