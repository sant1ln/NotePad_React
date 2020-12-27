import React from 'react'
import '../styles/components/search.css'
export const Search = () => {

    const HandleChange = (e) =>{
        console.log(e.target.value);
    }

    return (
        <div className="search-container">
            <form action="">
                <input
                placeholder="Search note..." 
                type="text" 
                onChange={HandleChange}
                name="" 
                id=""/>
            </form>
        </div>
    )
}
