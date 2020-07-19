import React from 'react';
import './Inputbtn.css';


const Inputbtn = (props) => {
    let classList = [];

    let types = ['submit']

    if (types.includes(props.type)) {
        classList.push(`button-${props.type}`)
    }

    if (props.small) {
        classList.push(`button-${props.type}-small`);
    }

    if (props.large) {
        classList.push(`button-${props.type}-large`);
    }
    return (
        <div>
            <div className="form">
                <form>
                    <input style={props.style}
                        label={props.label}
                        placeholder={props.placeholder}

                    />
                </form>
            </div>

            <div className="btn">

                <button className={classList.join(" ")} onSubmit={props.action}>{props.label}</button>
            </div>
        </div>
    )


}





export default Inputbtn