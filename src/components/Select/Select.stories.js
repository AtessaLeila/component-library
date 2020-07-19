import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from './Select';

const select = {
    border: "3px solid #F1F3F4",
    borderRadius: "6px",
    fontSize: "20px",
    height: "40px",
    width: "300px",
    display: "block"
}

const medium = {
    border: "3px solid #F1F3F4",
    borderRadius: "6px",
    height: "55px",
    width: "300px",
    fontSize: "20px",
    display: "block"
}
const large = {
    border: "3px solid #F1F3F4",
    color: "black",
    borderRadius: "6px",
    height: "70px",
    width: "300px",
    fontSize: "20px",
    display: "block"
}

const select_fill = {
    border: "3px solid #F1F3F4",
    backgroundColor: "#F1F3F4",
    borderRadius: "6px",
    fontSize: "20px",
    height: "40px",
    width: "300px",
    display: "block"
}

const medium_fill = {
    border: "3px solid #F1F3F4",
    backgroundColor: "#F1F3F4",
    borderRadius: "6px",
    height: "55px",
    width: "300px",
    fontSize: "20px",
    display: "block"
}
const large_fill = {
    border: "3px solid #F1F3F4",
    backgroundColor: "#F1F3F4",
    color: "black",
    borderRadius: "6px",
    height: "70px",
    width: "300px",
    fontSize: "20px",
    display: "block"
}


storiesOf('Select', module)
    .add('Primary', () => <Select
        label="Primary"
        placeholder="Select"
        style={select}
    />)
    .add('Medium', () => <Select
        label="Medium"
        placeholder="Select"
        style={medium}
    />)
    .add('Large', () => <Select
        label="Large"
        placeholder="Select"
        style={large}
    />)
    .add('Primary Fill', () => <Select
        label="Primary"
        placeholder="Select"
        style={select_fill}
    />)
    .add('Medium Fill', () => <Select
        label="Medium"
        placeholder="Select"
        style={medium_fill}
    />)
    .add('Large Fill', () => <Select
        label="Large"
        placeholder="Select"
        style={large_fill}
    />)