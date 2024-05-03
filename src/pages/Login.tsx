import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    useIonRouter, IonButton,
    IonList,
    IonInput,
    IonItem,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
  } from '@ionic/react';

  const Login: React.FC = () => {
    const navigation = useIonRouter();
  
    const doLogin = () => {
      navigation.push('/ion-t-evangelio/app','forward','replace');
    }
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle class="ion-text-center">Application Library</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
    
          <IonCard>
          <IonCardHeader>
            <IonCardTitle>Login</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonInput label="Username"  value="hexedhorizon" disabled={true}></IonInput>
            <IonInput label="Password:" type="password" value=""></IonInput>
            <IonButton onClick={() => doLogin()} expand="block">Login</IonButton>
          </IonCardContent>
        </IonCard>

        
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;