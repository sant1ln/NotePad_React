import React, { useState } from 'react'
import { useData } from '../Hooks/useData'
import '../styles/components/search.css'
export const Search = () => {

    const {searchNote} = useData()
    const [searchValue, setSearchValue] = useState('')
    const HandleChange = (e) =>{
        searchNote(e.target.value)
        setSearchValue(e.target.value);
    }

    const submit = (e) =>{
        e.preventDefault()
        searchNote(searchValue)
    }

    return (
        <div className="search-container">
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
