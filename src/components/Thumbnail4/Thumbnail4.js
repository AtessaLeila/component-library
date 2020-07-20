import React from 'react';
import Background from "./img/headphones.png";
import Stars from "./img/stars.png";
import Price from "./img/price.png";


function Thumbnail4() {
    var container = {
        display: 'flex',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '200px',
        width: '500px'
    }
    var styles1 = {
        height: '250px',
        width: '250px',
        alignSelf: 'flex-start',
    };
    var styles2 = {
        width: '20px',
        height: '100px',
        position: 'absolute',
        top: '70px',
        left: '200px'
    };
    var styles3 = {
        width: '20px',
        height: '100px',
        position: 'absolute',
        top: '110px',
        left: '200px'

    };
    var text = {
        position: 'absolute',
        top: '20px',
        left: '200px'
    };
    var text2 = {
        position: 'absolute',
        top: '35px',
        left: '200px'
    };


    return (
        <div className="container" style={container}>
            <div style={styles1}><img src={Background} />
            </div>
            <p style={text}>Beats Solo 2 On Ear</p>
            <p style={text2}>Headphones - Black</p>
            <div style={styles2}><img src={Stars} />
            </div>
            <div style={styles3}><img src={Price} />
            </div>
        </div>
    )
}
export default Thumbnail4
