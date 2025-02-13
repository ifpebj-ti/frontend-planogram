"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

export default function ResetSenha() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("❌ As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/users/recuperar-senha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          novaSenha: newPassword,
          confirmarSenha: confirmPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao redefinir a senha. Verifique os dados informados.");
      }

      alert("✅ Senha redefinida com sucesso!");
      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
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
          <h2 className="recuperar-senha-title">Recuperação de senha</h2>
          <p className="recuperar-senha-subtext">
            Insira seu e-mail e sua nova senha para continuar.
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
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Salvando..." : "Salvar"}
              </button>
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
