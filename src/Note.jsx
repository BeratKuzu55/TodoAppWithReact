import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }
    return <div className="note">
        <h1>{props.baslik}</h1>
        <p>{props.icerik}</p>
        <button onClick={handleClick}><DeleteIcon /> </button>
    </div>
}

export default Note;