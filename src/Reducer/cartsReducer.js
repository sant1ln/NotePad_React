export const cartsReducer = (state,action) => {
    switch(action.type){
        case 'CREATE_NOTE':
            return{
                ...state,
                cart : [{...action.payload},...state.cart,],
                win: false,
                actual: 'showing all'
            }
        case 'EDIT_NOTE':
            const {cart} = state
            return{
                ...state,
                cart : cart.map(
                 note => (note.id === action.payload.id) ? action.payload : note
                ),
                temporal: [],
                win: false,
                actual: 'showing all'
            }
        case 'DELETE_NOTE':
            return{
                ...state,
                cart: state.cart.filter(
                    note => (note.id !== action.payload.id)
                ),
                temporal: [],
                win: false,
                actual: 'showing all'
            }          
            
        case 'SHOW_NOTE':
                return{
                    ...state,
                    temporal: action.payload,
                    win: true,
                    actual: 'showing'
                }
        case 'TOGGLE_WINDOW':
            return{
                ...state,
                ...action.payload,
                temporal: [],
            }
        case 'SEARCH':
            return{
                ...state,
                searched: state.cart.filter((note) => note.title.toLowerCase().includes(action.payload)),
                temporal: [],
                actual: 'showing all'
            }
        case 'RESET':
            return{
                ...state,
                searched: [],
                temporal: [],
                actual: 'showing all'
            }
        case 'TOGGLE_SIDEBAR':
            return{
                ...state,
                sidebar: action.payload
            }
        default:
            return{
                state
            }
    }
}
