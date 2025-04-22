import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import Productos from '../components/ProductList';
import Factura from '../components/InvoiceHeader';
import TipoPago from '../components/PaymentTypes';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pantalla Principal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Factura />
        <Productos />
        <TipoPago />
      </IonContent>
    </IonPage>
  );
};

export default Home;
