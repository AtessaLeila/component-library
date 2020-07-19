import React from 'react';
import { storiesOf } from '@storybook/react';


import Inputbtn from './Inputbtn';

const field = {
    border: "3px solid #F1F3F4",
    borderRadius: "6px",
    fontSize: "15px",
    height: "40px",
    width: "200px",
}
const field2 = {
    border: "3px solid #F1F3F4",
    borderRadius: "6px",
    fontSize: "15px",
    height: "60px",
    width: "200px",
}

function onClick() {
    alert("Click!")
}




storiesOf('Inputbtn', module)
    .add('One', () =>
        <Inputbtn
            type="submit"
            label="Redeem"
            placeholder="Voucher Code"
            style={field}
            small
            whenClicked={onClick}

        />

    )
    .add('Two', () => <Inputbtn type="submit" label="Redeem" placeholder="Voucher Code" style={field2} large whenClicked={onClick} />)