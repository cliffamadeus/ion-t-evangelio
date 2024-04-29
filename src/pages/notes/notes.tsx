import React, { useState, useEffect, useRef } from 'react';
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
  IonTextarea,
  useIonToast
} from '@ionic/react';
//Ionicons
import { trashOutline, pencilOutline } from 'ionicons/icons';

import './notes.css';

// Firebase
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

const Todolist: React.FC = () => {
  const [notes, setNotes] = useState<{ title: string; description: string; }[]>([]);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const inputRefTitle = useRef<HTMLIonTextareaElement>(null);
  const inputRefDescription = useRef<HTMLIonTextareaElement>(null);
  const [present] = useIonToast();

  // Clear the input field
  const clearInput = () => {
    setNewTitle('');
    setNewDescription('');
    if (inputRefTitle.current && inputRefDescription.current) {
      inputRefTitle.current.setFocus();
    }
  };

  useEffect(() => {
    if (inputRefTitle.current && inputRefDescription.current) {
      inputRefTitle.current.setFocus();
    }
  }, [editIndex]);

  // Toast
  const addNewTodoToast = (position: 'middle') => {
    present({
      message: 'Added new Note',
      duration: 500,
      position: position,
    });
  };

  //Load Firebase Data
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'notes'), (snapshot) => {
      setNotes(snapshot.docs.map(doc => ({
        description: doc.data().description,
        title: doc.data().title,
      })));
    });
    return () => unsubscribe();
  }, []);

  // Add a new to-do when the "Add" button is clicked
  const addNote = async () => {
    if (newTitle.trim() !== '') {
      if (editIndex !== null) {
        // Update existing note (not implemented in this code snippet)
      } else {
        addNewTodoToast('middle');
        await addDoc(collection(db, 'notes'), {
          title: newTitle,
          description: newDescription
        });
        
      }
      clearInput();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill="clear" href='/'>
            Back
          </IonButton>
          <IonTitle>Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
        <IonGrid>
          <IonRow>
            <IonCol>

             {/*Todo list output*/}
             <IonList>
             
              <IonTextarea 
                  placeholder="Type something here"
                  label="Title"
                  id="custom-input"
                  labelPlacement="floating"
                  counter={true}
                  maxlength={50}
                  counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} / ${maxLength} characters remaining`}
                  value={newTitle}
                  onIonInput={(e) => setNewTitle(e.detail.value!)}
                  ref={inputRefTitle}
                ></IonTextarea>
         
                <IonTextarea 
                  placeholder="Type something here"
                  label="Description"
                  id="custom-input"
                  labelPlacement="floating"
                  counter={true}
                  maxlength={200}
                  counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} / ${maxLength} characters remaining`}
                  value={newDescription}
                  onIonInput={(e) => setNewDescription(e.detail.value!)}
                  ref={inputRefDescription}
                ></IonTextarea>
                
              <IonRow>
                  <IonCol>
                  <IonButton expand="block" onClick={addNote} > {editIndex !== null ? 'Update' : 'Add'}</IonButton>
                  </IonCol>
                  <IonCol> 
                  <IonButton  expand="block"fill="clear"  onClick={clearInput} >Clear</IonButton>
                  </IonCol>      
              </IonRow>      
            </IonList>

           {/*Todo list output*/}
              <br></br>
              <IonItemDivider color="light">
                <IonLabel>Notes</IonLabel>
              </IonItemDivider>
              <IonList>
                  {notes.map((note, index) => (
                    <IonItem key={index}>
                      <IonLabel>
                        <h2>{note.title}</h2>
                        <p>{note.description}</p>
                      </IonLabel>
                      <IonButton fill="clear">
                        <IonIcon icon={pencilOutline} />
                      </IonButton>
                      <IonButton fill="clear">
                        <IonIcon icon={trashOutline} />
                      </IonButton>
                    </IonItem>
                  ))}
              </IonList>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Todolist;
