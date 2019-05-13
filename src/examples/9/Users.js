// Core
import React, { Component } from 'react';
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

export const Users = connect(mapStateToProps)(
    class extends Component {
        render() {
            const { users } = this.props;

            log('render method is called: Users', '38dddd');

            const list = users.map(({ id, fullname }) => (
                <li key = { id }>{fullname}</li>
            ));

            return (
                <>
                    <h1>Users</h1>
                    <ul>{list}</ul>
                </>
            );
        }
    },
);
