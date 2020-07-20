import React from 'react';
import Background from "./img/macbook.png";
import Stars from "./img/stars.png";
import Price from "./img/price.png";
import styled from 'styled-components';

function Thumbnail3() {
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
        left: '300px'
    };
    var styles3 = {
        width: '20px',
        height: '100px',
        position: 'absolute',
        top: '110px',
        left: '300px'

    };
    var apple = {
        position: 'absolute',
        top: '20px',
        left: '300px'
    };
    const Hover = styled.div`
	background: #fff;
	:hover {
		background: #EDEDED;
		cursor: pointer;
	}
`

    return (
        <Hover className="container" style={container}>
            <div style={styles1}><img src={Background} />
            </div>
            <p style={apple}>Apple Macbook Pro</p>
            <div style={styles2}><img src={Stars} />
            </div>
            <div style={styles3}><img src={Price} />
            </div>
        </Hover>
    )
}
export default Thumbnail3

