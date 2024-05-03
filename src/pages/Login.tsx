import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    useIonRouter, IonButton,
    IonList,
    IonInput,
    IonItem,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
    IonCol,
    IonGrid,
    IonRow,
    IonAvatar,
    IonLabel
  } from '@ionic/react';

  const Login: React.FC = () => {
    const navigation = useIonRouter();
  
    const doLogin = () => {
      navigation.push('/ion-t-evangelio/app','forward','replace');
    }
  
    return (
      <IonPage>
        <IonContent  className="ion-padding">
          <IonGrid fixed={true}>
            <IonRow className='login-col-padding ion-justify-content-center' >
              <IonCol push="4.3">
                <IonAvatar class='login-avatar'>
                    <img alt="Silhouette of a person's head" src="https://raw.githubusercontent.com/hexedhorizon/ion-t-evangelio/main/src/assets/img/avatar.PNG" />
                </IonAvatar>
              </IonCol> 
            </IonRow>
            <IonRow class="ion-justify-content-center">
              <IonCol>
                <IonCard className="ion-padding">
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