import React, { useState } from "react";
import { cardEstilo, inputEstilo, botaoVerde } from "../styles/commonStyles";

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
    <div style={cardEstilo}>
      <h2>📋 To-Do List</h2>
      <input
        placeholder="Digite uma tarefa"
        style={inputEstilo}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={adicionarTarefa} style={botaoVerde}>Adicionar</button>
      <ul style={{ marginTop: '16px' }}>
        {tarefas.map((tarefa, i) => (
          <li key={i}>✅ {tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
