import React from 'react';


const Select = (props) => (
    <form>
        <select style={props.style}
            label={props.label}
            placeholder={props.placeholder}>
            <option value="" selected>Select</option>
        </select>

    </form>
)


export default Select