// src/components/Payment.js
import React from 'react';

function Payment({ amount, onPaymentSuccess }) {
  const handlePayment = () => {
    // Lógica para processar pagamento
    onPaymentSuccess();
  };

  return (
    <div>
      <h2>Pagamento</h2>
      <p>Total: R$ {amount}</p>
      <button onClick={handlePayment}>Pagar</button>
    </div>
  );
}

export default Payment;


