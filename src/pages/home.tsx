import {
    //Initial Components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonIcon, IonCol, IonGrid, IonRow,  IonButton, IonNavLink
} from '@ionic/react';
//Custom CSS
import './home.css';

//Ionic Icons
import { speedometerOutline,calculator,pencil} from 'ionicons/icons';

//Additional Routes
import ClickCounter from './clickcounter';
  
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
          <IonCard href='/clickcounter' >
            <IonCardHeader>
              <IonCardTitle>
                <IonGrid>
                  <IonRow>
                  <IonCol push=".75">
                    <IonIcon className="home-card-icon"  icon={speedometerOutline} color="primary"></IonIcon>
                  </IonCol>
                  <IonCol pull='3'>
                    <div className="home-card-title">Click Counter</div>
                    <IonCardSubtitle>Applet #1 </IonCardSubtitle>
                    {/*
                    <IonNavLink routerDirection="forward" component={() => <ClickCounter />}>
                      <IonButton>Navigate</IonButton>
                    </IonNavLink>
                    */}
                  </IonCol>
                    </IonRow>
                </IonGrid>
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>

          {/*Click counter card*/}
          <IonCard href="/">
            <IonCardHeader>
              <IonCardTitle>
                <IonGrid>
                  <IonRow>
                  <IonCol push=".75">
                    <IonIcon className="home-card-icon"  icon={calculator} color="primary"></IonIcon>
                  </IonCol>
                  <IonCol pull='3'>
                    <div className="home-card-title">Calculator</div>
                    <IonCardSubtitle>Applet #2 </IonCardSubtitle>
                  </IonCol>
                    </IonRow>
                </IonGrid>
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>

           {/*To do list card*/}
           <IonCard href="/todolist">
            <IonCardHeader>
              <IonCardTitle>
                <IonGrid>
                  <IonRow>
                  <IonCol push=".75">
                    <IonIcon className="home-card-icon"  icon={pencil} color="primary"></IonIcon>
                  </IonCol>
                  <IonCol pull='3'>
                    <div className="home-card-title">To Do List</div>
                    <IonCardSubtitle>Applet #3 </IonCardSubtitle>
                  </IonCol>
                    </IonRow>
                </IonGrid>
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>
          
        </IonContent>
      </IonPage>
    );
  };
  
  //
  export default Home;
  