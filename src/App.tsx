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

import Home from './pages/Home';
import Login from './pages/Login';
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

          <Route exact path="/ion-t-evangelio/home">
            <Home />
          </Route>

          <Route exact path="/ion-t-evangelio/home/profile">
            <Profile />
          </Route>
          <Route exact path="/ion-t-evangelio/home/clickcounter">
            <ClickCounter />
          </Route>
          <Route path="/ion-t-evangelio/home/calculator">
            <Calculator />
          </Route>

          <Route path="/ion-t-evangelio/home/todolist">
            <Todolist />
          </Route>

          <Route path="/ion-t-evangelio/home/quotegenerator">
            <QuoteGenerator />
          </Route>

          <Route path="/ion-t-evangelio/home/notes">
            <Notes />
          </Route>

        </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
