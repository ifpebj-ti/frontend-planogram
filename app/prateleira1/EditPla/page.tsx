"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import Button from "../../components/Button/Button";
import SideNavBar from "../../components/SideNavBar";
import ButtonV from "../../components/ButtonVisual/ButtonV";
import TabelaA from "../../components/TabelaAdd/TabelaAdd";
import { api } from "../../services/api";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Footer from "../../components/Footer/Footer";

interface Category {
  id: number;
  nome: string;
}

export default function EditarPratileira() {
  return (
    <Suspense fallback={<p>🔄 Carregando edição da prateleira...</p>}>
      <EditarPratileiraContent />
    </Suspense>
  );
}

function EditarPratileiraContent() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [isTabelaOpen, setIsTabelaOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get<Category[]>("categories");
        console.log("📦 Categorias carregadas:", response);
        setCategories(response);
      } catch (error) {
        console.error("❌ Erro ao buscar categorias:", error);
      }
    };

    fetchCategories();
  }, []);

  const abrirTabela = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    setIsTabelaOpen(true);
  };

  return (
    <div className="container">
      <SideNavBar />

      <main className="content">
        <button className="back-button" onClick={() => router.back()}>
          <IoIosArrowDropleftCircle className="back-icon" /> Voltar
        </button>
        <h1>Editar Prateleira</h1>

        <div className="centro">
          <div className="pratileira">
            <div
              style={{
                width: '470px',
                height: '520px',
                backgroundImage: `url('/estante.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                padding: '5%',
              }}
            >
              <div className="category-container">
                <div className="category-buttons-container">
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <Button
                        key={category.id}
                        textobotao={category.nome}
                        corDeFundo="#A8F0A4"
                        pressione={() => abrirTabela(category.id)}
                      />
                    ))
                  ) : (
                    <p style={{ color: "red" }}>Nenhuma categoria encontrada.</p>
                  )}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                backgroundColor: "#EFF0F0",
                padding: "10px",
              }}
            >
              <div className="button-clear">
                <ButtonV label="Limpar" onClick={() => console.log("Limpar")} />
              </div>
            </div>
          </div>
          <Footer/>
        </div>
       
      </main>

      {isTabelaOpen && <TabelaA onClose={() => setIsTabelaOpen(false)} categoryId={selectedCategoryId} />}
    </div>
  );
}










