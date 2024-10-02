// src/components/InvitationForm.js
import React, { useState } from 'react';

function InvitationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nome do Evento" onChange={handleChange} required />
      <input type="date" name="date" onChange={handleChange} required />
      <input type="text" name="location" placeholder="Local" onChange={handleChange} required />
      <button type="submit">Criar Convite</button>
    </form>
  );
}

export default InvitationForm;
