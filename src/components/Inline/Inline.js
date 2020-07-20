import React from 'react';
import Background from "./img/macbook.png";
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
    var styles1 = {
        height: '250px',
        width: '250px',
        alignSelf: 'flex-start',
        position: 'absolute',
        top: '70px'
    };
    var styles2 = {
        width: '20px',
        height: '100px',
        position: 'absolute',
        top: '60px',
        left: '300px'
    };
    var styles3 = {
        width: '20px',
        height: '100px',
        position: 'absolute',
        top: '90px',
        left: '300px'

    };
    var info = {
        position: 'absolute',
        top: '100px',
        left: '300px',
        width: '600px'
    };
    var h1 = {
        position: 'absolute',
        top: '0px',
        left: '300px',
    };
    var label = {
        position: 'absolute',
        top: '30px',
        left: '0px',
    }
    var btn1 = {
        position: 'absolute',
        top: '120px',
    }
    var btn2 = {
        position: 'absolute',
        top: '120px',
        left: '40px',
    }
    var button1 = {
        position: 'absolute',
        top: '180px',
        left: '300px',
    }
    var button2 = {
        position: 'absolute',
        top: '180px',
        left: '460px',
    }


    return (
        <div className="container" style={container}>
            <div style={label}><img src={Icon} />
            </div>
            <h1 style={h1}>Beats Solo2 On Ear Headphones - Black</h1>
            <div style={styles1}><img src={Background} />
            </div>
            <div style={styles2}><img src={Stars} />
            </div>
            <div style={styles3}><img src={Price} />
            </div>
            <p style={info}>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
            gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
            leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...
            </p>
            <div style={button1}>
                <Button style={btn1} type="icontext" cart label="Add To Cart" />
            </div>
            <div style={button2}>
                <Button style={btn2} type="icon" heart label="" />
            </div>
        </div>
    )
}
export default Inline