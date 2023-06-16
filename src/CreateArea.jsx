import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const [newNote , setNewNote] = useState({  icerik : "" , baslik : ""});
    const [isclicked , setclicked] = useState(false);

    function handleChange(event){
        const {name , value} = event.target;
        setNewNote(prevNote => {
            return {
              ...prevNote,
              [name]: value
            };
          });
    }
    
    

    function Yazialani(){
        setclicked(true);
        console.log(isclicked);
    }

  return (
    <div>
      <form className="create-note">
        <input 
        name="baslik"
        onChange={handleChange}
        value={newNote.baslik}
        placeholder="Title" 
        onClick = {Yazialani}
        />
       {isclicked ? <div><textarea
        name="icerik"
        value={newNote.icerik}
        onChange={handleChange}
        placeholder="Take a note..." rows="3" />
        <Zoom in={true}>
        <Fab onClick={(event) =>{
            props.onAdd(newNote);
            setNewNote({
                baslik: "" , 
                icerik: ""
            });
            event.preventDefault();
        }}>  <AddIcon></AddIcon>   </Fab> 
        </Zoom> </div>: null}
      </form>
    </div>
  );
}

export default CreateArea;
