// Core
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Instruments
import { log } from '../../helpers';
import { selectPosts, makeSelectPosts } from './selectors/posts';

import * as postsActions from '../../bus/posts/actions';

const mapStateToProps = (state, props) => {
    log('MSTP is called: Posts', '9f49fe');

    console.time(`selectPosts selector for '${props.byLikersOf}' instance`);
    const posts = selectPosts(state, props);
    console.timeEnd(`selectPosts selector for '${props.byLikersOf}' instance`);

    return { posts };
};

// const makeMapStateToProps = () => {
//     const factorySelectPosts = makeSelectPosts();

//     /* ↓ mapStateToProps ↓ */
//     return (state, props) => {
//         log('MSTP is called: Posts', '9f49fe');

//         console.time(`selectPosts selector for '${props.byLikersOf}' instance`);
//         const posts = factorySelectPosts(state, props);
//         console.timeEnd(
//             `selectPosts selector for '${props.byLikersOf}' instance`,
//         );

//         return { posts };
//     };
// };

export const Posts = connect(
    mapStateToProps,
    postsActions,
)(
    class extends PureComponent {
        _createPost = () => this.props.createPost();

        render() {
            const { posts, byLikersOf } = this.props;
            log(
                `render method is called: Posts '${byLikersOf}' instance`,
                '9f49fe',
            );

            const list = posts.map(({ id, author, comment }) => (
                <li key = { id }>
                    <button onClick = { () => this.props.removePost(id) }>
                        Remove
                    </button>
                    <b>{author.name}</b> said: {comment}. I like {author.likes}.
                </li>
            ));

            return (
                <>
                    <h1>Posts by those who likes {byLikersOf}.</h1>
                    <button onClick = { this._createPost }>Create post</button>
                    <ul>{list}</ul>
                </>
            );
        }
    },
);
