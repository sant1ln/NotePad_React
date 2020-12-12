import React from 'react'
import { DummyNotes } from './DummyNotes'
import '../styles/components/sidebar.css'
import { useData } from '../Hooks/useData'

export const Sidebar = () => {
    const {state,createNote} = useData()
    return (
        <div className="sidebar">
            <div className="sidebar-title">
                <h1>React Notes</h1>
            </div>
            <div className="sidebar-control">
                <button 
                onClick={createNote}
                className="sidebar-control-btn">
                    <h3>Create note +</h3></button>
                <hr/>
            </div>
            <div className="sidebar-notes">
                {
                    state.map(({id,title}) =>(
                        <DummyNotes
                            key={id}
                            title={title}
                        />
                    ))
                }
                
                
            </div>
            
            
        </div>
    )
}
