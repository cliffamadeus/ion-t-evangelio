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

import Tabs from './pages/Tabs';
import Login from './pages/Login';
import Applets from './pages/applets/Applets';
import Profile from './pages/profile/Profile';
import ClickCounter from './pages/clickcounter/Clickcounter'; 
import Calculator from './pages/calculator/Calculator';
import Todolist from './pages/todolist/Todolist';
import QuoteGenerator from './pages/quotegenerator/Quotegenerator';
import Notes from './pages/notes/Notes';

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
    <IonRouterOutlet>
          
          {/* Application default route */}
           <Route exact path="/ion-t-evangelio/">
            <Redirect to="/ion-t-evangelio/Login" />
          </Route>

          <Route exact path="/ion-t-evangelio/Login">
            <Login />
          </Route>

          <Route exact path="/ion-t-evangelio/Tabs">
            <Tabs />
          </Route>

          <Route exact path="/ion-t-evangelio/Applets">
            <Applets />
          </Route>
          
          <Route exact path="/ion-t-evangelio/Applets/Profile">
            <Profile />
          </Route>
          <Route exact path="/ion-t-evangelio/Applets/Clickcounter">
            <ClickCounter />
          </Route>
          <Route path="/ion-t-evangelio/Applets/Calculator">
            <Calculator />
          </Route>

          <Route path="/ion-t-evangelio/Applets/Todolist">
            <Todolist />
          </Route>

          <Route path="/ion-t-evangelio/Applets/Quotegenerator">
            <QuoteGenerator />
          </Route>

          <Route path="/ion-t-evangelio/Applets/Notes">
            <Notes />
          </Route>

        </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
