"use client"; 
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import { api } from "../services/api";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Token enviado para seu e-mail!");
      router.push("/recuperarSenha/resetSenha"); 
    } catch {
      setError("Erro ao enviar o e-mail. Tente novamente.");
    }
  };

  const handleVoltar = () => {
    router.push("/login");
  };

  return (
    <div className="recuperar-senha-container">
      <div className="recuperar-senha-card">
        <div className="recuperar-senha-image"></div>
        <div className="recuperar-senha-content">
          <h2 className="recuperar-senha-title">Esqueceu a senha?</h2>
          <p className="recuperar-senha-subtext">
            Insira seu e-mail para recuperar a senha de acesso da sua conta
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
            <div className="button-group">
              <button type="button" className="btn btn-secondary" onClick={handleVoltar}>
                Voltar
              </button>
              <button type="submit" className="btn btn-primary">Enviar</button>
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
