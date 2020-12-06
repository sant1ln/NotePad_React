import React from 'react'
import '../styles/components/note.css'
export const Note = () => {
    return (
        <div className="note">
            <div className="note-title">
                <h2>Note title</h2>
            </div>
            <hr/>
            <div className="note-body">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <hr/>
            <div className="note-controls">
                <smal>Edit</smal>
                <smal>Delete</smal>
                <smal>Share</smal>
            </div>
        </div>
    )
}
