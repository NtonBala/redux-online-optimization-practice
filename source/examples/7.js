// Core
import { createSelector } from 'reselect';

// Instruments
import appState from '../init/appState';
import { log } from '../helpers';

const getPosts = (state) => state.posts;
const getUsers = (state) => state.users;

const selectJanePosts = createSelector(
    getPosts,
    getUsers,
    (posts, users) => {
        log('→ the result function was recomputed', 'aefd3e');

        const janePosts = posts.filter((post) => {
            const postAuthor = users.find((user) => {
                return user.id === post.author.id;
            });

            return postAuthor.name === 'Jane';
        });

        return janePosts;
    },
);

// Вычисление
console.time('✅ selector computes');
const janePosts1 = selectJanePosts(appState);
console.timeEnd('✅ selector computes');

// Мемоизация
console.time('🎉 selector returns memoized value');
const janePosts2 = selectJanePosts(appState);
console.timeEnd('🎉 selector returns memoized value');

log('• −−−−−−−− •', '1aa395');

console.log('→ janePosts1', janePosts1);
console.log('→ janePosts2', janePosts2);

const newState = { ...appState };

log('• −−−− !! Mutation !! −−−− •', 'FF0000');

// Мутации — это не очень хорошо.
newState.posts.push({
    id:      '012',
    comment: 'Good evening!',
    author:  { id: '321' },
});

/* новое значение не производится из-за мутации */
console.time('🤕 selector returns memoized value');
const janePosts3 = selectJanePosts(newState);
console.timeEnd('🤕 selector returns memoized value');

/* новое значение не производится из-за мутации */
console.time('🤕 selector returns memoized value');
const janePosts4 = selectJanePosts(newState);
console.timeEnd('🤕 selector returns memoized value');

log('• −−−− !! Mutation !! −−−− •', 'FF0000');

console.log('→ janePosts3', janePosts3);
console.log('→ janePosts4', janePosts4);

log(`• recomputations • ${selectJanePosts.recomputations()}`, 'f9d8a7');
