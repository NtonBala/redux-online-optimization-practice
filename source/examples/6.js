// Core
import { createSelector } from 'reselect';

// Instruments
import appState from '../init/appState.json';
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

log('• −−−−−−−−− •', '1aa395');

console.log('→ janePosts1', janePosts1);
console.log('→ janePosts2', janePosts2);

log(`• recomputations • ${selectJanePosts.recomputations()}`, 'f9d8a7');
