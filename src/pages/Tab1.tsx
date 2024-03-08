import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        
      //Card
        <IonCard>
          <img alt="Silhouette of mountains" src="../src/assets/img/avatar.png" />
          <IonCardHeader>
            <IonCardTitle>Cliffmeister</IonCardTitle>
            <IonCardSubtitle>Instructor?</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Quote: Nothing more, nothing less.</IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
