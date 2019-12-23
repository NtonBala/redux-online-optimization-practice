// Instruments
import appState from '../init/appState.json';

/* это — селектор ↓ */
const selectPosts = (state) => state.posts;

/* это — тоже селектор ↓ */
const selectJanePosts = (state) => {
    const janePosts = state.posts.filter((post) => {
        const postAuthor = state.users.find((user) => {
            return user.id === post.author.id;
        });

        return postAuthor.name === 'Jane';
    });

    return janePosts;
};

const posts = selectPosts(appState);
const janePosts = selectJanePosts(appState);

console.log('→ posts', posts);
console.log('→ posts by Jane', janePosts);
