import { FETCH_QUESTIONS, CHANGE_SCORE, RESET_SCORE } from '../actions/types';

const INITIAL_STATE = {
    questions:[],
    score: 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_QUESTIONS:
            return {...state, questions: action.payload}
        case CHANGE_SCORE:
            return {...state, score: state.score +1}
        case RESET_SCORE:
            return {...state, score: 0}
        default:
            return state
    }
}
