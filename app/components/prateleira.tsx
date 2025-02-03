'use client';

import React, { useState, useEffect } from 'react';
import Button from './Button/Button';
import IndicatorBox from './IndicatorBox/IndicatorBox';
import LegendBox from './LegendBox/LegendBox';
import { useRouter } from 'next/navigation';
import ButtonV from './ButtonVisual/ButtonV';
import TabelaV from './TabelaV/TabelaV';
import TabelaS from './TabelaSlot/TabelaS';
import { api } from '../services/api';

import '../styles/prateleira.css';

export default function Shelf() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [products, setProducts] = useState<{ produto: string; quantidade: number; saida: number }[]>([]);

  const fetchProductsByCategory = async (categoria: string) => {
    setLoading(true);
    try {
      const response = await api.get<{ produto: string; quantidade: number; saida: number }[]>(`produtos/categoria/${categoria}`);
      setProducts(response);
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
    router.push('/prateleira1/EditPla');
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
        <div style={{ position: 'absolute', top: '40px', left: '40px', display: 'flex', gap: '10px' }}>
          <Button textobotao="Shampoo" corDeFundo="#A8F0A4" pressione={() => fetchProductsByCategory('shampoo')} />
          <Button textobotao="Condicionador" corDeFundo="#F9F571" pressione={() => fetchProductsByCategory('condicionador')} />
          <Button textobotao="Chupeta" corDeFundo="#F58282" pressione={() => fetchProductsByCategory('chupeta')} />
        </div>

        <div style={{ position: 'absolute', top: '150px', left: '40px', display: 'flex', gap: '10px' }}>
          <Button textobotao="Sabonete" corDeFundo="#A8F0A4" pressione={() => fetchProductsByCategory('sabonete')} />
          <Button textobotao="Perfume" corDeFundo="#F9F571" pressione={() => fetchProductsByCategory('perfume')} />
          <Button textobotao="Pente" corDeFundo="#F58282" pressione={() => fetchProductsByCategory('pente')} />
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
        }}
      >
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
            title="Prateleira de Produtos"
            slotText="Slot 001"
          />
        )}
      </div>
    </div>
  );
}

