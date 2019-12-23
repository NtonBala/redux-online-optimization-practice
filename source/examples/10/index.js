// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import { store } from '../../init/store';

// App
import { App } from './App';

render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('root'),
);
