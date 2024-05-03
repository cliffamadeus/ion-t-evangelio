import React from 'react';
import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, newspaperOutline, logOutOutline, personAddOutline, personOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Home1 from './Home1';
import Clickcounter from './clickcounter/clickcounter';
import Calculator from './calculator/calculator';
import Todolist from './todolist/todolist';
import Quotegenerator from './quotegenerator/quotegenerator';
import Notes from './notes/notes';
import Profile from './profile/profile';


const Menu: React.FC = () => {
  const sidemenuItems = [
    {
      name:'Home',
      url:'/ion-t-evangelio/app/home',
      icon:homeOutline
    },
    {
      name:'Profile',
      url:'/ion-t-evangelio/app/profile',
      icon:personOutline
    }
  ]

  return (
    <IonPage>
    <IonSplitPane contentId="main">
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>

          {/* Sidemenu Items*/}
          {sidemenuItems.map((item, index) => (
            <IonMenuToggle key={index}>
              <IonItem routerLink={item.url} routerDirection="forward">
                <IonCol size="2">
                  <IonIcon className="" icon={item.icon} color="primary" />
                </IonCol>
                {item.name}
              </IonItem>
            </IonMenuToggle>
          ))}

        <IonButton routerLink="/ion-t-evangelio/" routerDirection="back" expand="full">
          <IonIcon slot="start" icon={logOutOutline} color="light" />
          Logout
        </IonButton>

        </IonContent>
      </IonMenu>

      {/* Routers */}
      <IonRouterOutlet id="main">
        
        <Route exact path="/ion-t-evangelio/app/home" component={Home1} />
        <Route exact path="/ion-t-evangelio/app/clickcounter" component={Clickcounter} />
        <Route exact path="/ion-t-evangelio/app/calculator" component={Calculator} />
        <Route exact path="/ion-t-evangelio/app/todolist" component={Todolist} />
        <Route exact path="/ion-t-evangelio/app/quotegenerator" component={Quotegenerator} />
        <Route exact path="/ion-t-evangelio/app/notes" component={Notes} />

        <Route exact path="/ion-t-evangelio/app/profile" component={Profile} />
        {/*<Route exact path="/app/page1/details" component={Details} />
        <Route exact path="/app/page2" component={Page2} />*/}
        <Route exact path="/ion-t-evangelio/app">
          <Redirect to="/ion-t-evangelio/app/home" />
        </Route>

      </IonRouterOutlet>
    </IonSplitPane>
  </IonPage>
  );
};

export default Menu;