import { FETCH_QUESTIONS, CHANGE_SCORE, RESET_SCORE } from './types';
import axios from 'axios';

export const fetchQuestions = () => {
    return dispatch => {
        axios.get('https://opentdb.com/api.php?amount=10')
        .then(res => {
            dispatch({
                type: FETCH_QUESTIONS,
                payload: res.data.results
            })
        })
        .catch(err => {
            console.log(err)
        }) 
    }
}

export const changeScore = () => {
    return {
        type: CHANGE_SCORE
    };
};

export const resetScore = () => {
    return {
        type: RESET_SCORE
    };
};