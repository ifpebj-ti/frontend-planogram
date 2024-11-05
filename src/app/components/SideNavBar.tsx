"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaFileImport, FaCog, FaSignOutAlt } from 'react-icons/fa'; // ícones do react-icons

import '../styles/SideNavBar.css';

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidenav ${isOpen ? 'expanded' : ''}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
      <img
          src={isOpen ? '/assets/images/logo.png' : '/assets/images/logo2.png'}
          alt="Menu Toggle Icon"
          width="90%"
          height="70%"
        />
      </button>
      <div className="menu-content">
        <div className="menu-item">
          <Link href="/">
          <FaHome size={24} className="icon" />
            {isOpen && <span>Início</span>}
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/importar">
          <FaFileImport size={24} className="icon" />
            {isOpen && <span>Importar</span>}
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/configuracoes">
          <FaCog size={24} className="icon" />
            {isOpen && <span>Configurações</span>}
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/sair">
          <FaSignOutAlt size={24} className="icon" />
            {isOpen && <span>Sair</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}
