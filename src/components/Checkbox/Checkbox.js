import React from 'react';
import './Checkbox.css'


const Checkbox = (props) => (
    <div>
        <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
        </label>
    </div>
)

export default Checkbox