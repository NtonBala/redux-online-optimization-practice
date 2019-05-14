// Core
import React from 'react';
import { connect } from 'react-redux';

// Instruments
import { log } from '../../helpers';
import * as counterActions from '../../bus/counter/actions';

const mapStateToProps = (state) => {
    log('MSTP is called: Counter', '00ff11');

    return { counter: state.counter };
};

export const Counter = connect(
    mapStateToProps,
    counterActions,
)((props) => {
    const _fakeIncrement = () => props.fakeIncrement();
    const _increment = () => props.increment();
    const _decrement = () => props.decrement();

    log('render method is called: Counter', '00ff11');

    return (
        <>
            <h1>Counter</h1>
            <h3>
                Count: <code>{props.counter}</code>
            </h3>
            <button onClick = { _fakeIncrement }>Fake increment</button>
            <button onClick = { _increment }>Increment</button>
            <button onClick = { _decrement }>Decrement</button>
        </>
    );
});
