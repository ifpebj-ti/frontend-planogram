"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Head from "next/head";
import SideNavBar from "../components/SideNavBar";
import { useSearchParams, useRouter } from 'next/navigation';
import { api } from '../services/api';

import Button from '../components/Button/Button';
import IndicatorBox from '../components/IndicatorBox/IndicatorBox';
import LegendBox from '../components/LegendBox/LegendBox';
import ButtonV from '../components/ButtonVisual/ButtonV';
import TabelaV from '../components/TabelaV/TabelaV';
import TabelaS from '../components/TabelaSlot/TabelaS';

import './style.css';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Footer from '../components/Footer/Footer';

interface Category {
  id: number;
  nome: string;
  id_prateleira: number;
  saida: number; 
}


function PrateleiraContent() {
  const searchParams = useSearchParams();
  const prateleiraId = searchParams.get('id');
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<number | undefined>(undefined);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [tableData, setTableData] = useState<any[]>([]);
  const [shelfData, setShelfData] = useState<any[]>([]);
  const [isShelfTableOpen, setIsShelfTableOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prateleiraId) {
      const fetchCategories = async () => {
        try {
          const response = await api.get<{ categorias: Category[] }>(`users/1`);
          let updatedCategories = response.categorias.filter(cat => cat.id_prateleira === Number(prateleiraId));
  
          
          const categoriesWithSaida = await Promise.all(
            updatedCategories.map(async (category) => {
              try {
                const products = await api.get<{ produto: string; quantidade: number; saida: number }[]>(`produtos/categoria/${category.id}/detalhados`);
                
                
                const totalSaida = products.reduce((acc, item) => acc + item.saida, 0);
                
                return { ...category, saida: totalSaida };
              } catch (error) {
                console.error(`❌ Erro ao buscar produtos da categoria ${category.id}:`, error);
                return { ...category, saida: 0 };
              }
            })
          );
  
          setCategories(categoriesWithSaida);
        } catch (error) {
          console.error("Erro ao carregar categorias:", error);
        }
      };
      fetchCategories();
    }
  }, [prateleiraId]);
  

  const [totalProdutos, setTotalProdutos] = useState(0);

  useEffect(() => {
    const fetchTotalProdutos = async () => {
      try {
        const total = await api.getTotalProdutos(); 
        setTotalProdutos(total);
      } catch (error) {
        console.error("❌ Erro ao buscar total de produtos:", error);
      }
    };

    fetchTotalProdutos();
  }, []);


  const fetchProductsBySlot = async (slotId: number) => {
    setLoading(true);
    setSelectedSlot(slotId);
    try {
      const response = await api.get<{ produto: string; quantidade: number; saida: number }[]>(`produtos/categoria/${slotId}/detalhados`);

      if (!response || response.length === 0) {
        alert("Nenhum produto disponível neste slot.");
        return;
      }

      setTableData(response);
      setIsTableOpen(true);
    } catch (error) {
      alert("Erro ao carregar os produtos.");
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByShelf = async () => {
    if (!prateleiraId) return;

    setLoading(true);
    try {
      const response = await api.getProductsByShelf(Number(prateleiraId));

      if (!response || response.length === 0) {
        alert("Nenhum produto disponível nesta prateleira.");
        return;
      }

      setShelfData(response);
      setIsShelfTableOpen(true);
    } catch (error) {
      alert("Erro ao carregar os produtos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='total'>
      <Head>
        <title>Prateleira {prateleiraId || 'Carregando...'}</title>
        <meta name="description" content="Sistema planograma" />
      </Head>

      <SideNavBar />

      <div className='Prin'>
        <button className="back-button" onClick={() => router.back()}>
          <IoIosArrowDropleftCircle className="back-icon" /> Voltar
        </button>
        <h1>Visão Geral: {prateleiraId ? `Prateleira ${prateleiraId}` : "Carregando..."}</h1>

        <div className='centro'>
          <div className='containerPratileira1'>
            <div
              style={{
                width: '450px',
                height: '550px',
                backgroundImage: `url('/estante.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                padding: '5%',
              }}
            >
              <div className="category-buttons-container">
                {categories.length > 0 ? (
                  categories.map((slot) => {
                    
                    const corDeFundo =
                      slot.saida >= 50 ? "#A8F0A4" : slot.saida >= 5? "#FFD700" : "#FF4C4C";

                    return (
                      <Button
                        key={slot.id}
                        textobotao={slot.nome}
                        corDeFundo={corDeFundo}
                        pressione={() => fetchProductsBySlot(slot.id)}
                      />
                    );
                  })
                ) : (
                  <p style={{ color: "red" }}>Nenhum slot disponível</p>
                )}
              </div>


            </div>

            <div className="info-panel">
              <div className="button-group">
                  <ButtonV label="Visualizar" onClick={fetchProductsByShelf} />
                  {/*<ButtonV label="Editar" onClick={() => router.push(`/prateleira1/EditPla?id=${prateleiraId}`)} />*/}
                  <ButtonV label="Adicionar" onClick={() => router.push(`/importar`)} />
              </div>

              <div className="indicator-group">
                  <IndicatorBox title="Total de slots" value={categories.length} />
                  <IndicatorBox title="Total de produtos" value={totalProdutos} />
              </div>

              <LegendBox />

              {isShelfTableOpen && <TabelaV onClose={() => setIsShelfTableOpen(false)} data={shelfData} title={`Prateleira ${prateleiraId}`} />}
              {isTableOpen && <TabelaS onClose={() => setIsTableOpen(false)} data={tableData} title="Slot" slotId={selectedSlot} />}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default function Prateleira() {
  return (
    <Suspense fallback={<p>🔄 Carregando prateleira...</p>}>
      <PrateleiraContent />
    </Suspense>
  );
}
