// src/components/ThemeSelector.js
import React from 'react';

const themes = [
  { id: 1, name: 'Festa', imageUrl: '/images/theme1.png' },
  { id: 2, name: 'Casamento', imageUrl: '/images/theme2.png' },
  // Adicione mais temas conforme necessário
];

function ThemeSelector({ onSelect }) {
  return (
    <div>
      <h2>Escolha um Tema</h2>
      <div className="theme-selector">
        {themes.map(theme => (
          <div key={theme.id} onClick={() => onSelect(theme)}>
            <img src={theme.imageUrl} alt={theme.name} />
            <p>{theme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
