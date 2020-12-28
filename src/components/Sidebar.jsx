import React from 'react'
import { DummyNotes } from './DummyNotes'
import '../styles/components/sidebar.css'
import { useData } from '../Hooks/useData'

export const Sidebar = () => {
    const {state,toggleWindow} = useData() 
    const {cart} = state
    
   /*  const {state} = cart */
    return (
        <div className="sidebar">
            <div className="sidebar-title">
                <h1>React Notes</h1>
            </div>
            <div className="sidebar-control">
                <button 
                onClick={()=>toggleWindow('creating')}
                className="sidebar-control-btn">
                    <h3>Create note +</h3></button>
                <hr/>
            </div>
            <div className="sidebar-notes">
               
                {
                   
                    cart.map(({id,title,body}) =>(
                        <div key={id}>
                            <DummyNotes
                                id={id}
                                body={body} 
                                title={title}
                            />
                        </div>
                    ))
                }
                
                
            </div>
            
            
        </div>
    )
}
