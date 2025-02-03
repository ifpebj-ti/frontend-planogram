'use client';
import { useState, useEffect } from 'react';
import '../styles/Home.css';
import Link from 'next/link';
import { api } from '../services/api';
import SideNavBar from './SideNavBar';

interface Shelf {
  id: number;
  name: string;
}

export default function ShelfSelector() {
  const [shelves, setShelves] = useState<Shelf[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchShelves = async () => {
      try {
        const response = await api.get<Shelf[]>('shelves');
        console.log('📦 Dados recebidos da API:', response); 

        if (!response || !Array.isArray(response)) {
          throw new Error('Formato de resposta inválido');
        }

        setShelves(response);
      } catch (err) {
        console.error('Erro ao carregar prateleiras:', err);
        setError('Erro ao carregar as prateleiras.');
      } finally {
        setLoading(false);
      }
    };

    fetchShelves();
  }, []);

  if (loading) return <p>🔄 Carregando prateleiras...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="shelf-selector">
      <SideNavBar />
      <h1>Bem-vindo ao Slotex</h1>
      <h2>Selecione a prateleira que deseja visualizar</h2>

      <div className="shelf-container">
        {shelves.length > 0 ? (
          shelves.map((shelf) => (
            <div key={shelf.id} className="shelf-section">
              <Link href={`/prateleira/${shelf.id}`} passHref>
                <button className="shelf-side-button">{shelf.name}</button>
              </Link>
              <div className="shelf-buttons">
                <Link href={`/prateleira/${shelf.id}`} passHref>
                  <button className="shelf-button">{shelf.name}</button>
                </Link>
                <Link href={`/prateleira/${shelf.id}`} passHref>
                  <button className="shelf-button">{shelf.name}</button>
                </Link>
              </div>
              <Link href={`/prateleira/${shelf.id}`} passHref>
                <button className="shelf-side-button">{shelf.name}</button>
              </Link>
            </div>
          ))
        ) : (
          <p className="error-message">Nenhuma prateleira encontrada.</p>
        )}
      </div>

      <footer className="footer">
        <p>Todos os direitos reservados - Versão 1.0</p>
      </footer>
    </div>
  );
}






