import React, {useState} from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import Input from "./Input.jsx";

function App(){

   
    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNotes=>{
            return([
                ...prevNotes, 
                note
            ])
        })
    }

    function deleteNote(id){
        setNotes(prevNotes=>{
            return(prevNotes.filter((item, i)=>{
                return i!==id;
            }));
        })
    }


    return(
        <div>
            <div className="top-box">
                <Header />
                <Input addNote = {addNote} />
                <div className="notes">
                    {notes.map((props, i)=> <Note 
                        key={i}
                        id = {i}
                        title = {props.title}
                        content = {props.content}
                        deleteNote = {deleteNote}
                    /> )}
                </div>
                
            </div>
            
            <Footer />
        </div>
    );
}


export default App;