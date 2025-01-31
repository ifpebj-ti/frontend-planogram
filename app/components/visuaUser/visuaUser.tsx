"use client";
import React from "react";
import "./style.css";

interface ModalUsuarioProps {
  isOpen: boolean;
  user: { nome: string; email: string; nivel_de_acesso: string } | null;
  onClose: () => void;
}

export default function VisuaUser({ isOpen, user, onClose }: ModalUsuarioProps) {
  if (!isOpen || !user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Visualizar usuário</h2>
        <p><strong>Nome:</strong> {user.nome}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Tipo de usuário:</strong> {user.nivel_de_acesso}</p>
        <button className="ok-button" onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

