import React, { useState } from "react";

function ToDoList() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if (input.trim()) {
      setTarefas([...tarefas, input.trim()]);
      setInput("");
    }
  }

  return (
    <div style={estiloCard}>
      <h2 style={{ marginBottom: '16px' }}>📋 To-Do List</h2>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={estiloInput}
        />
        <button onClick={adicionarTarefa} style={estiloBotao}>
          Adicionar
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={estiloItem}>
            ✅ {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
}

const estiloCard = {
  backgroundColor: '#ffffff',
  padding: '24px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  marginBottom: '24px'
};

const estiloInput = {
  flex: 1,
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #d1d5db',
  fontSize: '16px'
};

const estiloBotao = {
  padding: '10px 16px',
  backgroundColor: '#10b981',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const estiloItem = {
  padding: '8px 0',
  fontSize: '16px',
  borderBottom: '1px solid #e5e7eb'
};

export default ToDoList;