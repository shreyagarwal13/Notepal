import React from "react";
import DeleteIcon from '@material-ui/icons//Delete';


function Note(props){
    return(
        <div className="note-div">
            <div 
                className="delete-div"
                onClick={()=> props.deleteNote(props.id)}>
                <DeleteIcon className="delete"/>
                
            </div>
            <div className="note">
                <h1> {props.title} </h1>
                <p> {props.content} </p>
            </div>
        </div>
    );
}

export default Note;