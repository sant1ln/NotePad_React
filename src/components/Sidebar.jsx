import React from 'react'
import { DummyNotes } from './DummyNotes'
import '../styles/components/sidebar.css'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-title">
                <h1>React Notes</h1>
            </div>
            <div className="sidebar-control">
                <button 
                className="sidebar-control-btn">
                    <h3>Create note +</h3></button>
                <hr/>
            </div>
            <div className="sidebar-notes">
                <DummyNotes />
                <DummyNotes />
                <DummyNotes />
                <DummyNotes />
                <DummyNotes />
            </div>
            
            
        </div>
    )
}
