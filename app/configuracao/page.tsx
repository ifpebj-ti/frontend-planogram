"use client";

import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import "./styles.css";
import SideNavBar from "../components/SideNavBar";
import { api } from "../services/api";
import Footer from "../components/Footer/Footer";

export default function Configuracoes() {
  const [userData, setUserData] = useState<{ id: number; nome: string } | null>(null);
  const [nomeEditado, setNomeEditado] = useState<string>(""); 
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
  
      console.log("🔍 Dados brutos do localStorage:", storedUser); 
  
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          console.log("✅ Usuário parseado:", parsedUser); 
  
          if (parsedUser && parsedUser.id) {
            setUserData(parsedUser);
            setNomeEditado(parsedUser.nome || ""); 
          } else {
            console.error("🚨 Usuário sem ID válido:", parsedUser);
            alert("Erro ao carregar usuário. Faça login novamente.");
          }
        } catch (error) {
          console.error("🚨 Erro ao parsear usuário do localStorage:", error);
          alert("Erro ao recuperar dados do usuário. Faça login novamente.");
        }
      } else {
        console.warn("⚠ Nenhum usuário encontrado no localStorage.");
        alert("Usuário não autenticado. Faça login novamente.");
      }
    }
  }, []);
  
  

  const atualizarNome = async () => {
    if (!userData?.id) {
      alert("Erro: Usuário não encontrado. Faça login novamente.");
      return;
    }
  
    if (!nomeEditado.trim()) {
      alert("O nome não pode estar vazio.");
      return;
    }
  
    setLoading(true);
    try {
      console.log("📝 Atualizando nome do usuário ID:", userData.id);
      await api.updateUser(userData.id, { nome: nomeEditado });
  
      const updatedUser = { ...userData, nome: nomeEditado };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUserData(updatedUser);
  
      alert("✅ Nome atualizado com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao atualizar nome:", error);
      alert("Erro ao atualizar nome. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };
  

  const alterarSenha = async () => {
    if (!novaSenha.trim() || !confirmarSenha.trim()) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    if (novaSenha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!userData?.id) {
      alert("Erro ao encontrar usuário.");
      return;
    }

    setLoading(true);
    try {
      console.log("🔑 Alterando senha do usuário ID:", userData.id);
      await api.updateUser(userData.id, {
        senha: novaSenha,
        confirmarSenha,
      });

      alert("✅ Senha alterada com sucesso!");
      setNovaSenha("");
      setConfirmarSenha("");
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
                value={nomeEditado || ""}
                onChange={(e) => setNomeEditado(e.target.value)} 
                className="input"
              />
              <button
                className="save-button"
                onClick={atualizarNome}
                disabled={loading}
              >
                <FaSave /> {loading ? "Salvando..." : "Salvar"}
              </button>
            </div>
          </div>

          <div className="section">
            <h2>Alterar Senha:</h2>
            <form>
              <div className="form-group">
                <label>Nova Senha:</label>
                <input
                  type="password"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  placeholder="Digite sua nova senha"
                />
              </div>
              <div className="form-group">
                <label>Confirmar Nova Senha:</label>
                <input
                  type="password"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  placeholder="Confirme sua nova senha"
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
