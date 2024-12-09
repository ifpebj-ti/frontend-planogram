'use client';

import React from 'react';
import Button from './Button/page';
import IndicatorBox from './IndicatorBox/page';
import LegendBox from './LegendBox/page';
import { useRouter } from 'next/navigation';
import ButtonV from '../components/ButtonVisual/page';

import '../styles/prateleira.css';

export default function Shelf() {
  const handlePress = (product: string) => {
    alert(`Você clicou no produto: ${product}`);
  };

  const router = useRouter();

  const handleRedirect = () => {
    router.push('/visualizar'); 
  };

  return (
    <div className='containerPratileira1'>
        <div
        style={{
            width: '600px', 
            height: '700px', 
            backgroundImage: `url('/estante.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            padding: '5%'
        }}
        >

            <div style={{ position: 'absolute', top: '60px', left: '40px', display: 'flex', gap: '10px' }}>
                <Button textobotao="Shampoo" corDeFundo="#A8F0A4" pressione={() => handlePress('Shampoo')} />
                <Button textobotao="Condicionador" corDeFundo="#F9F571" pressione={() => handlePress('Condicionador')} />
                <Button textobotao="Chupeta" corDeFundo="#F58282" pressione={() => handlePress('Chupeta')} />
            </div>
            <div style={{ position: 'absolute', top: '180px', left: '40px', display: 'flex', gap: '10px' }}>
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
        backgroundColor: '#F5F5F5',
        padding: '15px',
        }}
        >
          <div className="flex justify-center items-center h-screen bg-gray-100 m-8">
            <ButtonV label="Visualizar" onClick={handleRedirect} />
            <ButtonV label="Editar" onClick={handleRedirect} />
          </div>
            <div style={{ display: 'flex', gap: '20px' }}>
            <IndicatorBox title="Total de slots" value={15} />
            <IndicatorBox title="Total de produtos" value={250} />
            </div>

            {/* Caixa de legenda */}
            <LegendBox />
        </div>
    </div>
  );
}
