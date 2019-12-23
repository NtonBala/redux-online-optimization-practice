// Instruments
import appState from '../init/appState.json';

const selectPosts = (state) => state.posts;
const selectUsers = (state) => state.users;

/* это — селекторы ↓ */
const posts = selectPosts(appState);
const users = selectUsers(appState);

console.log('→ posts', posts);
console.log('→ users', users);
