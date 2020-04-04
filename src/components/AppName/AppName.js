import React from 'react';
import './AppName.css';
import {Animated} from "react-animated-css";


const AppName = () => {
    return (
      <Animated animationIn="zoomIn" 
                animationOut="fadeOut" 
                isVisible={true} 
                animationOutDelay={2000}
                animationInDuration={2000}
      >
          <div className="text insetshadow pt3">
              <h1 className="text animate">Recipes app</h1>
          </div>
      </Animated>
    );
  }

  export default AppName;