import React, { useState } from "react";
import { cardEstilo, inputEstilo, botaoPadrao } from "../styles/commonStyles";

function Calculadora() {
  const [resultado, setResultado] = useState("");

  function clicar(valor) {
    setResultado(resultado + valor);
  }

  function calcular() {
    try {
      setResultado(eval(resultado).toString());
    } catch {
      setResultado("Erro");
    }
  }

  function limpar() {
    setResultado("");
  }

  return (
    <div style={cardEstilo}>
      <h2>🧮 Calculadora</h2>
      <input style={inputEstilo} value={resultado} readOnly />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        {['1','2','3','+','4','5','6','-','7','8','9','*','C','0','=','/'].map((btn) => (
          <button
            key={btn}
            onClick={() => btn === '=' ? calcular() : btn === 'C' ? limpar() : clicar(btn)}
            style={botaoPadrao}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculadora;
