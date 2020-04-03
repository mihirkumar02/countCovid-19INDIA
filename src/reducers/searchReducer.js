const initialState = {
    text: '',
    total: [],
    stateName: [],
    all: []
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
        case 'FETCH_ALL':
            return {
                ...state,
                all: action.payload
            }
        default:
            return state;
    }
}