// Core
import { lorem } from 'faker';

// Types
import { CREATE_POST, REMOVE_POST } from './types';

export const createPost = () => ({
    type:    CREATE_POST,
    payload: lorem.sentence(3),
});

export const removePost = (postId) => ({
    type:    REMOVE_POST,
    payload: postId,
});
