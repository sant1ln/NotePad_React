import React, { useState } from 'react'
import { useData } from '../Hooks/useData'
import '../styles/components/search.css'
export const Search = () => {

    const {searchNote,toggleSidebar} = useData()
    const [searchValue, setSearchValue] = useState('')
    const HandleChange = (e) =>{
        searchNote(e.target.value)
        setSearchValue(e.target.value);
    }

    const submit = (e) =>{
        e.preventDefault()
        searchNote(searchValue)
    }

    const openModal = () =>{
        toggleSidebar(true)
    }

    return (
        <div className="search-container">
            <div className="button_open"
                onClick={openModal}
            >
                <i className="fas fa-list-ul"></i>
            </div>
            <form onSubmit={submit}>
                <input
                placeholder="Search note..." 
                type="text" 
                onChange={HandleChange}
                value={searchValue}
                name="" 
                id=""/>
            </form>
        </div>
    )
}
