import React from 'react';
import Tilt from 'react-tilt';
import Chef from './Logo2.png';
import "./Logo.css";
import {Animated} from "react-animated-css";

const Logo = () => {
  return (
  	<Animated animationIn="bounceInDown" 
                animationOut="fadeOut" 
                isVisible={true} 
                animationOutDelay={2000}
                animationInDuration={2000}
      >
	    <div className='mt4 tc center mt0'>
	      <Tilt className="Tilt mw4 center pa3 Tilt tc pa3 pb0 ma0 bt4 br0 bt0 shadow-2" options={{ max : 35 }} style={{ height: 200, width: 150 }} >
	        <div className="Tilt-inner pt3">
	          <img style={{paddingBottom: '2px'}} alt='logo' src={Chef}/>
	        </div>
	      </Tilt>
	    </div>
    </Animated>
  );
}

export default Logo;