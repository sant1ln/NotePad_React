import React from "react";
import { useData } from "../Hooks/useData";
//import { useData } from "../Hooks/useData";
import "../styles/components/listofnotes.css";
import { CreateNote } from "./CreateNote";
import { Note } from "./Note";

export const ListOfNotes = () => {
    
  const {state} = useData()
  const {cart} = state
  console.log(state.actual);
  let title = ''
  let body = ''
  let showingNote = false
  if(state.actual === 'showing'){
    const {temporal} = state
    title = temporal.title
    body = temporal.body
    showingNote = true
  }
  
  return (
    <div className="ListNotes">
      {state.win && <CreateNote 
        titleNote={title} 
        bodyNote={body}
        showingNote={showingNote}
        />}
        {cart.map(note=>(
          <Note key={note.id}
          title={note.title}
          body={note.body}
          />
        ))}
      
    </div>
  );
};
