'use client';
import React, { useState, useEffect } from 'react';
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

export default function Prateleira1() {
  const searchParams = useSearchParams();
  const prateleiraId = searchParams.get('id');
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  

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

  const fetchProductsByCategory = async (categoria: string) => {
    setLoading(true);
    try {
      const response = await api.get<{ produto: string; quantidade: number; saida: number }[]>(`produtos/categoria/${categoria}`);
      setTableData(response);
      setIsTableOpen(true);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      alert('Erro ao carregar os produtos.');
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

  return (
    <div className='total'>
      <Head>
        <title>Prateleira {prateleiraId || 'Carregando...'}</title>
        <meta name="description" content="Sistema planograma" />
      </Head>

      <SideNavBar />

      <div className='Prin'>
        <h1>Visão Geral: {prateleiraId ? `Prateleira ${prateleiraId}` : "Carregando..."}</h1>

        <div className='centro'>
          <div className='containerPratileira1'>
            <div
              style={{
                width: '500px',
                height: '600px',
                backgroundImage: `url('/estante.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                padding: '5%',
              }}
            >
              
              <div className="category-buttons-container">
                {categories.length > 0 ? (
                  categories.map((categoria) => (
                    <Button
                      key={categoria.id}
                      textobotao={categoria.nome}
                      corDeFundo="#A8F0A4"
                      pressione={() => fetchProductsByCategory(categoria.nome)}
                    />
                  ))
                ) : (
                  <p style={{ color: 'red' }}>Nenhuma categoria disponível</p>
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
                <IndicatorBox title="Total de slots" value={15} />
                <IndicatorBox title="Total de produtos" value={250} />
              </div>

              <LegendBox />

              {isModalOpen && <TabelaV onClose={handleCloseModal} />}
              {isTableOpen && (
                <TabelaS
                  onClose={handleCloseTable}
                  data={tableData}
                  title={`Prateleira ${prateleiraId}`}
                  slotText="Slot 001"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <FaRegCopyright />Todos os direitos reservados
      </footer>
    </div>
  );
}



