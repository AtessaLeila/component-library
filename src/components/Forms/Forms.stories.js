import React from 'react';
import { storiesOf } from '@storybook/react';

import Forms from './Forms';

const email = {
    border: "3px solid #F1F3F4",
    borderRadius: "6px",
    fontSize: "20px",
    height: "30px",
    width: "300px",
    display: "block"
}

const medium = {
    border: "3px solid #F1F3F4",
    borderRadius: "6px",
    height: "40px",
    width: "300px",
    fontSize: "20px",
    display: "block"
}
const large = {
    border: "3px solid #F1F3F4",
    color: "black",
    borderRadius: "6px",
    height: "50px",
    width: "300px",
    fontSize: "20px",
    display: "block"
}


storiesOf('Forms', module)
    .add('Primary', () => <Forms
        label="Primary"
        placeholder="Email"
        style={email}
    />)
    .add('Medium', () => <Forms
        label="Medium"
        placeholder="Email"
        style={medium}
    />)
    .add('Large', () => <Forms
        label="Large"
        placeholder="Email"
        style={large}
    />)