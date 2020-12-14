import React from 'react'
import '../styles/components/createnote.css'
export const CreateNote = ({toggleWindow}) => {
    
    return (
        <div className="ListNotes-create">
            <form  className="form-create" action="">
                <div className="form-create-input">
                    <input type="text" 
                    placeholder="title-note"/>
                    <i onClick={toggleWindow} class="far fa-window-close exit"></i>
                </div>
                <hr/>
                <textarea name="" id="" cols="30" rows="10"/>
                <div className="ListNotes-create-buttons">
                    <button className="create">Create</button>  
                    <button className="delete">Delete</button>
                </div>
            </form>
      </div>
    )
}
