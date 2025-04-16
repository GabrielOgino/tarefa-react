import React, { useState } from "react";
import { cardEstilo, inputEstilo, botaoAzul } from "../styles/commonStyles";

function BuscarCEP() {
  const [cep, setCep] = useState("");
  const [info, setInfo] = useState(null);

  async function buscar() {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await res.json();
      setInfo(dados);
    } catch {
      setInfo(null);
    }
  }

  return (
    <div style={cardEstilo}>
      <h2>📮 Buscar CEP</h2>
      <input
        placeholder="Digite o CEP"
        style={inputEstilo}
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={buscar} style={botaoAzul}>Buscar</button>
      {info && (
        <div style={{ marginTop: '16px', backgroundColor: '#f1f5f9', padding: '12px', borderRadius: '6px' }}>
          <p><strong>Logradouro:</strong> {info.logradouro}</p>
          <p><strong>Bairro:</strong> {info.bairro}</p>
          <p><strong>Cidade:</strong> {info.localidade}</p>
          <p><strong>Estado:</strong> {info.uf}</p>
        </div>
      )}
    </div>
  );
}

export default BuscarCEP;
