import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonButton,IonIcon 
} from '@ionic/react';
import './clickcounter.css';
import { arrowUndo} from 'ionicons/icons';

const ClickCounter: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click Counter</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent></IonCardContent>
        <IonButton>Click Me</IonButton>
        <IonButton fill="clear">Clear</IonButton>
      </IonCard>

        
      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;
