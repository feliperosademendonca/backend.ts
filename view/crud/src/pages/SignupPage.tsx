// src/pages/SignupPage.tsx
import React, { useState } from 'react';

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica de cadastro (exemplo de console log)
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div className="">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

// Exportando como exportação padrão
export default SignupPage;
