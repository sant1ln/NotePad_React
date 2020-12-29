import React from 'react'
import { DummyNotes } from './DummyNotes'
import '../styles/components/sidebar.css'
import { useData } from '../Hooks/useData'

export const Sidebar = () => {
    const {state,toggleWindow,toggleSidebar} = useData() 
    const {cart} = state
    const {sidebar} = state
    const closeModal = () =>{
        toggleSidebar(false)
    }
   /*  const {state} = cart */
    return (
        <div className={`sidebar ${(sidebar)? 'show' : 'hide' }`}>
            <div className="sidebar-title">
                <h1>React Notes</h1>
                <i className="far fa-times-circle exit-btn"
                onClick={closeModal}
                ></i>
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
