import React from 'react'
import { ListOfNotes } from '../components/ListOfNotes'
import { Search } from '../components/Search'
import { Sidebar } from '../components/Sidebar'

import '../styles/containers/home.css'

export const Home = () => {
    return (
        <div className="main">
            <Sidebar/>
            <div className="main-content">
                <Search />
                <div className="main-content-list">
                    <ListOfNotes />
                </div>
            </div>
        </div>
    )
}
