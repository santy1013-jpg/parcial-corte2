import React, { useState } from 'react';

type Props = {
  onSelect: (method: string) => void;
};

const PaymentTypes: React.FC<Props> = ({ onSelect }) => {
  const [method, setMethod] = useState('');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div>
      <h2>Tipo de Pago</h2>
      <select onChange={handleSelect} value={method}>
        <option value="">Seleccione...</option>
        <option value="Efectivo">Efectivo</option>
        <option value="Tarjeta">Tarjeta</option>
        <option value="Transferencia">Transferencia</option>
      </select>
    </div>
  );
};

export default PaymentTypes;
