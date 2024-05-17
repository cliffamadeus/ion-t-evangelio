import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    useIonRouter, IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAvatar,
    IonCol,
    IonGrid,
    IonInput,
    IonRow
  } from '@ionic/react';

  const Login: React.FC = () => {
    const navigation = useIonRouter();
  
    const doLogin = () => {
      navigation.push('/ion-t-evangelio/Home','forward','replace');
    }
  
    return (
      <IonPage>
      <IonContent>
        <IonGrid fixed={true}>
          <IonRow className='login-col-padding ion-justify-content-center' >
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol>
              <IonCard className="ion-padding login-card">
              <div className='login-card-padding'></div>
                
                  <IonCardTitle className='login-card-title' >User Login</IonCardTitle>
                  <br />
                  <IonInput  label="Username:" value="hexedhorizon"labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
                  <br />
                  <IonInput label="Password:" type="password" value="" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
  
                  <IonRow >
                    <IonCol >
                    <IonButton onClick={() => doLogin()} expand="block">Login</IonButton>
                    </IonCol>
              
                  </IonRow>
                  <IonRow >
                    <IonCol >
                    <IonButton onClick={() => doLogin()} expand="block" color="secondary">Signup</IonButton>
                    </IonCol>
              
                  </IonRow>
              
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    );
  };
  
  export default Login;