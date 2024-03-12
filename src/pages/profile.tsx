import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton,
  IonActionSheet} from '@ionic/react';
import './profile.css';

const Tab1: React.FC = () => {
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
          <img alt="Profile avatar" src="../src/assets/img/avatar.png" />
          <IonCardHeader>
            <IonCardTitle>Cliffmeister</IonCardTitle>
            <IonCardSubtitle>Instructor?</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Quote: Nothing more, nothing less.</IonCardContent>

          <IonButton id="present-alert" color="warning" expand="full">Quick Facts</IonButton>
          <IonAlert
            trigger="present-alert"
            header="A Short Title Is Best"
            subHeader="A Sub Header Is Optional"
            message="A message should be a short, complete sentence."
            buttons={['Action']}
          ></IonAlert>


          <IonButton fill="clear" id="open-action-sheet" expand="block">Open Action Sheet</IonButton>
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

export default Tab1;
