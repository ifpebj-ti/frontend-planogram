'use client';
import React, { useState } from 'react';
import './style.css';
import SideNavBar from '../components/SideNavBar';

export default function GerenciarUsuarios() {
  const [search, setSearch] = useState('');
  const users = [
    { id: 1, role: 'Usuário Comum', name: 'Ana Violeta Rocha Santos' },
    { id: 2, role: 'Usuário ADM', name: 'Anderson Victor Silva' },
    { id: 3, role: 'Usuário Comum', name: 'Ana Violeta Rocha Santos' },
    { id: 4, role: 'Usuário ADM', name: 'Anderson Victor Silva' },
    { id: 5, role: 'Usuário Comum', name: 'Ana Violeta Rocha Santos' },
    { id: 6, role: 'Usuário ADM', name: 'Anderson Victor Silva' },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
    <SideNavBar/>
      <h1>Gerenciar Usuários</h1>
      
      <div className="header-actions">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar usuário"
            value={search}
            onChange={handleSearch}
          />
          <button className="search-button">🔍</button>
        </div>
        <button className="add-user-button">+ Adicionar Usuário</button>
      </div>

      <ul className="user-list">
        {filteredUsers.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-info">
              <span className="user-role">{user.role}</span>
              <span className="user-name">{user.name}</span>
            </div>
            <div className="user-actions">
              <button className="view-button">👁️ Visualizar</button>
              <button className="edit-button">✏️ Editar</button>
              <button className="delete-button">🗑️ Excluir</button>
            </div>
          </li>
        ))}
      </ul>

      <footer className="footer">
        Todos os direitos reservados - Versão 1.0
      </footer>
    </div>
  );
}
