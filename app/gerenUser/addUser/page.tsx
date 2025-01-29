'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import './style.css';
import DSideNavBar from '../../components/NavBarAdmin';
import { FaRegCopyright, FaSave } from 'react-icons/fa';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

export default function AddUser() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Comum');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    alert('Usuário adicionado com sucesso!');
    router.push('/gerenUser');
  };

  return (
    <div className="container">
      <DSideNavBar />
      <div className="content">
        <button className="back-button" onClick={() => router.back()}>
          <IoIosArrowDropleftCircle className="back-icon" /> Voltar
        </button>
        <h1>Adicionar novo usuário</h1>
        <form>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o email"
            />
          </div>
          <div className="form-group">
            <label>Tipo de Usuário:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Comum">Comum</option>
              <option value="ADM">ADM</option>
            </select>
          </div>
          <div className="form-group">
            <label>Telefone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Digite o telefone"
            />
          </div>
          <button type="button" className="save-button" onClick={handleSave}>
            <FaSave className="buttonS" /> Salvar
          </button>
        </form>
        <footer className="footer">
          <FaRegCopyright className="iconf" />
          Todos os direitos reservados - Versão 1.0
        </footer>
      </div>
    </div>
  );
}
