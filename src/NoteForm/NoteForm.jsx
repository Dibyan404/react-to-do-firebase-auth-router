import React, { Component } from 'react';
import './NoteForm.css';
import 'antd/dist/antd.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';
//import { Button } from 'antd';
import {Button} from 'antd';
// import Login from '../Login/Login'

class NoteForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			newNoteContent: '',
		},
		this.handleUserInput=this.handleUserInput.bind(this);
		this.writeNote=this.writeNote.bind(this);

	}


		
	handleUserInput(e){
		e.preventDefault();
		//console.log(this);
		this.setState({
			newNoteContent: e.target.value
			//value of text input
		});
	}

	writeNote(){
		// call a method that sets the noteContent for a note to
		// the value of the input and
		this.props.addNote(this.state.newNoteContent);
		//set newNoteContent back to an empty String

			this.setState({
				newNoteContent: '',
			})
	}

	render(){
		return(
			<div className="formWrapper">
                    <div className="add">
                        <input className="noteInput"
                        placeholder="Write a new todo.."
                        value={this.state.newNoteContent}
                        onChange={this.handleUserInput}
                            onfocus="this.value=''"
                         />
                        <button className="noteButton"
                        onClick={ this.writeNote}>
                            ADD
                        </button>
                   </div>
                 
                 <div className="register">
                     <Button color="Primary" Link_to="../Login/Login">Register/Login</Button>

                 </div>
                  
                 
                 	
			</div>
		)	
	}
}

export default NoteForm;