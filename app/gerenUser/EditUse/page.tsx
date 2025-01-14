'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import './style.css';
import SideNavBar from '../../components/SideNavBar';
import { FaRegCopyright, FaSave } from 'react-icons/fa';
import DSideNavBar from '../../components/NavBarAdmin';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

export default function EditUse() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [name, setName] = useState(searchParams.get('name') || '');
  const [email, setEmail] = useState(searchParams.get('email') || '');
  const [role, setRole] = useState(searchParams.get('role') || 'Comum');

  const handleSave = () => {
    alert('Dados salvos com sucesso!');
    router.push('/gerenUser'); 
  };

  return (
    <div className="container">
      <DSideNavBar/>
      <div className="content">
        <button className="back-button" onClick={() => router.back()}>
        <IoIosArrowDropleftCircle className='back-icon'/> Voltar
        </button>
        <h1>Editar Usuário</h1>
        <form>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Tipo de Usuário:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Comum">Comum</option>
              <option value="ADM">ADM</option>
            </select>
          </div>
          <button type="button" className="save-button" onClick={handleSave}>
            <FaSave className='buttonS'/> Salvar
          </button>
        </form>
        <footer className="footer">
        <FaRegCopyright className='iconf' />Todos os direitos reservados - Versão 1.0
        </footer>
      </div>
      
    </div>
  );
}

