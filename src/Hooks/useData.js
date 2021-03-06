import {useContext} from 'react'
import { CardContext } from '../Context/CardContext'
//import initialState from '../initialState'
export const useData = () =>{
           
    const {state,dispatch} = useContext(CardContext)  
    const {win} = state
    const actualState = state.actual;
    
    const createNewNote = (data) =>{
       let idMaker = Math.round(Math.random()*5000)
       
       dispatch({
           type: 'CREATE_NOTE',
           payload:{
               ...data,
               id:idMaker,
               
           }
       })
    }

    const toggleWindow = (option='showing all') =>{
        dispatch({
            type: 'TOGGLE_WINDOW',
            payload:{
                win: !win,
                actual: option 
            }
        })
    }

    const showNote = (title,body,id) =>{
        dispatch({
            type: 'SHOW_NOTE',
            payload: {title,body,id} 
        })
    }

    const editNote = (data) =>{
        dispatch({
            type: 'EDIT_NOTE',
            payload:{
                ...data
            }
        })
    }

    const deleteNote = (id) =>{
        dispatch({
            type: 'DELETE_NOTE',
            payload:{
                id
            }
        })
    }
    
    const searchNote = (searchWord) =>{
        if(searchWord){
            dispatch({
                type: 'SEARCH',
                payload: searchWord.toLowerCase()
            })
        }else{
            dispatch({
                type: 'RESET'
            })
        }
    }
    const toggleSidebar = (toggle) =>{
        dispatch({type: 'TOGGLE_SIDEBAR',payload: toggle})
    }

    return{
        toggleWindow,
        createNewNote,
        showNote,
        editNote,
        deleteNote,
        searchNote,
        toggleSidebar,
        actualState,
        state,
    }


}