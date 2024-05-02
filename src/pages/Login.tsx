import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    useIonRouter, IonButton
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
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Login</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonButton onClick={() => doLogin()} expand="full">Login</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;