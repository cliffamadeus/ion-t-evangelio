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
import { trashOutline,pencilOutline} from 'ionicons/icons';

import './notes.css';

// Firebase
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

const Todolist: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLIonTextareaElement>(null);
  const [present] = useIonToast();

  // Clear the input field
  const clearInput = () => {
    setNewNote('');
    if (inputRef.current) {
      inputRef.current.setFocus();
    }
  };

  // Toast
  const addNewTodoToast = (position: 'middle') => {
    present({
      message: 'Added new todo',
      duration: 1500,
      position: position,
    });
  };

  //Load Firebase Data
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      setNotes(snapshot.docs.map(doc => 
      doc.data().description
      ));
    });
    return () => unsubscribe();
  }, []);

  // Add a new to-do when the "Add" button is clicked
  const addNote = () => {
    if (newNote.trim() !== '') {
      if (editIndex !== null) {
        const newTodos = [...notes];
        newTodos[editIndex] = newNote;
        setNotes(newTodos);
        setEditIndex(null);
        
      } else {
        setNotes([...notes, newNote]);
      }
      setNewNote('');
      addNewTodoToast('middle');
    }
  };

  // Remove a to-do when the delete button is clicked
  const removeTodo = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Set the input field for editing when a todo item is clicked
  const editTodo = (index: number) => {
    setNewNote(notes[index]);
    setEditIndex(index);
    if (inputRef.current) {
      inputRef.current.setFocus();
    }
  };

  // Focus on the new to-do input when the component mounts or after editing
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editIndex]);

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
              <IonTextarea 
                placeholder="Type something here"
                id="custom-input"
                labelPlacement="floating"
                counter={true}
                maxlength={200}
                counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} / ${maxLength} characters remaining`}
                value={newNote}
                onIonInput={(e) => setNewNote(e.detail.value!)}
                ref={inputRef}
              ></IonTextarea>

              <IonRow>
                  <IonCol>
                  <IonButton expand="block" onClick={addNote} > {editIndex !== null ? 'Update' : 'Add'}</IonButton>
                  </IonCol>
                  <IonCol> 
                  <IonButton  expand="block"fill="clear"  onClick={clearInput} >Clear</IonButton>
                  </IonCol>      
              </IonRow>    

              {/*Todo list output*/}
              <br></br>
              <IonItemDivider color="light">
                <IonLabel>Notes</IonLabel>
              </IonItemDivider>
              <IonList>
                    {notes.map((description, index) => (
                      <IonItem className="notesresult" key={index}>
                        <IonInput
                          disabled={editIndex !== index}
                          value={description}
                          onIonChange={(e) => setNewNote(e.detail.value!)}
                        ></IonInput>
                        {editIndex === index ? (
                          <IonButton onClick={() => addNote()}>
                            Done
                          </IonButton>
                        ) : (
                          <>
                            <IonButton onClick={() => editTodo(index)}>
                              <IonIcon icon={pencilOutline} />
                            </IonButton>
                            <IonButton onClick={() => removeTodo(index)}>
                              <IonIcon icon={trashOutline} />
                            </IonButton>
                          </>
                        )}
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