import '../styles/Home.css';
import Link from 'next/link';

// Propriedades do componente
interface ShelfSelectorProps {
  shelves: { section: number; items: { id: number; name: string }[] }[]; // Estrutura das prateleiras
}

export default function ShelfSelector({ shelves }: ShelfSelectorProps) {
  return (
    <div className="shelf-selector">
      <h1>Selecione a prateleira que deseja visualizar</h1>

      <div className="shelf-container">
        {shelves.map((shelf) => (
          
          <div key={shelf.section} className="shelf-section">
          <Link href={`/prateleira/${shelf.section}`} passHref>
            <button className="shelf-number">Prateleira {shelf.section}</button>
          </Link>
          <div className="shelf-items">
            <Link href={`/prateleira/${shelf.section}`} passHref>
              <button className="shelf-item">Prateleira </button>
            </Link>
            <Link href={`/prateleira/${shelf.section}`} passHref>
              <button className="shelf-item">Prateleira </button>
            </Link>
          </div>
          <Link href={`/prateleira/${shelf.section}`} passHref>
            <button className="shelf-number">Prateleira {shelf.section}</button>
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



