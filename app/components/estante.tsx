import '../styles/Home.css';

import Link from 'next/link';

interface Shelf {
  id: number;
  link: string;
  name: string;
}

interface ShelfSelectorProps {
  shelves: Shelf[]; // Array de prateleiras
}

export default function ShelfSelector({ shelves }: ShelfSelectorProps) {
  return (
    <div className="shelf-selector">
      <h1>Bem vindo, ao Slotex</h1>
      <h2>Selecione a prateleira que deseja visualizar</h2>

      <div className="shelf-container">
        {shelves.map((shelf) => (
          <div key={shelf.id} className="shelf-section">
            <Link href={shelf.link} passHref>
              <button className="shelf-number">{shelf.name}</button>
            </Link>

            <div className="shelf-items">
              <Link href={shelf.link} passHref>
                <button className="shelf-item">{shelf.name}</button>
              </Link>
              <Link href={shelf.link} passHref>
                <button className="shelf-item">{shelf.name}</button>
              </Link>
            </div>
            <Link href={shelf.link} passHref>
              <button className="shelf-number">{shelf.name}</button>
            </Link>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}




