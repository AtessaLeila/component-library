import React from 'react';
import Macbook from "./img/macbook.png";
import Stars from "./img/stars.png";
import Price from "./img/price.png";
import Icon from "./img/label.png";
import Button from '../Button/Button';

function Inline() {
    var container = {
        display: 'flex',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
    var macbook = {
        height: '250px',
        width: '250px',
        alignSelf: 'flex-start',
        position: 'absolute',
        top: '50px'
    };
    var stars = {
        width: '20px',
        height: '100px',
        position: 'absolute',
        top: '40px',
        left: '300px'
    };
    var price = {
        width: '20px',
        height: '100px',
        position: 'absolute',
        top: '70px',
        left: '300px'
    };
    var reviews = {
        position: "absolute",
        top: "33px",
        left: "390px",
        fontSize: "15px",
        color: "grey"
    };
    var submit = {
        position: "absolute",
        top: "33px",
        left: "470px",
        fontSize: "15px",
        color: "#33A0FF"
    };
    var info = {
        position: 'absolute',
        top: '100px',
        left: '300px',
        width: '600px',
        fontSize: '18px'
    };
    var hr = {
        border: "3px solid #F6F7F8",
        width: "600px",
        position: "absolute",
        top: "90px",
        left: "300px"
    };
    var h2 = {
        position: 'absolute',
        left: '300px',
        marginTop: "-6px"
    };
    var label = {
        position: 'absolute',
        left: '0px',
    };
    var button1 = {
        position: 'absolute',
        top: '210px',
        left: '300px',
    };
    var button2 = {
        position: 'absolute',
        top: '210px',
        left: '460px',
    };
    var box = {
        border: "5px solid #F6F7F8",
        height: "260px",
        width: "270px",
        position: "absolute",
        left: "0px",
    }



    return (
        <div className="container" style={container}>
            <div style={box}>
                <div style={label}><img src={Icon} />
                </div>
                <div style={macbook}><img src={Macbook} />
                </div>
            </div>
            <h2 style={h2}>Beats Solo2 On Ear Headphones - Black</h2>
            <div style={stars}><img src={Stars} />
            </div>
            <p style={reviews}>9 Reviews</p>
            <p style={submit}>Submit a review</p>
            <div style={price}><img src={Price} />
            </div>
            <hr style={hr} />
            <p style={info}>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
            gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
            leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...
            </p>
            <div style={button1}>
                <Button type="icontext" cart label="Add To Cart" />
            </div>
            <div style={button2}>
                <Button type="icon" heart label="" />
            </div>
        </div>
    )
}
export default Inline