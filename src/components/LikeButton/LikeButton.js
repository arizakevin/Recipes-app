import React, { useEffect, useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import './LikeButton.css';

const LikeButton = ({ onSavedRecipe, recipeSaved, query }) => {
    const [saved, setSaved] = useState(recipeSaved);

    useEffect( () => {
        setSaved(false);
    }, [query]);

    const handleClick = () => {
      setSaved(!saved);
      onSavedRecipe(saved);
    }

    let buttonText = saved ? 'Saved': 'Save';
    return (  
      <div id='main'>
        <button onClick={handleClick} className="like pa2">
          <i className="fa fa-heart"></i>&nbsp;
          {buttonText}
        </button>
      </div>
    );
}

export default LikeButton;
