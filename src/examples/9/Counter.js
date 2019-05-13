// Core
import React, { Component } from 'react';
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
)(
    class extends Component {
        _fakeIncrement = () => this.props.fakeIncrement();
        _increment = () => this.props.increment();
        _decrement = () => this.props.decrement();

        render() {
            log('render method is called: Counter', '00ff11');

            return (
                <>
                    <h1>Counter</h1>
                    <h3>
                        Count: <code>{this.props.counter}</code>
                    </h3>
                    <button onClick = { this._fakeIncrement }>
                        Fake increment
                    </button>
                    <button onClick = { this._increment }>Increment</button>
                    <button onClick = { this._decrement }>Decrement</button>
                </>
            );
        }
    },
);
