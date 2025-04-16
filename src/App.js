import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Contador from "./components/Contador";
import JogoDaVelha from "./components/JogoDaVelha";
import Calculadora from "./components/Calculadora";
import BuscarCEP from "./components/BuscarCEP";

function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', minHeight: '100vh', backgroundColor: '#f4f6fb' }}>
      <Header setPagina={setPagina} />
      <main style={{ padding: '32px 24px', maxWidth: '800px', margin: '0 auto' }}>
        {pagina === "todo" && <ToDoList />}
        {pagina === "contador" && <Contador />}
        {pagina === "jogodavelha" && <JogoDaVelha />}
        {pagina === "calculadora" && <Calculadora />}
        {pagina === "buscarcep" && <BuscarCEP />}
        {pagina === "home" && <p style={{ fontSize: '18px' }}>👋 Escolha uma funcionalidade no menu acima para começar!</p>}
      </main>
    </div>
  );
}

export default App;