'use client';

import React, { useState } from 'react';
import Button from '../Button/Button';
import TabelaS from '../TabelaSlot/TabelaS';

export default function Editar() {
  // Dados fictícios iniciais
  const [slots, setSlots] = useState<any[]>([
    { id: 1, slot: 'Slot 001', produto: 'Shampoo', quantidade: 10, ativo: true },
    { id: 2, slot: 'Slot 002', produto: 'Condicionador', quantidade: 5, ativo: true },
    { id: 3, slot: 'Slot 003', produto: 'Sabonete', quantidade: 8, ativo: false },
  ]);

  const [isTableOpen, setIsTableOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);

  // Adicionar um novo slot
  const addSlot = (slotName: string) => {
    const newSlot = {
      id: slots.length + 1,
      slot: `Slot ${String(slots.length + 1).padStart(3, '0')}`,
      produto: slotName,
      quantidade: Math.floor(Math.random() * 20) + 1, // Quantidade aleatória
      ativo: true,
    };
    setSlots([...slots, newSlot]);
  };

  // Deletar o primeiro slot ativo
  const deleteSlot = () => {
    const updatedSlots = slots.filter((_, index) => index !== 0); // Remove o primeiro elemento
    setSlots(updatedSlots);
  };

  // Abre a tabela para um slot específico
  const handleOpenTable = (slot: any) => {
    setSelectedSlot(slot);
    setIsTableOpen(true);
  };

  const handleCloseTable = () => {
    setIsTableOpen(false);
    setSelectedSlot(null);
  };

  return (
    <div className="containerPratileira1">
      
      <div
        style={{
          width: '600px',
          height: '700px',
          backgroundImage: `url('/estante.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '5%',
        }}
      >
        
        {slots.map((slot) =>
          slot.ativo ? (
            <Button
              key={slot.id}
              textobotao={slot.produto}
              corDeFundo="#A8F0A4"
              pressione={() => handleOpenTable(slot)}
            />
          ) : null
        )}
      </div>

      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <button onClick={() => addSlot('Novo Produto')}>Adicionar Slot</button>
        <button onClick={deleteSlot}>Deletar Primeiro Slot</button>
      </div>

      
      {isTableOpen && selectedSlot && (
        <TabelaS
          onClose={handleCloseTable}
          data={[
            { produto: selectedSlot.produto, quantidade: selectedSlot.quantidade, saida: 0 },
          ]}
          title={`Prateleira - ${selectedSlot.slot}`}
          slotText={selectedSlot.slot}
        />
      )}
    </div>
  );
}

