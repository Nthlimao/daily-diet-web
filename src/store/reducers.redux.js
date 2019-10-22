const INITIAL_STATE = {
    lastDaily: null
}

export const mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'STORE_NEW_DAILY':
            return { ...state, lastDaily: action.daily };
    
        default:
            return state;
    }
}