import React from 'react';

const InvoiceHeader = () => (
  <div>
    <h2>Factura</h2>
    <p>Fecha: {new Date().toLocaleDateString()}</p>
    <p>Cliente: Juan Pérez</p>
  </div>
);

export default InvoiceHeader;
