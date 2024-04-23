import React, { useState, useEffect, useRef } from 'react';
import {
  //Page defailts
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  //Ionic Card
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  //Ionic buttons
  IonButton, IonBackButton, IonButtons, IonIcon,
  IonCol, IonGrid, IonRow,
  IonInput, IonItem, IonLabel,IonList

} from '@ionic/react';
//Ionicons
import { arrowUndo,caretBack} from 'ionicons/icons';

import './todolist.css';

const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const inputRef = useRef<HTMLIonInputElement>(null);

  // Add a new to-do when the "Add" button is clicked
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  // Remove a to-do when it is clicked
  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Focus on the new to-do input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill="clear">
            Back
          </IonButton>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <h1 className="todolist-title">To do</h1>
                <IonItem>
                  <IonInput
                    className="todolist-title"
                    label=""
                    labelPlacement="stacked"
                    placeholder="Enter to do"
                    value={newTodo}
                    onIonInput={(e) => setNewTodo(e.detail.value!)}
                    ref={inputRef}
                  ></IonInput>
                </IonItem>
                <IonButton expand="block" onClick={addTodo}>
                  Add
                </IonButton>
                <IonList>
                  {todos.map((todo, index) => (
                    <IonItem className="todolist-result" key={index} onClick={() => removeTodo(index)}>
                      {todo}
                    </IonItem>
                  ))}
                </IonList>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Todolist;