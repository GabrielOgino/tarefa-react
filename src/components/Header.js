import React from "react";

function Header({ setPagina }) {
  return (
    <header style={{
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '20px 32px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>✨ Multi-App React</h1>
      <nav style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {['todo', 'Contador', 'Jogo da Velha', 'Calculadora', 'Buscar CEP'].map((label, i) => (
          <button
            key={i}
            onClick={() => setPagina(label.toLowerCase().replace(/ /g, ""))}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '8px 14px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseOut={e => e.target.style.backgroundColor = '#3b82f6'}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;