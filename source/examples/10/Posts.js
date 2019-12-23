// Core
import React from 'react';
import { connect } from 'react-redux';

// Instruments
import { log } from '../../helpers';
import { selectPosts } from './selectors/posts';
import * as postsActions from '../../bus/posts/actions';

// const makeMapStateToProps = () => {
//     const selectPosts = makeSelectPosts();

/* ↓ mapStateToProps ↓ */
const mapStateToProps = (state, props) => {
    log('MSTP is called: Posts', '9f49fe');

    console.time(`selectPosts selector for '${props.byLikersOf}' instance`);
    const posts = selectPosts(state, props);
    console.timeEnd(`selectPosts selector for '${props.byLikersOf}' instance`);

    return { posts };
};

//     return mapStateToProps;
// };

export const Posts = connect(
    mapStateToProps,
    postsActions,
)((props) => {
    const _createPost = () => props.createPost();

    log(
        `render method is called: Posts '${props.byLikersOf}' instance`,
        '9f49fe',
    );

    const postsJSX = props.posts.map((post) => (
        <li key = { post.id }>
            <button onClick = { () => props.removePost(post.id) }>Remove</button>
            <b>{post.author.name}</b> said: {post.comment}. I like{' '}
            {post.author.likes}.
        </li>
    ));

    return (
        <>
            <h1>Posts by those who likes {props.byLikersOf}.</h1>
            <button onClick = { _createPost }>Create post</button>
            <ul>{postsJSX}</ul>
        </>
    );
});
