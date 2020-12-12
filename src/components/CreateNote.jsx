import React from 'react'
import '../styles/components/createnote.css'
export const CreateNote = () => {
    return (
        <div className="ListNotes-create">
            <form action="">
                <input type="text" 
                placeholder="title-note"/>
                <hr/>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="ListNotes-create-buttons">
                    <button>Create</button>  
                    <button>Delete</button>
                </div>
            </form>
      </div>
    )
}
