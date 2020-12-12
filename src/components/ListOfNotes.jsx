import React, { useContext} from "react";
import { CardContext } from "../Context/CardContext";
//import { useData } from "../Hooks/useData";
import "../styles/components/listofnotes.css";
import { CreateNote } from "./CreateNote";
import { Note } from "./Note";

export const ListOfNotes = () => {
    


  const {state} = useContext(CardContext)
  console.log(state)
  
  return (
    <div className="ListNotes">
      <CreateNote />
      <div className="ListNotes-notes">
        {state.map(note=>(
          <Note key={note.id}
          title={note.title}
          body={note.body}
          />
        ))}
      </div>
    </div>
  );
};
