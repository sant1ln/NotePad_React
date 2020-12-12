export const cartsReducer = (state,action) => {
    switch(action.type){
        case 'CREATE':
            return{
                ...action.payload,
                state
            }
    }
}
