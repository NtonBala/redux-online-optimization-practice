// Instruments
import appState from '../init/appState';

/* это — тоже селектор ↓ */
const selectJanePosts = (state) => state.posts.filter((post) => post.author.name === 'Jane');

const janePosts = selectJanePosts(appState);

console.log('→ posts by Jane', janePosts);
