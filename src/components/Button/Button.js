import React from 'react';
import './Button.css';
import './img/cart.png';
import './img/heart.png';


const Button = (props) => {
    let classList = [];

    let types = ['primary', 'primaryOne', 'danger', 'dangerOne', 'success', 'successOne', 'warning', 'warningOne', 'default', 'defaultOne', 'icontext', 'icon']

    if (types.includes(props.type)) {
        classList.push(`button-${props.type}`)
    }

    if (props.large) {
        classList.push(`button-${props.type}-large`);
    }

    if (props.outline) {
        classList.push(`button-${props.type}-outline`);
    }

    if (props.faded) {
        classList.push(`button-${props.type}-faded`);
    }

    if (props.cart) {
        classList.push(`button-${props.type}-cart`);
    }

    if (props.heart) {
        classList.push(`button-${props.type}-heart`);
    }


    return <button className={classList.join(" ")}>{props.label}</button>
}

export default Button; 