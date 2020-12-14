import React, { useContext} from "react";
import { CardContext } from "../Context/CardContext";
//import { useData } from "../Hooks/useData";
import "../styles/components/listofnotes.css";
import { CreateNote } from "./CreateNote";
import { Note } from "./Note";

export const ListOfNotes = () => {
    
  /* const [toggleWin, setToggleWin] = useState(true) */
  
  const {state,setState} = useContext(CardContext)
  

  const toggleWindow = () =>{
    setState([{
      ...state,
      win: false,
    }])
  }
  
  return (
    <div className="ListNotes">
      {state[0].win && <CreateNote toggleWindow={toggleWindow} />}
        {state.map(note=>(
          <Note key={note.id}
          title={note.title}
          body={note.body}
          />
        ))}
      
    </div>
  );
};
