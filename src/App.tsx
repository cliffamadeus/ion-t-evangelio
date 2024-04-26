import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, ellipse, home, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';

import Home from './pages/home';
import Profile from './pages/profile/profile';
import ClickCounter from './pages/clickcounter/clickcounter'; 
import Calculator from './pages/calculator/calculator';
import Todolist from './pages/todolist/todolist';
import QuoteGenerator from './pages/quotegenerator/quotegenerator';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          {/* Application default route */}
           <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/clickcounter">
            <ClickCounter />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>

          <Route path="/todolist">
            <Todolist />
          </Route>

          <Route path="/quotegenerator">
            <QuoteGenerator />
          </Route>

        </IonRouterOutlet>

      {/* Tab Buttons */}
        <IonTabBar slot="bottom">

          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
       
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
      
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
