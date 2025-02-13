'use client';
import { useState, useEffect } from 'react';
import './style.css';
import Link from 'next/link';
import { api } from '../services/api';
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer/Footer';

interface Shelf {
  id: number;
  nome: string;
}

export default function ShelfSelector() {
  const [shelves, setShelves] = useState<Shelf[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchShelves = async () => {
      try {
        const response = await api.get<Shelf[]>('shelves');
        console.log('📦 Dados da API:', response);
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

  const groupedShelves = [];
  for (let i = 0; i < shelves.length; i += 4) {
    groupedShelves.push(shelves.slice(i, i + 4));
  }

  return (
    <div className="shelf-selector">
      <SideNavBar />
      <h1>Bem-vindo ao Slotex</h1>
      <h2>Selecione a prateleira que deseja visualizar</h2>

      <div className="shelf-container">
        {groupedShelves.map((group, index) => (
          <div key={index} className="shelf-section">
            {group.length >= 1 && (
              <Link  href={{ pathname: "/prateleira1", query: { id: group[0].id } }} passHref>
                <button className="shelf-number ">{group[0].nome}</button>
              </Link>
            )}

            <div className="shelf-items">
              {group.slice(1, 3).map((shelf) => (
                <Link key={shelf.id} href={{ pathname: "/prateleira1", query: { id: shelf.id } }} passHref>
                  <button className="shelf-item">{shelf.nome}</button>
                </Link>
              ))}
            </div>

            {group.length >= 4 && (
              <Link href={{ pathname: "/prateleira1", query: { id: group[3].id } }} passHref>
                <button className="shelf-number ">{group[3].nome}</button>
              </Link>
            )}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

