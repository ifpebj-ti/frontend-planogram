  
import '../styles/Home.css';

import Link from 'next/link';

export default function ShelfSelector() {
  return (
    <div className="shelf-selector">
      <h1>Selecione a prateleira que deseja visualizar</h1>

      <div className="shelf-container">
        {[1, 2, 3].map((section) => (
          <div key={section} className="shelf-section">
            <Link href={`/prateleira/${section}`} passHref>
              <button className="shelf-number">Prateleira {section}</button>
            </Link>

            <div className="shelf-items">
              <Link href={`/prateleira/${section}/1`} passHref>
                <button className="shelf-item">Prateleira 1</button>
              </Link>
              <Link href={`/prateleira/${section}/2`} passHref>
                <button className="shelf-item">Prateleira 2</button>
              </Link>
            </div>
            <Link href={`/prateleira/${section}`} passHref>
              <button className="shelf-number">Prateleira {section}</button>
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

  