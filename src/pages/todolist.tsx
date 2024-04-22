import { 
    //Page defailts
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    //Ionic Card
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    //Ionic buttons
    IonButton, IonBackButton, IonButtons, IonIcon,
    IonCol, IonGrid, IonRow
  } from '@ionic/react';
  //Ionicons
  import { arrowUndo,caretBack} from 'ionicons/icons';

  const Todolist: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
             <IonButton slot="start"  fill="clear"  href="/home">
              Back
            </IonButton>
            <IonTitle>Todo List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonCard href="/">
            <IonCardHeader>
              <IonCardTitle>
                <IonGrid>
                  <IonRow>
                  <IonCol push=".75">
                   
                  </IonCol>
                  <IonCol pull='3'>
                    <div className="home-card-title">Coming Soon</div>
                    <IonCardSubtitle>hehe</IonCardSubtitle>
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
  
  export default Todolist;
  