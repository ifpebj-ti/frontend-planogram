import React from 'react';

interface IndicatorBoxProps {
  title: string;
  value: number;
}

const IndicatorBox: React.FC<IndicatorBoxProps> = ({ title, value }) => {
  return (
    <div
      style={{
        width: '150px',
        height: '100px',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
      }}
    >
      <h4 style={{ fontSize: '14px', margin: '0', color: '#555' }}>{title}</h4>
      <strong style={{ fontSize: '24px', margin: '0', color: '#004080' }}>{value}</strong>
    </div>
  );
};

export default IndicatorBox;
