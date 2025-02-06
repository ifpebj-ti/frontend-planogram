"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, Suspense } from "react";
import "./style.css";
import { FaRegCopyright, FaSave } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { api } from "../../services/api";
import SideNavBar from "../../components/SideNavBar";

interface User {
  id: number;
  nome: string;
  email: string;
  nivel_de_acesso: string;
}

function EditUserComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Comum");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userId = searchParams.get("id");
    if (userId) {
      setId(userId);
    }
  }, [searchParams]);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const user: User = await api.get<User>(`users/${id}`);
          setName(user.nome);
          setEmail(user.email);
          setRole(user.nivel_de_acesso);
        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
          alert("Erro ao carregar os dados do usuário.");
        }
      };

      fetchUser();
    }
  }, [id]);

  const handleSave = async () => {
    if (!name || !email || !role) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      await api.updateUser(Number(id), {
        nome: name,
        email: email,
        nivel_de_acesso: role.toLowerCase(),
      });

      alert("Usuário atualizado com sucesso!");
      router.push("/gerenUser");
    } catch (error) {
      console.error("❌ Erro ao atualizar usuário:", error);
      alert("Erro ao atualizar usuário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <SideNavBar />
      <div className="content">
        <button className="back-button" onClick={() => router.back()}>
          <IoIosArrowDropleftCircle className="back-icon" /> Voltar
        </button>
        <h1>Editar Usuário</h1>
        <form>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Tipo de Usuário:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="common">Comum</option>
            </select>
          </div>
          <button type="button" className="save-button" onClick={handleSave} disabled={loading}>
            <FaSave className="buttonS" /> {loading ? "Salvando..." : "Salvar"}
          </button>
        </form>
        <footer className="footer">
          <FaRegCopyright className="iconf" />
          Todos os direitos reservados - Versão 1.0
        </footer>
      </div>
    </div>
  );
}

export default function EditUserPage() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <EditUserComponent />
    </Suspense>
  );
}

