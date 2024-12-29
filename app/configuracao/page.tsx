'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';
import ButtonV from '../components/ButtonVisual/ButtonV';
import Head from 'next/head';
import SideNavBar from '../components/SideNavBar';

export default function ConfigForm() {

    const router = useRouter();
    
    const handleRedirect = () => {
        router.push('/visualizar'); 
    };

  return (
    <div className='container'>
        <Head>
            <title className='title'>Configurações</title>
            <meta name="descição" content="Sistema planograma"/>
        </Head>
        <SideNavBar/>
        <form className='form'>
            <div className='inputGroup'>
            <label className='label'>Nome do usuário:</label>
            <div className="flex items-center gap-2 mt-2">
                <input
                type="text"
                className='input'
                defaultValue="Maria Lima dos Santos"
                />
                <button className="text-blue-600 hover:text-blue-800">
                <span className="material-icons">edit</span>
                </button>
            </div>
            </div>

            <div className='inputGroup'>
            <label className='label'>Nova senha:</label>
            <input
                type="password"
                className='input'
            />
            </div>
            <div className='inputGroup'>
            <label className='label'>Senha atual:</label>
            <input
                type="password"
                className='input'
            />
            </div>

            
            <div className="text-center">
            <ButtonV label="Editar" onClick={handleRedirect} />
            </div>
        </form>
    </div>
  );
}
