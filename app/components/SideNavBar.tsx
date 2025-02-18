"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaFileImport, FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import "../styles/SideNavBar.css";

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserRole(parsedUser.nivel_de_acesso);
    }
  }, []);

  return (
    <div className={`sidenav ${isOpen ? "expanded" : ""}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={isOpen ? "/assets/images/logo.png" : "/assets/images/logo2.png"}
          alt="Menu Toggle Icon"
          width={isOpen ? 180 : 50}
          height={isOpen ? 160 : 50}
        />
      </button>
      <div className="menu-content">
        <div className="menu-item">
          <Link href="/estantes">
            <FaHome size={24} className="icon" />
            <span className={isOpen ? "show-text" : "hide-text"}>Início</span>
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/importar">
            <FaFileImport size={24} className="icon" />
            <span className={isOpen ? "show-text" : "hide-text"}>Importar</span>
          </Link>
        </div>

        {userRole === "admin" && (
          <div className="menu-item">
            <Link href="/gerenUser">
              <IoPerson size={24} className="icon" />
              <span className={isOpen ? "show-text" : "hide-text"}>Perfil</span>
            </Link>
          </div>
        )}

        <div className="menu-item">
          <Link href="/configuracao">
            <FaCog size={24} className="icon" />
            <span className={isOpen ? "show-text" : "hide-text"}>
              Configurações
            </span>
          </Link>
        </div>
        <div className="menu-item">
          <Link href="/sair">
            <FaSignOutAlt size={24} className="icon" />
            <span className={isOpen ? "show-text" : "hide-text"}>Sair</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
