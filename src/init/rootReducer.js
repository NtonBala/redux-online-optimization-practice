// Core
import { combineReducers } from 'redux';

// Instruments
import { counterReducer as counter } from '../bus/counter/reducer';
import { postsReducer as posts } from '../bus/posts/reducer';
import { usersReducer as users } from '../bus/users/reducer';

export const rootReducer = combineReducers({
    counter,
    posts,
    users,
});
