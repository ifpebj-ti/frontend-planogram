"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

export default function resetSenha() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
     // fake API para redefinição de senha 
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Senha redefinida com sucesso!");
      router.push("/login");
    } catch {
      setError("Erro ao redefinir a senha. Verifique os dados informados.");
    }
  };

  const handleVoltar = () => {
    router.push("/recuperarSenha");
  };

  return (
    <div className="recuperar-senha-container">
      <div className="recuperar-senha-card">
        <div className="recuperar-senha-image"></div>
        <div className="recuperar-senha-content">
          <h2 className="recuperar-senha-title">Recuperação de senha</h2>
          <p className="recuperar-senha-subtext">
            Insira seu e-mail, o token de acesso e sua nova senha para continuar.
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="recuperar-senha-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="token">Token de acesso</label>
            <input
              type="text"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />

            <label htmlFor="newPassword">Nova senha</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <div className="button-group">
              <button type="button" className="btn btn-secondary" onClick={handleVoltar}>
                Voltar
              </button>
              <button type="submit" className="btn btn-primary">Salvar</button>
            </div>
          </form>
        </div>
      </div>
      <footer className="recuperar-senha-footer">
        &copy; Todos os direitos reservados - Versão 1.0
      </footer>
    </div>
  );
}