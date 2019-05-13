// Core
import { createSelector } from 'reselect';

// Instruments
import { log } from '../../../helpers';

const filterPostsByPreference = (posts, like) => {
    switch (like) {
        case 'cats':
            return posts.filter((post) => post.author.likes === 'cats');

        case 'dogs':
            return posts.filter((post) => post.author.likes === 'dogs');

        default:
            return posts;
    }
};

// Memoized selector
const extractPosts = (state) => state.posts;
const extractPreferenceFromProps = (_, props) => props.byLikersOf;

export const selectPosts = createSelector(
    [ extractPosts, extractPreferenceFromProps ],
    (posts, like) => {
        log(`selectPosts selector of '${like}' instance computed`, '9f49fe');

        return filterPostsByPreference(posts, like);
    },
);

export const makeSelectPosts = () => {
    return createSelector(
        [ extractPosts, extractPreferenceFromProps ],
        (posts, like) => {
            log(`makeSelectPosts selector of '${like}' computed`, '9f49fe');

            return filterPostsByPreference(posts, like);
        },
    );
};
