import {
    //Initial Components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonIcon,
} from '@ionic/react';

import { logoIonic } from 'ionicons/icons';

// CSS
//import './profile.css';
  
  const Home: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>

          {/*Click counter card*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Click Counter</IonCardTitle>
              <IonIcon icon={logoIonic} size="large" color="primary"></IonIcon>
              <IonCardSubtitle>Applet #1 </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>A simple click counter applet</IonCardContent>
          </IonCard>

           {/*Calculator card*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Calculator</IonCardTitle>
              <IonCardSubtitle>Applet #2 </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Basic Arithmetic Calculator</IonCardContent>
          </IonCard>

        </IonContent>
      </IonPage>
    );
  };
  
  //
  export default Home;
  