import React from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, newspaperOutline, logOutOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Home1 from './Home1';


const Menu: React.FC = () => {
  const sidemenuItems = [
    {
      name:'Home1',
      url:'/ion-t-evangelio/app/home1',
      icon:homeOutline
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
                {item.name}
              </IonItem>
            </IonMenuToggle>
          ))}

          <IonButton routerLink="/ion-t-evangelio/" routerDirection="back" expand="full"> 
            Logout  
          </IonButton>
        </IonContent>
      </IonMenu>


      {/* Routers */}
      <IonRouterOutlet id="main">
        
        <Route exact path="/ion-t-evangelio/app/home" component={Home1} />
         {/*<Route exact path="/app/page1" component={Page1} />
        <Route exact path="/app/page1/details" component={Details} />
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