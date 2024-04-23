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
import rizzCard from '../assets/json/rizzCard.json';

const Profile: React.FC = () => {

  {/* Random message generator from json */}
  const renderRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * rizzCard.length);
    return rizzCard[randomIndex].message;
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
                    <img alt="Silhouette of a person's head" src="../src/assets/img/avatar.png" />
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
                <IonButton id="present-alert" color="warning" expand="full">Quick Facts</IonButton>
                  <IonAlert
                    trigger="present-alert"
                    header="Rizz"
                    subHeader=""
                    message={renderRandomMessage()}
                    buttons={['Close']}
                  ></IonAlert>
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
