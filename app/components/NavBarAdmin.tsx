"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaFileImport, FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import "../styles/SideNavBar.css";

export default function DSideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidenav ${isOpen ? "expanded" : ""}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
      <Image
        src={isOpen ? "/assets/images/logo.png" : "/assets/images/logo2.png"}
        alt="Menu Toggle Icon"
        width={isOpen ? 200 : 110} 
        height={isOpen ? 150 : 90} 
        style={{
          transition: "all 0.3s ease-in-out", // Transição suave ao mudar de tamanho
        }}
      />

      </button>
      <div className="menu-content">
        <div className="menu-item">
          <Link href="/">
            <FaHome size={24} className="icon" />
            <span className={isOpen ? "visible" : "hidden"}>Início</span>
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/importar">
            <FaFileImport size={24} className="icon" />
            <span className={isOpen ? "visible" : "hidden"}>Importar</span>
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/gerenUser">
            <IoPerson size={24} className="icon" />
            <span className={isOpen ? "visible" : "hidden"}>Perfil</span>
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/configuracao">
            <FaCog size={24} className="icon" />
            <span className={isOpen ? "visible" : "hidden"}>Configurações</span>
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/sair">
            <FaSignOutAlt size={24} className="icon" />
            <span className={isOpen ? "visible" : "hidden"}>Sair</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
