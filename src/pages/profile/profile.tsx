import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonAlert,
  IonActionSheet,
  IonAvatar,
  IonThumbnail,
  IonBadge
} from '@ionic/react';
import './profile.css';

//Dynamic data reference
import rizzCard from '../../assets/json/rizzCard.json';
import { bandageOutline } from 'ionicons/icons';

const Profile: React.FC = () => {


  const [showAlert, setShowAlert] = useState(false);
  const [randomIndex, setRandomIndex] =  useState<number | null>(null); // State to store random index
  const [isOpen, setIsOpen] = useState(false);

  // Function to generate a random index
  const generateRandomIndex = () => {
    return Math.floor(Math.random() * rizzCard.length);
  };

  // Function to generate a random message
  const renderRandomMessage = () => {
    if (randomIndex !== null) {
      return rizzCard[randomIndex].message;
    } else {
      return ''; // Return empty string if randomIndex is null
    }
  };

  // Function to handle opening of the alert
  const handleOpenAlert = () => {
    const newIndex = generateRandomIndex();
    setRandomIndex(newIndex);
    setShowAlert(true);
  };

  // Function to handle closing of the alert
  const handleAlertDismiss = () => {
    setRandomIndex(0); // Reset the index to 0
    setShowAlert(false); // Hide the alert
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/home'/>
           </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonGrid fixed={true} className="profile-content">
          <IonRow className='login-col-padding ion-justify-content-center' >
            <IonCol push="4.3">
              <IonAvatar onClick={handleOpenAlert} class='profile-avatar'>
                <img alt="Silhouette of a person's head" src="https://raw.githubusercontent.com/hexedhorizon/ion-t-evangelio/main/src/assets/img/avatar.PNG" />
                <IonAlert
                        isOpen={showAlert}
                        onDidDismiss={handleAlertDismiss} 
                        header="Rizz"
                        subHeader=""
                        message={renderRandomMessage()}
                        buttons={['Close']}
                      />
                
              </IonAvatar>
              <IonBadge class="profile-ion-badge" onClick={() => setIsOpen(true)}><IonIcon icon={bandageOutline} size="large" color="light"></IonIcon></IonBadge>
                <IonAlert
                  isOpen={isOpen}
                  header="Healing Stage"
                  subHeader=""
                  message="This profile at the healing stage"
                  buttons={['Action']}
                  onDidDismiss={() => setIsOpen(false)}
                ></IonAlert>
            </IonCol>
          </IonRow>
          <IonRow className='profile-card-title'>
            <IonCol size="auto" push="2">
              <IonCardTitle>Cliff Amadeus F. Evangelio</IonCardTitle>
              <IonCardSubtitle>Instructor 1 - NBSC BSIT</IonCardSubtitle>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol>
              <IonCard className="ion-padding"> 
              <IonCardTitle className='profile-stats'>Current Stats</IonCardTitle>
                <IonRow>
                    <IonCol>
                      <h6>Applets:</h6>
                      <h3>5</h3>
                    </IonCol>
                    <IonCol>
                      <h6>Other Stats</h6>
                      <h3>00</h3>
                    </IonCol>
                </IonRow>
              </IonCard>
              <IonButton routerLink="/ion-t-evangelio/Login" routerDirection="back" expand="full"> 
            Logout  
          </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;