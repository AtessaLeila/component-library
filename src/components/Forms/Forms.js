import React from 'react';
import './Forms.css'


const Forms = (props) => (
    <form>
        <label className="label" for={props.style}>Email</label>
        <input style={props.style}
            label={props.label}
            placeholder={props.placeholder}

        />
    </form>
)


export default Forms