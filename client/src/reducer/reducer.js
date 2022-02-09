let initialState = {
    names: []
};

const todos = (state = initialState, action) => {
    switch (action.type) {
                
        case 'GET_ALL':
            return {
                ...state,
                names: action.payload
            }

        case 'GET_START':
            return state

        case 'GET_BY_NAME':
            return {
                ...state,
                names: action.payload
            }

        default:
            return state
    }
}

export default todos;