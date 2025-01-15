"use client";
import React from "react";
import "./style.css";

interface ModalUsuarioProps {
  isOpen: boolean;
  user: { name: string; email: string; role: string } | null;
  onClose: () => void;
}

export default function visuaUser({ isOpen, user, onClose }: ModalUsuarioProps) {
  if (!isOpen || !user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Visualizar usuário</h2>
        <p>
          <strong>Nome:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Tipo de usuário:</strong> {user.role}
        </p>
        <button className="ok-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}
