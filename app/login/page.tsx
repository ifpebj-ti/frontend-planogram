"use client";

import { useState } from "react";
import "./style.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image"></div>
        <div className="login-content">
          <div className="login-header">
          </div>
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
          </form>
          <a href="#" className="forgot-password">Esqueceu a senha?</a>

        </div>
      </div>
      <footer className="login-footer">
        &copy; Todos os direitos reservados - Versão 1.0
      </footer>
    </div>
  );
}
