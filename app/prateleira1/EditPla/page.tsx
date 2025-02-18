"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams,  useRouter  } from "next/navigation";
import "./style.css";
import Button from "../../components/Button/Button";
import SideNavBar from "../../components/SideNavBar";
import ButtonV from "../../components/ButtonVisual/ButtonV";
import TabelaA from "../../components/TabelaAdd/TabelaAdd"; 
import { api } from "../../services/api";
import { FaTrash } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Footer from "../../components/Footer/Footer";

interface Category {
  id: number;
  nome: string;
}

export default function EditarPrateleira() {
  return (
    <Suspense fallback={<p>🔄 Carregando edição da prateleira...</p>}>
      <EditarPrateleiraContent />
    </Suspense>
  );
}

function EditarPrateleiraContent() {
  const searchParams = useSearchParams();
  const prateleiraId = searchParams.get("id");
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [isTabelaOpen, setIsTabelaOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get<Category[]>(`categories`);
        console.log("📦 Categorias carregadas:", response);
        const totalSlots = 20; 
        const filledSlots = response.length;

        const emptySlots = Array(Math.max(0, totalSlots - filledSlots)).fill({
          id: -1,
          nome: "empty",
        });

        setCategories([...response, ...emptySlots]);
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

  const removerCategoria = async (categoryId: number) => {
    if (categoryId === -1) return; 
  
    try {
      await api.delete(`categories/${categoryId}`);
      
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== categoryId)
      );
  
      console.log("🗑 Categoria removida com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao remover categoria:", error);
    }
  };
  


  const limparPratileira = async () => {
    try {
      await Promise.all(
        categories.map(async (category) => {
          if (category.nome !== "empty") {
            await api.delete(`categories/${category.id}`);
          }
        })
      );
  
      setCategories((prevCategories) =>
        prevCategories.map(() => ({ id: -1, nome: "empty" })) 
      );
  
      console.log("🧹 Todos os slots foram removidos!");
    } catch (error) {
      console.error("❌ Erro ao limpar os slots:", error);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await api.get<Category[]>(`categories`);
      console.log("📦 Categorias carregadas:", response);
  
      
      const totalSlots = 20;
      const filledSlots = response.length;
  
      const emptySlots = Array.from({ length: Math.max(0, totalSlots - filledSlots) }, (_, index) => ({
        id: -(index + 1), 
        nome: "empty",
      }));
  
      setCategories([...response, ...emptySlots]); 
    } catch (error) {
      console.error("❌ Erro ao buscar categorias:", error);
    }
  };
  
  

  return (
    <div className="container">
      <SideNavBar />

      <div className="content">
        <button className="back-button" onClick={() => router.back()}>
          <IoIosArrowDropleftCircle className="back-icon" /> Voltar
        </button>
        <h1>Editar Prateleira</h1>

        <div className="centro">
          <div className="pratileira">
            <div
              style={{
                width: "500px",
                height: "600px",
                backgroundImage: `url('/estante.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                padding: "5%",
              }}>
              <div className="category-buttons-container">
                {categories.map((category, index) => (
                  <Button
                    key={`category-${category.id !== -1 ? category.id : `empty-${index}`}`}
                    textobotao={category.nome === "empty" ? "+" : <FaTrash color="red" />}
                    corDeFundo={category.nome === "empty" ? "#CCCCCC" : "#A8F0A4"}
                    pressione={() => (category.nome === "empty" ? abrirTabela(category.id) : removerCategoria(category.id))}
                  />
                
                ))}
              </div>
            </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                backgroundColor: "#EFF0F0",
                padding: "20px",
              }}
            >
            <div className="botao-limpar">
              <ButtonV label="Limpar" onClick={limparPratileira} />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      {isTabelaOpen && <TabelaA onClose={() => setIsTabelaOpen(false)} categoryId={selectedCategoryId} />}
    </div>
  );
}










