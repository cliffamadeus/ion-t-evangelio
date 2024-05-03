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
  IonThumbnail
} from '@ionic/react';
import './profile.css';

//Dynamic data reference
import rizzCard from '../../assets/json/rizzCard.json';

const Profile: React.FC = () => {


  const [showAlert, setShowAlert] = useState(false);
  const [randomIndex, setRandomIndex] =  useState<number | null>(null); // State to store random index

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

        <IonCard>
          {/*Avatar and name*/}
          <IonGrid>
            <IonRow>
                <IonCol size="1.5" push="">
                  <IonAvatar>
                    <img alt="profile" src="https://github.com/hexedhorizon/ion-t-evangelio/blob/main/src/assets/img/avatar.PNG" />
                  </IonAvatar>
                </IonCol>
                <IonCol size="9" pull="">
                  <IonCardTitle>Cliff Amadeus F. Evangelio</IonCardTitle>
                  <IonCardSubtitle>Instructor 1 - NBSC BSIT</IonCardSubtitle>
                </IonCol>
            </IonRow>
          </IonGrid>

          {/*Button Grid*/}
          <IonGrid>
            <IonRow>
                <IonCol size="" push="">

                <IonButton id="present-alert" color="warning" expand="full" onClick={handleOpenAlert}>
                  Quick Facts
                </IonButton>
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={handleAlertDismiss} // Call the handleAlertDismiss function when the alert is closed
                  header="Rizz"
                  subHeader=""
                  message={renderRandomMessage()}
                  buttons={['Close']}
                />

                </IonCol>
                <IonCol size="" pull="">
                  <IonButton fill="clear" id="open-action-sheet" expand="block">Open Action Sheet</IonButton>
                </IonCol>
            </IonRow>
          </IonGrid>
          <IonCardContent>Quote: Nothing more, nothing less.</IonCardContent>
             
          {/* Actionsheet*/}
          <IonActionSheet
            trigger="open-action-sheet"
            header="Actions"
            buttons={[
              {
                text: 'Delete',
                role: 'destructive',
                data: {
                  action: 'delete',
                },
              },
              {
                text: 'Share',
                data: {
                  action: 'share',
                },
              },
              {
                text: 'Cancel',
                role: 'cancel',
                data: {
                  action: 'cancel',
                },
              },
            ]}
          ></IonActionSheet>
        </IonCard>  
      </IonContent>
    </IonPage>
  );
};

export default Profile;
