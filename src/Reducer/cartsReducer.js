export const cartsReducer = (state,action) => {
    switch(action.type){
        case 'CREATE_NOTE':
            return{
                cart : [{...action.payload},...state.cart,],
                win: false,
                actual: 'create'
            }
        case 'EDIT_NOTE':
            const id = action.payload.id
            const {cart} = state
            const note = cart.map((cart,i) => {
                if(cart.id === id){
                    cart[i] = action.payload
                }
            })
            console.log(note);
            return{
                ...state,
                win: false
            }
            
        case 'SHOW_NOTE':
                return{
                    ...state,
                    win: true,
                    temporal: action.payload,
                    actual: 'showing'
                }
        case 'TOGGLE_WINDOW':
            return{
                ...state,
                ...action.payload
            }
        default:
            return{
                state
            }
    }
}
