"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import "./styles.css";
import SideNavBar from "../components/SideNavBar";
import { CiImport } from "react-icons/ci";
import { FaArrowDown, FaRegCopyright } from "react-icons/fa";
import { api } from "../services/api";

export default function Importar() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter(); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); 
    }
  }, [router]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("❌ Nenhum arquivo selecionado.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("planilha", file);

    try {
      console.log("📡 Enviando arquivo:", file.name);
      const token = localStorage.getItem("token");

      if (!token) {
        alert("❌ Usuário não autenticado. Faça login novamente.");
        router.push("/login"); 
        return;
      }

      const response = await fetch("http://localhost:8080/produtos/upload-planilha", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar arquivo: ${response.statusText}`);
      }

      const result = await response.json();
      alert(`✅ Arquivo "${file.name}" enviado com sucesso!`);
      console.log("📡 Resposta do backend:", result);

      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("❌ Erro ao enviar arquivo:", error);
      alert("Erro ao enviar o arquivo. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFile(null);
  };

  return (
    <div className="container">
      <SideNavBar />

      <main className="content">
        <FaArrowDown style={{ width: "100px", height: "200px", color: "#21557A" }} />
        <p>
          Selecione o arquivo XML com as informações referentes ao movimento de produtos do seu estoque.
        </p>

        <div className="upload-container">
          <div className="file-input">
            <label htmlFor="fileUpload" className="importar-file-label">
              Selecionar arquivo XML
            </label>
            <input
              ref={fileInputRef}
              id="fileUpload"
              type="file"
              accept=".xlsx"
              onChange={handleFileChange}
            />
            {file ? <span className="file-name">{file.name}</span> : <span className="file-name">Nenhum arquivo selecionado</span>}
          </div>

          <div className="button-group">
            <button className="cancel-button" onClick={handleCancel} disabled={loading}>
              Cancelar
            </button>
            <button className="upload-button" onClick={handleUpload} disabled={loading}>
              {loading ? "Enviando..." : "Fazer Upload"}
            </button>
          </div>
        </div>

        <footer className="footer">
          <FaRegCopyright />Todos os direitos reservados - Versão 1.0
        </footer>
      </main>
    </div>
  );
}


