// Core
import React, { useState } from 'react';

// Instruments
import { selectItems } from './selectors';

// Components
import { List } from './List';

export const App = () => {
    const [ counter1, setCounter1 ] = useState(100);
    const [ counter2, setCounter2 ] = useState(100);
    const [ counter3, setCounter3 ] = useState(0);

    console.time('→ selector');
    const items = selectItems({ counter1, counter2, counter3 });
    console.timeEnd('→ selector');

    return (
        <section className = 'example'>
            <h1>
                Items array length: <code>{items.length}</code>
            </h1>
            <h3>
                Counter 1: <code>{counter1}</code>
            </h3>
            <h3>
                Counter 2: <code>{counter2}</code>
            </h3>
            <h3>
                Counter 3: <code>{counter3}</code>
            </h3>
            <button onClick = { () => setCounter1(counter1 + 1) }>
                Increment Counter 1
            </button>
            <button onClick = { () => setCounter2(counter2 + 1) }>
                Increment Counter 2
            </button>
            <button onClick = { () => setCounter3(counter3 + 1) }>
                Increment Counter 3
            </button>
            <List items = { items } />
        </section>
    );
};
