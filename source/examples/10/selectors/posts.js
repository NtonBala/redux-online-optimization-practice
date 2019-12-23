// Core
import { createSelector } from 'reselect';

// Instruments
import { log } from '../../../helpers';

const filterPostsByPreference = (posts, users, like) => {
    const filteredPosts = posts.filter((post) => {
        const postAuthor = users.find((user) => {
            return user.id === post.author.id;
        });

        return postAuthor.likes === like;
    });

    return filteredPosts.map((post) => {
        return {
            ...post,
            author: {
                ...post.author,
                likes: users.find((user) => user.id === post.author.id).likes,
            },
        };
    });
};

// Memoized selector
const getPosts = (state) => state.posts;
const getUsers = (state) => state.users;
const getPreferenceFromProps = (_, props) => props.byLikersOf;

export const selectPosts = createSelector(
    [ getPosts, getUsers, getPreferenceFromProps ],
    (posts, users, like) => {
        log(`selectPosts selector of '${like}' instance computed`, '9f49fe');

        return filterPostsByPreference(posts, users, like);
    },
);

export const makeSelectPosts = () => {
    return createSelector(
        [ getPosts, getUsers, getPreferenceFromProps ],
        (posts, users, like) => {
            log(
                `selectPosts selector of '${like}' instance computed`,
                '9f49fe',
            );

            return filterPostsByPreference(posts, users, like);
        },
    );
};
