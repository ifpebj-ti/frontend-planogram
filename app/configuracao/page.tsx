"use client";

import { useEffect, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import "./styles.css";
import SideNavBar from "../components/SideNavBar";
import { api } from "../services/api";
import Footer from "../components/Footer/Footer";

export default function Configuracoes() {
  const [userData, setUserData] = useState<{ id: number; nome: string } | null>(null);
  const [nomeEditado, setNomeEditado] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [editando, setEditando] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
        setNomeEditado(parsedUser.nome);
      }
    }
  }, []);

  const ativarEdicao = () => {
    setEditando(true);
  };

  const salvarNome = async () => {
    if (!nomeEditado) {
      alert("O nome não pode estar vazio!");
      return;
    }

    if (!userData?.id) {
      alert("Erro ao encontrar usuário. Faça login novamente.");
      return;
    }

    setLoading(true);

    try {
      console.log("📝 Atualizando nome do usuário ID:", userData.id);
      await api.updateUser(userData.id, { nome: nomeEditado });

      // Atualiza o nome salvo no localStorage
      const updatedUser = { ...userData, nome: nomeEditado };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setUserData(updatedUser);
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

    if (!userData?.id) {
      alert("Erro ao encontrar usuário.");
      return;
    }

    setLoading(true);

    try {
      console.log("🔑 Alterando senha do usuário ID:", userData.id);
      await api.put(`users/${userData.id}/change-password`, {
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

