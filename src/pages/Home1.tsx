import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>

          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton routerLink="/ion-t-evangelio/app/clickcounter" expand="full">
          Click Counter
        </IonButton>
        <IonButton routerLink="/ion-t-evangelio/app/calculator" expand="full">
          Calculator
        </IonButton>
        <IonButton routerLink="/ion-t-evangelio/app/todolist" expand="full">
          To do list
        </IonButton>
        <IonButton routerLink="/ion-t-evangelio/app/quotegenerator" expand="full">
          Quote Generator
        </IonButton>
        <IonButton routerLink="/ion-t-evangelio/app/notes" expand="full">
          Notes
        </IonButton>
    
      </IonContent>
    </IonPage>
  );
};

export default Home;