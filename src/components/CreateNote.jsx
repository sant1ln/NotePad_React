import React from "react";
import { useData } from "../Hooks/useData";
import { useForm } from "../Hooks/useForm";
import "../styles/components/createnote.css";
export const CreateNote = ({ titleNote, bodyNote, showingNote,id }) => {
  const { createNewNote, editNote, toggleWindow,deleteNote } = useData();

  const initialState = {
    title: titleNote || "New note",
    body: bodyNote || "This is a body of a super note!",
  };

  const [formValues, handleInputChange] = useForm(initialState);

  const { title, body } = formValues;

  const createNote = () => {
     createNewNote(formValues);
  };

  const edit = () =>{
      editNote({...formValues,id})
  }

  const deleteActualNote = () =>{
    deleteNote(id)
  }

  return (
    <div className="ListNotes-create animate__animated animate__fadeInLeft">
      <form className="form-create" >
        <div className="form-create-input">
          <input
            type="text"
            name="title"
            placeholder="title-note"
            onChange={handleInputChange}
            value={title}
          />
          <i onClick={toggleWindow} className="far fa-window-close exit"></i>
        </div>
        <hr />
        <textarea name="body" onChange={handleInputChange} value={body} />
        <div className="ListNotes-create-buttons">

          
          {!showingNote && (
            <button type="button" className="create" onClick={createNote}>
            Create
            </button>
          )}
          {showingNote && (
            <button type="button" className="create"  onClick={edit}>
              Edit
            </button>
          )}
          {showingNote && (
            <button type="button" className="delete" onClick={deleteActualNote}>
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
