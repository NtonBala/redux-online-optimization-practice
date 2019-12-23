// Core
import { random, internet } from 'faker';

// Types
import { CREATE_POST, REMOVE_POST } from './types';

const initialState = [];

export const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST:
            return [
                ...state,
                {
                    id:      random.uuid(),
                    comment: payload,
                    author:  {
                        name:   internet.userName(),
                        gender:
                            Math.round(Math.random()) === 0 ? 'male' : 'female',
                        likes:
                            Math.round(Math.random()) === 0 ? 'cats' : 'dogs',
                    },
                },
            ];

        case REMOVE_POST:
            return state.filter((post) => post.id !== payload);

        default:
            return state;
    }
};
