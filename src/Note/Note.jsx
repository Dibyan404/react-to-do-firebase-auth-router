import React, {Component} from 'react';
import FlipMove from 'react-flip-move';
import './Note.css';
import PropTypes from 'prop-types';



class Note extends Component{
    
    constructor(props){
        super(props); // for passing in the parent class
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }
    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(props){
        return(
            <div className="note fade-in">
            
                

                <FlipMove duration={750} easing="ease-out">
                    <p className="noteContent">{ this.noteContent }
                    <span className="closebtn" onClick={() => this.handleRemoveNote(this.noteId)}>
                        &times;
                        </span></p>
                    </FlipMove>
                  
                 {/*<FlipMove duration={750} easing="ease-out">
                        <p className="noteContent">{ this.noteContent }</p>
                    </FlipMove>*/} 
                
            
            </div>
        )
    }
}

Note.protoType={
        noteContent: PropTypes.string,
}

export default Note;