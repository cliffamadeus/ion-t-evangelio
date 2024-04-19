import { 
  //Page defailts
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  //Ionic Card
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  //Ionic buttons
  IonButton, IonBackButton, IonButtons, IonIcon 
} from '@ionic/react';
//Ionicons
import { arrowUndo,caretBack} from 'ionicons/icons';

import React, { useState } from 'react';
import './clickcounter.css';


const ClickCounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
 
  const handleClear = () => {
    setClickCount(0);
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
           <IonButton slot="start"  fill="clear"  href="/home">
            Back
          </IonButton>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click Counter</IonTitle>
          </IonToolbar>
        </IonHeader>

          <IonCard className="cc-card">
            <IonCardHeader>
              {/*
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              */}
            </IonCardHeader>
            <p className="cc-output">{clickCount}</p>
            <IonButton onClick={handleClick}>Click Me</IonButton>
            <IonButton onClick={handleClear} fill="clear">Clear</IonButton>
          </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;
