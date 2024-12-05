import React from 'react';

interface LegendItem {
  color: string;
  text: string;
}

const legends: LegendItem[] = [
  { color: '#A8F0A4', text: 'Saída de produto dentro do esperado' },
  { color: '#F9F571', text: 'Saída de produto na média. Convém rever a disposição na prateleira' },
  { color: '#F58282', text: 'Produtos sem saída. Reveja com urgência a disposição na prateleira' },
];

const LegendBox: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '10px 20px',
      }}
    >
      <h4 style={{ fontSize: '16px', marginBottom: '10px', color: '#555' }}>Legenda</h4>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
        {legends.map((legend, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#555',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: legend.color,
                marginRight: '10px',
              }}
            ></div>
            {legend.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegendBox;
