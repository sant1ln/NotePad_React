export const cartsReducer = (state,action) => {
    switch(action.type){
        case 'CREATE_NOTE':
            return{
                cart : [{...action.payload},...state.cart,],
                win: false,
                actual: 'create'
            }
        case 'TOGGLE_WINDOW':
            return{
                ...state,
                ...action.payload
            }
        case 'SHOW_NOTE':
            return{
                ...state,
                win: true,
                temporal: action.payload,
                actual: 'showing'
            }
        default:
            return{
                state
            }
    }
}
