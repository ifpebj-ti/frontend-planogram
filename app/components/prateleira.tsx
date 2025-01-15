'use client';

import React, { useState } from 'react';
import Button from './Button/Button';
import IndicatorBox from './IndicatorBox/IndicatorBox';
import LegendBox from './LegendBox/LegendBox';
import { useRouter } from 'next/navigation';
import ButtonV from './ButtonVisual/ButtonV';
import TabelaV from './TabelaV/TabelaV';
import TabelaS from './TabelaSlot/TabelaS';

import '../styles/prateleira.css';

export default function Shelf() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [tableData, setTableData] = useState<any[]>([]);

  const shampooData = [
    { produto: 'Shampoo A', quantidade: 10, saida: 2 },
    { produto: 'Shampoo B', quantidade: 5, saida: 1 },
    { produto: 'Shampoo C', quantidade: 8, saida: 3 },
  ];

  const handlePress = (product: string) => {
    alert(`Você clicou no produto: ${product}`);
  };

  const router = useRouter();

  const handleRedirect = () => {
    router.push('/prateleira1/EditPla'); 
  };


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenTable = (data: any[]) => {
    setTableData(data);
    setIsTableOpen(true);
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
            padding: '5%'
        }}
        >

            <div style={{ position: 'absolute', top: '40px', left: '40px', display: 'flex', gap: '10px' }}>
                <Button textobotao="Shampoo" corDeFundo="#A8F0A4" pressione={() => handleOpenTable(shampooData)}/>
                <Button textobotao="Condicionador" corDeFundo="#F9F571" pressione={() => handlePress('Condicionador')} />
                <Button textobotao="Chupeta" corDeFundo="#F58282" pressione={() => handlePress('Chupeta')} />
            </div>
            <div style={{ position: 'absolute', top: '150px', left: '40px', display: 'flex', gap: '10px' }}>
                <Button textobotao="Shampoo" corDeFundo="#A8F0A4" pressione={() => handlePress('Shampoo')} />
                <Button textobotao="Condicionador" corDeFundo="#F9F571" pressione={() => handlePress('Condicionador')} />
                <Button textobotao="Chupeta" corDeFundo="#F58282" pressione={() => handlePress('Chupeta')} />
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
            <ButtonV label="Visualizar" onClick={handleOpenModal}  />
            <ButtonV label="Editar" onClick={handleRedirect} />
          </div>
            <div style={{ display: 'flex', gap: '20px' }}>
            <IndicatorBox title="Total de slots" value={15} />
            <IndicatorBox title="Total de produtos" value={250} />
            </div>

            <LegendBox />
            {isModalOpen && <TabelaV onClose={handleCloseModal} />}
            {isTableOpen && 
            <TabelaS onClose={handleCloseTable}
            data={tableData} 
            title="Prateleira Shampoo"
            slotText="Slot 001" />}
            {isTableOpen && 
            <TabelaS onClose={handleCloseTable}
            data={tableData} 
            title="Prateleira Shampoo"
            slotText="Slot 001" />}
        </div>
    </div>
  );
}
