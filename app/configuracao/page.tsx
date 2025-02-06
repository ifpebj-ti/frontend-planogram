"use client";

import { FaEdit, FaRegCopyright, FaSave } from "react-icons/fa";
import "./styles.css";
import SideNavBar from "../components/SideNavBar";
import { useState, useEffect } from "react";
import { api } from "../services/api"; 

interface User {
  id: number;
  nome: string;
  email: string;
  nivel_de_acesso: string;
}

export default function Configuracoes() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [nomeEditado, setNomeEditado] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [editando, setEditando] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          console.error("Nenhum usuário encontrado no localStorage.");
          return;
        }
  
        const user = JSON.parse(storedUser);
        if (!user.id) {
          console.error("⚠️ ID do usuário não encontrado no localStorage.");
          return;
        }
  
        console.log("Buscando usuário pelo ID:", user.id);
  
        
        const userData = await api.get<User>(`users/${user.id}`);
        
        setNomeUsuario(userData.nome);
        setNomeEditado(userData.nome);
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário:", error);
      }
    };
  
    fetchUserData();
  }, []);
  
  

  const ativarEdicao = () => {
    setEditando(true);
  };

  const salvarNome = async () => {
    if (!nomeEditado) {
      alert("O nome não pode estar vazio!");
      return;
    }
  
    setLoading(true);
  
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        console.error("Usuário não encontrado no localStorage.");
        alert("Erro ao encontrar usuário.");
        return;
      }
  
      const user = JSON.parse(storedUser);
      if (!user.id) {
        console.error("ID do usuário não encontrado.");
        alert("Erro ao encontrar ID do usuário.");
        return;
      }
  
      console.log("Atualizando nome do usuário com ID:", user.id);
  
      await api.updateUser(user.id, { nome: nomeEditado });
  
      setNomeUsuario(nomeEditado);
      setEditando(false);
      alert("Nome atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o nome:", error);
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

    setLoading(true);

    try {
      await api.put("users/me/change-password", {
        senhaAtual,
        novaSenha,
      }); 
      alert("Senha alterada com sucesso!");
      setSenhaAtual("");
      setNovaSenha("");
    } catch (error) {
      console.error("Erro ao alterar senha:", error);
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
            <h2>Alterar dados pessoais:</h2>
            <div className="input-group">
              <input
                type="text"
                value={editando ? nomeEditado : nomeUsuario}
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
            <h2>Alterar senha:</h2>
            <form>
              <div className="form-group">
                <label>Nova senha:</label>
                <input
                  type="password"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  placeholder="Digite sua nova senha"
                />
              </div>
              <div className="form-group">
                <label>Senha atual:</label>
                <input
                  type="password"
                  value={senhaAtual}
                  onChange={(e) => setSenhaAtual(e.target.value)}
                  placeholder="Digite sua senha atual"
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

        <footer className="footer">
          <FaRegCopyright />
          Todos os direitos reservados - Versão 1.0
        </footer>
      </main>
    </div>
  );
}


