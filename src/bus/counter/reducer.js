// Types
import { FAKE_INCREMENT, INCREMENT, DECREMENT } from './types';

const initialState = 0;

export const counterReducer = (state = initialState, { type }) => {
    switch (type) {
        case FAKE_INCREMENT:
            return state;

        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        default:
            return state;
    }
};
