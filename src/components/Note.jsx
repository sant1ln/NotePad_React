import React from 'react'
import { useData } from '../Hooks/useData'
import '../styles/components/note.css'
export const Note = ({title,body,id}) => {
    const {showNote} = useData()
    return (
        <div onClick={()=>showNote(title,body,id)} 
        className="note">
            <div className="note-title">
                <h2>{title}</h2>
            </div>
            <hr/>
            <div className="note-body">
                <p>
                    {body}
                </p>
            </div>
        </div>
    )
}
