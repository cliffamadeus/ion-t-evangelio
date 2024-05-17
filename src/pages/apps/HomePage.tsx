import React from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const HomePage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Apps</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Apps
      </div>
    </IonContent>
  </>
);

export default HomePage;