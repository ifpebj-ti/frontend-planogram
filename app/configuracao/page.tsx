'use client';
import React, { useState, useEffect  } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';
import ButtonV from '../components/ButtonVisual/ButtonV';
import Head from 'next/head';
import SideNavBar from '../components/SideNavBar';



export default function ConfigForm() {

    const [userData, setUserData] = useState({
        name: '',
        currentPassword: '',
        newPassword: ''
      });
      const [isEditing, setIsEditing] = useState(false);
    
      // Função para buscar os dados do usuário
      useEffect(() => {
        async function fetchUserData() {
          try {
            const response = await fetch('/api/user'); // Altere o endpoint conforme necessário
            const data = await response.json();
            setUserData({
              name: data.name,
              currentPassword: '',
              newPassword: ''
            });
          } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
          }
        }
        fetchUserData();
      }, []);
    
      // Função para alternar o estado de edição
      const toggleEditing = () => setIsEditing(!isEditing);
    
      // Função para salvar os dados editados
      const handleSave = async () => {
        try {
          await fetch('/api/user', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: userData.name,
              newPassword: userData.newPassword
            })
          });
          setIsEditing(false); // Desativa o modo de edição
        } catch (error) {
          console.error('Erro ao salvar dados do usuário:', error);
        }
      };

  return (
    <div className='container'>
        
        <SideNavBar/>
        <h1 className="config-title">Configurações</h1>
        <form className="form">
        <div className="inputGroup">
            <label className="label">Nome do usuário:</label>
            <div className="flex items-center gap-2 mt-2">
            <input
                type="text"
                className="input"
                value={userData.name}
                disabled={!isEditing} // Campo só pode ser editado no modo de edição
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
            {!isEditing && (
                <ButtonV
                className="text-blue-800 hover:text-blue-800"
                onClick={toggleEditing}
                label="Editar"
                />
            )}
            </div>
        </div>

        <div className="inputGroup">
            <label className="label">Nova senha:</label>
            <input
            type="password"
            className="input"
            value={userData.newPassword}
            onChange={(e) => setUserData({ ...userData, newPassword: e.target.value })}
            />
        </div>

        <div className="inputGroup">
            <label className="label">Senha atual:</label>
            <input
            type="password"
            className="input"
            value={userData.currentPassword}
            onChange={(e) => setUserData({ ...userData, currentPassword: e.target.value })}
            />
        </div>

        <div className="text-center mt-4">
            {isEditing && (
            <ButtonV
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={handleSave}
                label="Salvar"
            />
            )}
        </div>
        </form>
    </div>
  );
}
