"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Head from "next/head";
import SideNavBar from "../components/SideNavBar";
import { useSearchParams, useRouter } from 'next/navigation';
import { api } from '../services/api';

import { FaRegCopyright } from 'react-icons/fa';
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
}

interface UserData {
  id: number;
  nome: string;
  email: string;
  categorias: Category[];
}


function PrateleiraContent() {
  const searchParams = useSearchParams();
  const prateleiraId = searchParams.get('id');
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    if (prateleiraId) {
      const fetchCategories = async () => {
        try {
          const response = await api.get<UserData>(`users/1`);
          console.log("📦 Dados do usuário:", response);

          const filteredCategories = response.categorias.filter(cat => cat.id_prateleira === Number(prateleiraId));
          setCategories(filteredCategories);

        } catch (error) {
          console.error("Erro ao carregar categorias:", error);
        }
      };

      fetchCategories();
    }
  }, [prateleiraId]);

  const [selectedSlot, setSelectedSlot] = useState<number | undefined>(undefined);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProductsBySlot = async (slotId: number) => {
    setLoading(true);
    setSelectedSlot(slotId);
    try {
      console.log(`🔍 Buscando produtos para slot ID: ${slotId}`);
  
      const response = await api.get<{ produto: string; quantidade: number; saida: number }[]>(`produtos/categoria/${slotId}/detalhados`);
      console.log("📦 Produtos carregados:", response);
  
      if (!response || response.length === 0) {
        console.warn("⚠️ Nenhum produto encontrado.");
        alert("Nenhum produto disponível neste slot.");
        return;
      }
  
      setTableData(response);
      setIsTableOpen(true);
  
      console.log("✅ isTableOpen foi atualizado para TRUE!");
    } catch (error) {
      console.error("❌ Erro ao buscar produtos:", error);
      alert("Erro ao carregar os produtos.");
    } finally {
      setLoading(false);
    }
  };
  


  const handleRedirect = () => {
    router.push(`/prateleira1/EditPla?id=${prateleiraId}`);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseTable = () => {
    setIsTableOpen(false);
  };

  
  const groupedCategories: Category[][] = [];
  for (let i = 0; i < categories.length; i += 4) {
    groupedCategories.push(categories.slice(i, i + 4));
  }

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
                categories.reduce((acc, slot, index) => {
                  if (index % 4 === 0) acc.push([]);
                  acc[acc.length - 1].push(slot);
                  return acc;
                }, [] as Category[][]).map((row, rowIndex) => (
                  <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                    {row.map((slot) => (
                      <Button
                        key={slot.id}
                        textobotao={slot.nome}
                        corDeFundo="#A8F0A4"
                        pressione={() => {
                          console.log(`🖱️ Botão do slot ${slot.id} clicado!`);
                          fetchProductsBySlot(slot.id);
                        }}
                      />
                    ))}
                  </div>
                ))
              ) : (
                <p style={{ color: "red" }}>Nenhum slot disponível</p>
              )}

              </div>
            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                backgroundColor: '#EFF0F0',
                padding: '20px',
              }}>
              
              <div className="flex justify-center items-center h-screen bg-gray-100 m-4">
                <ButtonV label="Visualizar" onClick={handleOpenModal} />
                <ButtonV label="Editar" onClick={handleRedirect} />
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <IndicatorBox title="Total de slots" value={categories.length} />
                <IndicatorBox title="Total de produtos" value={tableData.length} />
              </div>

              <LegendBox />

              {isModalOpen && <TabelaV onClose={handleCloseModal} />}
              {isTableOpen && (
                <TabelaS
                  onClose={() => setIsTableOpen(false)}
                  data={tableData}
                  title={`Prateleira ${prateleiraId}`}
                  slotText="Slot"
                  slotId={selectedSlot ?? undefined} 
                />
              )}
            </div>
          </div>
        </div>
        <Footer/>
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