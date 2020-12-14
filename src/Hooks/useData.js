import {useContext} from 'react'
import { CardContext } from '../Context/CardContext'
//import initialState from '../initialState'
export const useData = () =>{

    
    
    const {state,setState} = useContext(CardContext)  

   // const id = Math.floor(Math.random() *5000)+1
    const createNote = () =>{
        let id = state[0].id + 5
        setState([
            {
                id: id,
                body: 'Body text',
                title: 'title',
                win: true,
            },
            ...state
        ])      
        
    }
    
    return{
        createNote,
        state,
    }


}