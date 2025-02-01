"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./style.css";
import DSideNavBar from "../../components/NavBarAdmin";
import { FaRegCopyright, FaSave } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { api } from "../../services/api";

export default function AddUser() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nivelDeAcesso, setNivelDeAcesso] = useState("common");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({ nome: false, email: false, senha: false });

  const validateFields = () => {
    const errors = {
      nome: nome.trim() === "",
      email: email.trim() === "",
      senha: senha.trim().length < 6, 
    };
    setFieldErrors(errors);
    return !Object.values(errors).includes(true);
  };

  const handleSave = async () => {
    setError("");

    if (!validateFields()) {
      setError("Preencha todos os campos corretamente antes de salvar.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        nome,
        email,
        senha,
        nivel_de_acesso: nivelDeAcesso,
      };

      console.log("Enviando payload:", payload); 

      await api.post("users", payload);

      alert("Usuário adicionado com sucesso!");
      router.push("/gerenUser");
    } catch (error: any) {
      console.error("Erro ao adicionar usuário:", error.message);
      setError(`Erro ao adicionar usuário: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <DSideNavBar />
      <div className="content">
        <button className="back-button" onClick={() => router.back()}>
          <IoIosArrowDropleftCircle className="back-icon" /> Voltar
        </button>
        <h1>Adicionar novo usuário</h1>
        
        {error && <p className="text-red-500 font-bold">{error}</p>}

        <form>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome"
              className={`input ${fieldErrors.nome ? "border-red-500" : ""}`}
            />
            {fieldErrors.nome && <p className="text-red-500">Nome é obrigatório.</p>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o email"
              className={`input ${fieldErrors.email ? "border-red-500" : ""}`}
            />
            {fieldErrors.email && <p className="text-red-500">Email é obrigatório.</p>}
          </div>

          <div className="form-group">
            <label>Tipo de Usuário:</label>
            <select value={nivelDeAcesso} onChange={(e) => setNivelDeAcesso(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="common">Comum</option>
            </select>
          </div>

          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite a senha (mín. 6 caracteres)"
              className={`input ${fieldErrors.senha ? "border-red-500" : ""}`}
            />
            {fieldErrors.senha && <p className="text-red-500">A senha deve ter pelo menos 6 caracteres.</p>}
          </div>

          <button
            type="button"
            className="save-button"
            onClick={handleSave}
            disabled={loading}
          >
            <FaSave className="buttonS" /> {loading ? "Salvando..." : "Salvar"}
          </button>
        </form>

        <footer className="footer">
          <FaRegCopyright className="iconf" /> Todos os direitos reservados - Versão 1.0
        </footer>
      </div>
    </div>
  );
}





