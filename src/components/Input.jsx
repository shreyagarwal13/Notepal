import React, {useState} from "react";
import Zoom from '@material-ui/core/Zoom';
import Collapse from '@material-ui/core/Collapse';
import AddIcon from '@material-ui/icons/Add';

function Input(props){
    const [inputNote, setInputNote] = useState({
        title:"",
        content:""
    });

    function inputChange(event){
        const {name, value} = event.target;
        setInputNote(prevValue=> {
            return {
                ...prevValue, 
                [name]: value
            }
        });
    }
    const [takeNote, setTakeNote]= useState(false);
    return(
        <div className="input-div">
            <div className="input-form">
                <Collapse in={takeNote}>
                    <input 
                        onChange={inputChange} 
                        name="title" 
                        id="title" 
                        placeholder="Title" 
                        value={inputNote.title}></input>
                </Collapse>
                
                <textarea 
                    onClick={()=>setTakeNote(true)}
                    onChange={inputChange} 
                    name="content" 
                    rows= {takeNote? "5" : "1"}
                    id="content" 
                    placeholder="Take a note..." 
                    value={inputNote.content}></textarea>
                <Zoom in={takeNote}>
                    <button
                        onClick={()=> {props.addNote(inputNote);}}>
                        <AddIcon className="add-icon" />
                    </button>
                </Zoom>
            </div>
        </div>
    );
}

export default Input;