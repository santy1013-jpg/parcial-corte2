import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonButton } from '@ionic/react';

const Productos: React.FC = () => {
  const productos = ['Manzana', 'Pan', 'Leche'];

  return (
    <>
      <h2>Productos</h2>
      {productos.map((producto, index) => (
        <IonCard key={index}>
          <IonCardHeader>
            <IonCardTitle>{producto}</IonCardTitle>
            <IonButton onClick={() => alert(`${producto} agregado al carrito`)}>Agregar</IonButton>
          </IonCardHeader>
        </IonCard>
      ))}
    </>
  );
};

export default Productos;

