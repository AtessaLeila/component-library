import React from 'react';
// import './Thumbnail3.css'
import Background from "./img/macbook.png";
import Stars from "./img/stars.png";
import Price from "./img/price.png";
import styled from 'styled-components';

function Thumbnail3() {
    var styles0 = {
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
        <Hover className="container" style={styles0}>
            <div className="square-box" style={styles1}><img src={Background} />
            </div>
            <p style={apple}>Apple Macbook Pro</p>
            <div className="square-box" style={styles2}><img src={Stars} />
            </div>
            <div className="square-box" style={styles3}><img src={Price} />
            </div>
        </Hover>
    )
}
export default Thumbnail3

// const Thumbnail3 = () => (


//     <div className="container3">
//         <div className="macbook3"></div>
//         <p className="apple3">Apple Macbook Pro</p>
//         <div className="box-field"></div>
//         <div className="price3"></div>
//     </div>
// )


// export default Thumbnail3