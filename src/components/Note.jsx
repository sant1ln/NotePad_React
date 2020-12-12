import React from 'react'
import '../styles/components/note.css'
export const Note = ({title,body}) => {
    return (
        <div className="note">
            <div className="note-title">
                <h2>{title}</h2>
            </div>
            <hr/>
            <div className="note-body">
                <p>
                    {body}
                </p>
            </div>
            <hr/>
            <div className="note-controls">
                <p>Edit</p>
                <p>Delete</p>
                <p>Share</p>
            </div>
        </div>
    )
}
