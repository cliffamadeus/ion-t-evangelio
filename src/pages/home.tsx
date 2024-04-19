import {
    //Initial Components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonIcon, IonCol, IonGrid, IonRow
} from '@ionic/react';
import './home.css';

import { logoIonic,bowlingBall,calculator} from 'ionicons/icons';

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
          <IonCard href="/clickcounter">
            <IonCardHeader>
              <IonCardTitle>
                <IonGrid>
                  <IonRow>
                  <IonCol ><h1><IonIcon icon={bowlingBall} size="large" color="primary"></IonIcon></h1></IonCol>
                  <IonCol pull='3'>Click Counter</IonCol>
                    
                    </IonRow>
                </IonGrid>

              </IonCardTitle>
             
              <IonCardSubtitle>Applet #1 </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>A simple click counter</IonCardContent>
          </IonCard>

           {/*Calculator card*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
              <IonGrid>
                  <IonRow>
                  <IonCol ><h1><IonIcon icon={calculator} size="large" color="primary"></IonIcon></h1></IonCol>
                  <IonCol pull='3'>Calculator</IonCol>
                    </IonRow>
                </IonGrid>
              </IonCardTitle>
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
  