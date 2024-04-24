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
  IonSearchbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './calculator.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill="clear" href='/'>
            Back
          </IonButton>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img className="calculator-img-header" alt="Silhouette of mountains" src="https://mediaproxy.snopes.com/width/1200/height/900/https://media.snopes.com/2016/07/math.jpg" />
        <IonGrid>
          <IonRow>
            <IonCol>

            <IonItem>
              <IonInput className="ion-text-right" ></IonInput>
            </IonItem>

            <IonGrid fixed={true} className="calculator-grid">
                  <IonRow className="calculator-row">
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">C</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">+/-</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">%</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">÷</IonButton>
                      </IonCol>
                  </IonRow>

                  <IonRow  className="calculator-row">
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">7</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">8</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">9</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">x</IonButton>
                      </IonCol>
                  </IonRow>

                  <IonRow  className="calculator-row">
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">4</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">5</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">6</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">-</IonButton>
                      </IonCol>
                  </IonRow>

                  <IonRow  className="calculator-row">
                      <IonCol size="6">
                          <IonButton expand="full" className="calculator-button">0</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">.</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">=</IonButton>
                      </IonCol>
                  </IonRow>
            </IonGrid>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
