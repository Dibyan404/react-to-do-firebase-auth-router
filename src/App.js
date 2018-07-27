import React, { Component } from 'react';
import Note from './Note/Note';

import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import NoteForm from './NoteForm/NoteForm';

import './App.css';

class App extends Component {
    constructor(props){
        
        super(props);
        this.addNote=this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.app = firebase.initializeApp(DB_CONFIG);
        this.db=this.app.database().ref().child('notes');
        //this statement refers to our application and ref gives
        //us the location to which we will be writting queries
        this.state={
            notes: [
                // {id: 1, noteContent: "Give Food to the Dog"},
                // {id: 2, noteContent: "Make Food"},
            ],
            authenticated: false
        }


    }

    componentWillMount(){
        const previousNotes = this.state.notes;
        this.db.on('child_added',snap => {
            previousNotes.push({
                id: snap.key,
                noteContent: snap.val().noteContent,
            })

            this.setState({
                notes: previousNotes
            })

        })
        
        this.db.on('child_removed', snap =>{
            for( var i=0; i<previousNotes.length; i++){
               if(previousNotes[i].id === snap.key){
                   previousNotes.splice(i,1);
                   
               }
                this.setState({
                    notes:previousNotes
                })
            }
        })
    }

    addNote(note){

        this.db.push().set({noteContent: note});
        //push the note onto the notes array.
        // const previousNotes = this.state.notes;
        // previousNotes.push({id: previousNotes.length+1, noteContent: note});

        // this.setState({
        //     notes: previousNotes
        // })
        

    }
    removeNote(noteId){
        this.db.child(noteId).remove();
    }



  render() {
    return (
        <div className="notesWrapper" authenticated={this.state.authenticated} >
            
            <div className="notesHeader">
                <h1 class="heading"> Hello User! </h1>
            </div>
        
        
       
            <div className="notesBody">
            {
                this.state.notes.map((note) => {
                    return(
                        <Note noteContent = {note.noteContent} noteId={note.id} key={note.id} removeNote={ this.removeNote } />
                    )
            
                })
                
            }
            </div>

        
        
            <div className="notesFooter">
                <NoteForm addNote={this.addNote} />
            </div>
            
            
        

        </div>
       
    );
  }
}

export default App;
