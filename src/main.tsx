import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { IonNav } from '@ionic/react';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);