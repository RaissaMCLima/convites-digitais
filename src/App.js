// src/App.js
import React, { useState } from 'react';
import ThemeSelector from './components/ThemeSelector';
import InvitationForm from './components/InvitationForm';
import Preview from './components/Preview';
import Payment from './components/Payment'; 
import './App.css'; // Certifique-se de incluir os estilos

function App() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handlePaymentSuccess = () => {
    setIsPaid(true);
  };

  return (
    <div className="App">
      <h1>Crie seu Convite Digital</h1>
      {!isPaid ? (
        <>
          {!formData ? (
            <ThemeSelector onSelect={handleThemeSelect} />
          ) : (
            <Preview data={formData} />
          )}
          <InvitationForm onSubmit={handleFormSubmit} />
          {formData && (
            <Payment amount={10.00} onPaymentSuccess={handlePaymentSuccess} />
          )}
        </>
      ) : (
        <h2>Pagamento realizado com sucesso!</h2>
      )}
    </div>
  );
}

export default App;
