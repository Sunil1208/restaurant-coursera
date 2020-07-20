import {DISHES} from '../shared/dishes';
import {COMMENTS } from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

//Initial configuration of the state
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

//setting up Reducer
export const Reducer = (state = initialState, action) => {
    return state;
}