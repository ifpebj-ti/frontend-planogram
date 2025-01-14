'use client';
import React, { useState } from 'react';
import './style.css';
import SideNavBar from '../components/SideNavBar';
import VisuaUser from '../components/visuaUser/visuaUser';
import { useRouter } from 'next/navigation';
import { FaRegCopyright } from 'react-icons/fa';

interface User {
  id: number;
  role: string;
  name: string;
  email: string;
}

export default function GerenciarUsuarios() {
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // Corrigido o tipo do estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const users: User[] = [
    { id: 1, role: 'Usuário Comum', name: 'Ana Violeta Rocha Santos', email: 'ana.santos@gmail.com' },
    { id: 2, role: 'Usuário ADM', name: 'Anderson Victor Silva', email: 'anderson.silva@gmail.com' },
    { id: 3, role: 'Usuário Comum', name: 'Ana Violeta Rocha Santos', email: 'ana.santos@gmail.com' },
    { id: 4, role: 'Usuário ADM', name: 'Anderson Victor Silva', email: 'anderson.silva@gmail.com' },
    { id: 5, role: 'Usuário Comum', name: 'Ana Violeta Rocha Santos', email: 'ana.santos@gmail.com' },
    { id: 6, role: 'Usuário ADM', name: 'Anderson Victor Silva', email: 'anderson.silva@gmail.com' },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (user: User) => {
    setSelectedUser(user); // Agora aceita objetos do tipo User
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null); // O estado volta para null
    setIsModalOpen(false);
  };

  const handleEdit = (user: User) => {
    router.push(`/gerenUser/EditUse?id=${user.id}&name=${user.name}&email=${user.email}&role=${user.role}`);
  };

  return (
    <div className="container">
      <SideNavBar />
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
              <button className="view-button" onClick={() => openModal(user)}>👁️ Visualizar</button>
              <button className="edit-button" onClick={() => handleEdit(user)}>✏️ Editar</button>
              <button className="delete-button">🗑️ Excluir</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal de Visualização de Usuário */}
      <VisuaUser isOpen={isModalOpen} user={selectedUser} onClose={closeModal} />

      <footer className="footer">
        <FaRegCopyright className='iconf'/>Todos os direitos reservados - Versão 1.0
      </footer>
    </div>
  );
}

