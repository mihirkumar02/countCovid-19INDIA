const initialState = {
    text: '',
    total: [],
    stateName: []
}

export default function(state = initialState, action){
    switch(action.type){
        case 'SEARCH_STATE':
            return {
                ...state,
                text: action.payload
            };
        case 'FETCH_STATE':
            return{
                ...state,
                stateName: action.payload
            };
        case 'FETCH_TOTAL':
            return{
                ...state,
                total: action.payload
            }
        default:
            return state;
    }
}