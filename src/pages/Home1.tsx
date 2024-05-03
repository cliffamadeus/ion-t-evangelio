import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { calculator, chatbubble, logoFirebase, logoIonic, logoReact, pencil, readerOutline, speedometerOutline } from 'ionicons/icons';
import { useState } from 'react';
import './home.css';

const cardData = [
  {
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: '/ion-t-evangelio/app/clickcounter',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }

  },
  {
    title: 'Calculator',
    icon: calculator,
    subtitle: 'Applet #2',
    link: '/ion-t-evangelio/app/calculator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'To Do List',
    icon: pencil,
    subtitle: 'Applet #3',
    link: '/ion-t-evangelio/app/todolist',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'Quote Generator',
    icon: chatbubble,
    subtitle: 'Applet #4',
    link: '/ion-t-evangelio/app/quotegenerator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'Notes',
    icon: readerOutline,
    subtitle: 'Applet #5',
    link: '/ion-t-evangelio/app/notes',
    tags: {
      tag1: logoIonic,
      tag2: logoReact, 
      tag3: logoFirebase 
    }
  }
  
];

const Home: React.FC = () => {
  {/*Dynamic Search*/}
  const [searchTerm, setSearchTerm] = useState<string>('');
  
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

       {/*Dynamic Search*/}
       <IonSearchbar 
            value={searchTerm} 
            onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
          />
          
          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <IonCard key={index} routerLink={card.link} routerDirection='forward'>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonGrid>
                      <IonRow>
                        <IonCol size="2">
                          <IonIcon className="home-card-icon" icon={card.icon} color="secondary" />
                        </IonCol>
                        <IonCol size="auto">
                            <div className="home-card-title">{card.title}</div>
                            <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                            {card.tags && Object.entries(card.tags).map(([key, icon], i) => (
                              <IonIcon
                                key={i}
                                className="home-card-subicon"
                                icon={icon}
                                color="primary" // Set color as needed
                              />
                            ))}
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

export default Home;