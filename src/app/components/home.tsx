  
import '../styles/Home.css';

export default function ShelfSelector() {
    return (
      <div className="shelf-selector">
        <h1>Selecione a prateleira que deseja visualizar</h1>
  
        <div className="shelf-container">
          {/* Seções de prateleiras */}
          {[1, 2, 3].map((section) => (
            <div key={section} className="shelf-section">
              <button className="shelf-number">Prateleira {section}</button>
              <div className="shelf-items">
                <button className="shelf-item">Prateleira 1</button>
                <button className="shelf-item">Prateleira 2</button>
              </div>
              <button className="shelf-number">Prateleira {section}</button>
            </div>
          ))}
        </div>
  
        {/* Rodapé */}
        <footer className="footer">
          <p>Todos os direitos reservados</p>
        </footer>
      </div>
    );
  }
  