import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import GetNotes from "./notes";
import CreateArea from "./CreateArea";
import { useState } from "react";

var notes = GetNotes();


function App(){

    const [items , setItems] = useState([]);

    function addItem(newNote){
        setItems((previusNotes) =>{
            return [...previusNotes , newNote]
        });
    }

    function deleteNote(id){
        setItems(previusNotes => {
            return previusNotes.filter((item , index) => {
                return index !== id;
            })
        })
    }
    return <div>
        <Header></Header>
        <CreateArea 
            onAdd = {addItem}
        />
        
        { /*notes.map((props)=>{
            return <Note 
                key = {props.key} 
                baslik = {props.title}
                icerik = {props.content}
            />
        }) */}

        {items.map((item , id ) =>{
            return <Note 
                id = {id}
                key = {id}
                baslik = {item.baslik}
                icerik = {item.icerik}
                onDelete = {deleteNote}
            />
        })}
        <Footer></Footer>
    </div>
}


export default App;