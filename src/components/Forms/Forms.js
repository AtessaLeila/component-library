import React from 'react';


const Forms = (props) => (
    <form>
        <label for={props.style}>Email</label>
        <input style={props.style}
            label={props.label}
            placeholder={props.placeholder}

        />
    </form>
)


export default Forms