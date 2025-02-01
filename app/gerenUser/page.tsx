"use client";

import React, { useState, useEffect } from "react";
import "./style.css";
import SideNavBar from "../components/SideNavBar";
import VisuaUser from "../components/visuaUser/visuaUser";
import { useRouter } from "next/navigation";
import { FaRegCopyright } from "react-icons/fa";
import { api } from "../services/api";

interface User {
  id: number;
  nivel_de_acesso: string;
  nome: string;
  email: string;
}

export default function GerenciarUsuarios() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await api.getUsers();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.nome.toLowerCase().includes(search.toLowerCase()) ||
      user.nivel_de_acesso.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (user: User) => {
    setSelectedUser(user); 
    setIsModalOpen(true);
  };
  

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleEdit = (user: User) => {
    router.push(`/gerenUser/editUse?id=${user.id}`); // Use "editUser" com minúsculas
  };

  const handleAddUser = () => {
    router.push("/gerenUser/addUser");
  };

  const handleDelete = async (id: number) => {
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
      const success = await api.deleteUser(id);
      if (success) {
        alert("Usuário excluído com sucesso!");
        setUsers(users.filter(user => user.id !== id)); // Remove usuário da lista sem recarregar
      } else {
        alert("Erro ao excluir usuário.");
      }
    }
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
        <button className="add-user-button" onClick={handleAddUser}>+ Adicionar Usuário</button>
      </div>

      <ul className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} className="user-item">
              <div className="user-info">
                <span className="user-role">{user.nivel_de_acesso}</span>
                <span className="user-name">{user.nome}</span>
              </div>
              <div className="user-actions">
                <button className="view-button" onClick={() => openModal(user)}>👁️ Visualizar</button>
                <button className="edit-button" onClick={() => handleEdit(user)}>✏️ Editar</button>
                <button className="delete-button" onClick={() => handleDelete(user.id)}>🗑️ Excluir</button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Nenhum usuário encontrado.</p>
        )}
      </ul>

      <VisuaUser isOpen={isModalOpen} user={selectedUser} onClose={closeModal} />

      <footer className="footer">
        <FaRegCopyright className="iconf" /> Todos os direitos reservados - Versão 1.0
      </footer>
    </div>
  );
}

