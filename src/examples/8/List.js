// Core
import React, { memo } from 'react';

// Instruments
import { log } from '../../helpers';

export const List = memo((props) => {
    log('List component rendered', 'eef947');

    const list = props.items.map((item, index) => <li key = { index }>{item}</li>);

    return <ul>{list}</ul>;
});
