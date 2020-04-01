import {SEARCH_STATE, FETCH_STATE, FETCH_TOTAL} from './types';

import axios from 'axios';

export const searchState = text => dispatch => {
    dispatch({
        type: SEARCH_STATE,
        payload: text
    })
}

export const fetchState = text => dispatch => {
    axios.get(`https://covid19-india-adhikansh.herokuapp.com/state/${text}`)
        .then(res => dispatch({
            type: FETCH_STATE,
            payload: res.data.data
        }))
        .catch(err => console.log("Error is: " + err));
}

export const fetchTotal = () => dispatch => {
    axios.get("https://covid19-india-adhikansh.herokuapp.com/summary")
        .then(res => dispatch({
            type: FETCH_TOTAL,
            payload: res.data
        }))
        .catch(err => console.log("Error is:" + err));
}