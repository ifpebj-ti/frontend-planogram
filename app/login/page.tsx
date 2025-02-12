"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import { api } from "../services/api";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const token = await api.login(email, password);

    if (token) {
      alert("Login bem-sucedido!");
      router.push("/estantes"); 
    } else {
      setError("Erro no login. Verifique suas credenciais.");
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image"></div>
        <div className="login-content">
          <h2 className="login-title">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
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
          <Link href="/recuperarSenha" className="forgot-password">
            Esqueceu a senha?
          </Link>
        </div>
      </div>
      <footer className="login-footer">
        &copy; Todos os direitos reservados - Versão 1.0
      </footer>
    </div>
  );
}
