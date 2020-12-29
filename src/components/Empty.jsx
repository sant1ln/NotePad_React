import React from 'react'
import EmptyImage from '../assets/empty.svg'
import { useData } from '../Hooks/useData'
import '../styles/components/empty.css'


export const Empty = () => {
    const {toggleWindow} = useData()


    return (
        <div className="container_empty">
            <img src={EmptyImage} alt=""/>
            <div className="container_empty-text">
                <p>No notes :(<br/>
                create one now!</p>
                <button onClick={()=>toggleWindow('creating')}>
                    Create
                </button>
            </div>
        </div>
    )
}
