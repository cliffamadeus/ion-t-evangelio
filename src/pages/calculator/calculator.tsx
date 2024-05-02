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
import ExploreContainer from '../../components/ExploreContainer';
import './calculator.css';

const Calculator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  // Function to handle button clicks
  const handleButtonClick = (value: string) => {
    setInputValue(prevValue => prevValue + value);
  };

  // Function to clear the input
  const clearInput = () => {
    setInputValue('');
  };

  // Function to perform calculation
  const calculateResult = () => {
    try {
      const result = eval(inputValue); // Using eval() for simplicity, but be cautious with security implications
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/home'/>
           </IonButtons>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonItem>
              <IonInput className="ion-text-right" ></IonInput>
            </IonItem>
            <IonGrid fixed={true} className="calculator-grid">
               <IonRow className="calculator-row">
                  <IonCol>
                    <IonButton expand="full" className="calculator-button" onClick={() => clearInput()}>C</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton expand="full" className="calculator-button" onClick={() => handleButtonClick('+/-')}>+/-</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton expand="full" className="calculator-button" onClick={() => handleButtonClick('%')}>%</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton expand="full" className="calculator-button" onClick={() => handleButtonClick('/')}>÷</IonButton>
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
                          <IonButton expand="full" className="calculator-button">*</IonButton>
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
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">1</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">2</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">3</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand="full" className="calculator-button">4</IonButton>
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

export default Calculator;
