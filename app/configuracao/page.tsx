'use client'; 
import { FaEdit, FaRegCopyright, FaSave } from "react-icons/fa";
import "./styles.css"; // Importando o CSS
import SideNavBar from "../components/SideNavBar";
import { useState } from "react";

export default function Configuracoes() {

  const [nomeUsuario, setNomeUsuario] = useState("Maria Lima dos Santos");
  const [nomeEditado, setNomeEditado] = useState(nomeUsuario);
  const [editando, setEditando] = useState(false);

  // Função para ativar o modo de edição
  const ativarEdicao = () => {
    setEditando(true);
  };

  // Função para salvar o nome atualizado na API
  const salvarNome = async () => {
    try {
      // Envia o nome para a API
      const response = await fetch("/api/salvar-nome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome: nomeEditado }),
      });

      if (response.ok) {
        alert("Nome salvo com sucesso!");
        setNomeUsuario(nomeEditado); // Atualiza o nome exibido
        setEditando(false); // Sai do modo de edição
      } else {
        alert("Erro ao salvar o nome!");
      }
    } catch (error) {
      console.error("Erro ao salvar o nome:", error);
      alert("Erro ao salvar o nome!");
    }
  };
  return (
    <div className="container">
      <SideNavBar/>
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
          </div>

          {/* Alterar Senha */}
          <div className="section">
            <h2>Alterar senha:</h2>
            <form>
              <div className="form-group">
                <label>Nova senha:</label>
                <input type="password" placeholder="Digite sua nova senha" />
              </div>
              <div className="form-group">
                <label>Senha atual:</label>
                <input type="password" placeholder="Digite sua senha atual" />
              </div>
              <button
                type="button"
                className="save-button"
                onClick={salvarNome}
                disabled={!editando} 
              >
                <FaSave />
                Salvar
              </button>
            </form>
          </div>
        </div>
        

        <footer className="footer">
          <FaRegCopyright />Todos os direitos reservados - Versão 1.0
        </footer>
      </main>
    </div>
  );
}
