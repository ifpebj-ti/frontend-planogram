"use client";

import { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import "./styles.css";
import SideNavBar from "../components/SideNavBar";
import { api } from "../services/api";
import Footer from "../components/Footer/Footer";

export default function Configuracoes() {
  const storedUser = localStorage.getItem("user");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const userId = userData?.id || null;

  const [nomeEditado, setNomeEditado] = useState(userData?.nome || "");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [editando, setEditando] = useState(false);
  const [loading, setLoading] = useState(false);

  const ativarEdicao = () => {
    setEditando(true);
  };

  const salvarNome = async () => {
    if (!nomeEditado) {
      alert("O nome não pode estar vazio!");
      return;
    }

    if (!userId) {
      alert("Erro ao encontrar usuário. Faça login novamente.");
      return;
    }

    setLoading(true);

    try {
      console.log("📝 Atualizando nome do usuário ID:", userId);

      await api.updateUser(userId, { nome: nomeEditado });

      // Atualiza o nome salvo no localStorage
      localStorage.setItem("user", JSON.stringify({ ...userData, nome: nomeEditado }));

      setEditando(false);
      alert("✅ Nome atualizado com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao atualizar o nome:", error);
      alert("Erro ao atualizar o nome.");
    } finally {
      setLoading(false);
    }
  };

  const alterarSenha = async () => {
    if (!senhaAtual || !novaSenha) {
      alert("Preencha os campos corretamente!");
      return;
    }

    if (!userId) {
      alert("Erro ao encontrar usuário.");
      return;
    }

    setLoading(true);

    try {
      console.log("🔑 Alterando senha do usuário ID:", userId);

      await api.put(`users/${userId}/change-password`, {
        senhaAtual,
        novaSenha,
      });

      alert("✅ Senha alterada com sucesso!");
      setSenhaAtual("");
      setNovaSenha("");
    } catch (error) {
      console.error("❌ Erro ao alterar senha:", error);
      alert("Erro ao alterar senha.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <SideNavBar />
      <main className="content">
        <h1>Configurações</h1>

        <div className="card">
          <div className="section">
            <h2>Alterar Nome:</h2>
            <div className="input-group">
              <input
                type="text"
                value={nomeEditado}
                readOnly={!editando}
                onChange={(e) => setNomeEditado(e.target.value)}
                className={`input ${editando ? "editable" : ""}`}
              />
              <button className="icon-button" onClick={ativarEdicao}>
                <FaEdit size={20} />
              </button>
            </div>
            <button
              className="save-button"
              onClick={salvarNome}
              disabled={!editando || loading}
            >
              <FaSave />
              {loading ? "Salvando..." : "Salvar"}
            </button>
          </div>

          <div className="section">
            <h2>Alterar Senha:</h2>
            <form>
              <div className="form-group">
                <label>Senha Atual:</label>
                <input
                  type="password"
                  value={senhaAtual}
                  onChange={(e) => setSenhaAtual(e.target.value)}
                  placeholder="Digite sua senha atual"
                />
              </div>
              <div className="form-group">
                <label>Nova Senha:</label>
                <input
                  type="password"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  placeholder="Digite sua nova senha"
                />
              </div>
              <button
                type="button"
                className="save-button"
                onClick={alterarSenha}
                disabled={loading}
              >
                <FaSave />
                {loading ? "Salvando..." : "Salvar"}
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}


