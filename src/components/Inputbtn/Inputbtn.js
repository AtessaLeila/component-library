import React from 'react';
import './Inputbtn.css';

//console logs the input value


const initialFormData = Object.freeze({
    one: "",
    two: ""
});

const Inputbtn = (props) => {
    const [formData, updateFormData] = React.useState(initialFormData);
    const handleChange = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim()
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    };

    let classList = [];

    let label = ['Redeem']

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
                        name={props.name}
                        onChange={handleChange}

                    />
                    <div className="btn">
                        <input type="submit" className={classList.join(" ")} onClick={handleSubmit} {...label} />
                    </div>
                </form>
            </div>


        </div>
    )


}





export default Inputbtn