import React from 'react'
import { useData } from '../Hooks/useData'
import { useForm } from '../Hooks/useForm'
import '../styles/components/createnote.css'
export const CreateNote = ({titleNote,bodyNote,showingNote}) => {
    
    const {createNewNote,toggleWindow} = useData()
    
    const initialState = {
        title: titleNote ||'New note',
        body: bodyNote || 'This is a body of a super note!'
    }

    const buttonValue = showingNote ? 'Edit' : 'Create'

    const [formValues, handleInputChange] = useForm(initialState)

    const {title,body} = formValues

    const createNote = (e) =>{
        e.preventDefault()
        createNewNote(formValues)
    }
    
    return (
        <div className="ListNotes-create">
            <form  className="form-create" onSubmit={createNote}>
                <div className="form-create-input">
                    <input type="text" 
                    name="title"
                    placeholder="title-note"
                    onChange={handleInputChange}
                    value={title}
                    />
                    <i onClick={toggleWindow} className="far fa-window-close exit"></i>
                </div>
                <hr/>
                <textarea 
                    name="body"
                    onChange={handleInputChange}
                    value={body} 
                    
                    />
                <div className="ListNotes-create-buttons">
                    <button type="submit" className="create">{buttonValue}</button>  
                    {showingNote && <button className="delete">Delete</button>}
                </div>
            </form>
      </div>
    )
}
