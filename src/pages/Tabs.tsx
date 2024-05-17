import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect, useHistory } from 'react-router';
import { appsOutline, homeOutline, logOutOutline, personOutline, playCircle, radio } from 'ionicons/icons';
import HomePage from './apps/HomePage';
import Login from './Login';
import ProfilePage from './profile/Profile'

function Example() {
  const history = useHistory();

  const handleLogoutClick = () => {
    // Navigate to the desired route and replace the current entry in the history stack
    history.replace('/ion-t-evangelio/');
  };

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/ion-t-evangelio/" component={Login} />
          <Route path="/ion-t-evangelio/home" render={() => <HomePage />} exact={true} />
          <Route path="/ion-t-evangelio/Profile" render={() => <ProfilePage />} exact={true} />
          <Redirect exact from="/ion-t-evangelio/app" to="/ion-t-evangelio/home" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/ion-t-evangelio/home">
            <IonIcon icon={appsOutline} />
            <IonLabel>Apps</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/ion-t-evangelio/Profile">
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="logout" onClick={handleLogoutClick}>
            <IonIcon icon={logOutOutline} />
            <IonLabel>Logout</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}

export default Example;
