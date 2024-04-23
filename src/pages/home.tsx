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
  IonSearchbar
} from '@ionic/react';

//Custom CSS
import './home.css';

//Ionic Icons
import { speedometerOutline,calculator,pencil} from 'ionicons/icons';

//Additional Routes
import ClickCounter from './clickcounter';

const cardData = [
  {
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: '/clickcounter'
  },
  {
    title: 'Calculator',
    icon: calculator,
    subtitle: 'Applet #2',
    link: '/calculator'
  },
  {
    title: 'To Do List',
    icon: speedometerOutline,
    subtitle: 'Applet #3',
    link: '/todolist'
  }
  
];

  const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>

        {/*Search bar*/}
        <IonSearchbar value={searchTerm} onIonChange={(e) => setSearchTerm(e.detail.value!)}></IonSearchbar>

        {/*Home Cards*/}
        {cardData
        .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((card, index) => (
          <IonCard key={index} href={card.link}>
            <IonCardHeader>
              <IonCardTitle>
                <IonGrid>
                  <IonRow>
                    <IonCol push=".75">
                      <IonIcon className="home-card-icon" icon={card.icon} color="primary"></IonIcon>
                    </IonCol>
                    <IonCol pull='3'>
                      <div className="home-card-title">{card.title}</div>
                      <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>
        ))}

        </IonContent>
      </IonPage>
    );
  };
  
  //
  export default Home;
  