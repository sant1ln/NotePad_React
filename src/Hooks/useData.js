import {useContext} from 'react'
import { CardContext } from '../Context/CardContext'
//import initialState from '../initialState'
export const useData = () =>{
       
    
    const {state,dispatch} = useContext(CardContext)  
    const {win} = state
    
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

    const toggleWindow = () =>{
        dispatch({
            type: 'TOGGLE_WINDOW',
            payload:{
                win: !win,
                actual: 'create' 
            }
        })
    }

    const showNote = (title,body) =>{
        dispatch({
            type: 'SHOW_NOTE',
            payload: {title,body} 
        })
    }
    
    return{
        toggleWindow,
        createNewNote,
        showNote,
        state,
    }


}