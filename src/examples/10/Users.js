// Core
import React from 'react';
import { connect } from 'react-redux';

// Instruments
import { log } from '../../helpers';
import { selectUsers } from './selectors/users';

const mapStateToProps = (state) => {
    log('MSTP is called: Users', '38dddd');

    console.time('→ selectUsers selector');
    const users = selectUsers(state);
    console.timeEnd('→ selectUsers selector');

    return { users };
};

export const Users = connect(mapStateToProps)((props) => {
    log('render method is called: Users', '38dddd');

    const usersJSX = props.users.map((user) => (
        <li key = { user.id }>{user.fullname}</li>
    ));

    return (
        <>
            <h1>Users</h1>
            <ul>{usersJSX}</ul>
        </>
    );
});
