import React from 'react';

export interface IndicatorBoxProps {
  title: string;
  value: number;
}
export default function IndicatorBox({ title, value}: IndicatorBoxProps) {
  return (
    <div
      style={{
        width: '170px',
        height: '120px',
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
      <strong style={{ fontSize: '50px', margin: '0', color: '#004080' }}>{value}</strong>
    </div>
  );
};

