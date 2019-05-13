// Instruments
import appState from '../init/appState';

const selectPosts = (state) => state.posts;

/* это — селектор ↓ */
const posts = selectPosts(appState);

console.log('→ posts', posts);
