import React from 'react'
import { useData } from '../Hooks/useData'
import '../styles/components/dummynotes.css'

export const DummyNotes = ({title,id,body}) => {
    const {showNote} = useData()
    const handleShowNote = () => {
        showNote(title,body,id)
    }
    return (
        <div 
        onClick={handleShowNote}
        className="dummy-container">
            <h4>{title}</h4>
        </div>
    )
}
