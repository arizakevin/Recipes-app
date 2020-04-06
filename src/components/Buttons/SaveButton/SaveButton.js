import React, { useEffect, useState } from 'react';
import '../Button.css';

const SaveButton = ({ onSavedRecipe, recipeSaved, query }) => {
    const [saved, setSaved] = useState(recipeSaved);

    useEffect( () => {
        setSaved(false);
    }, [query]);

    const handleClick = () => {
      setSaved(!saved);
      onSavedRecipe(saved);
    }

    if (saved ) {
      return <i class="fa fa-bookmark fa-2x" aria-hidden="true" onClick={handleClick}></i>;
    } else {
      return <i class="fa fa-bookmark-o fa-2x" aria-hidden="true" onClick={handleClick}></i>;
    }
}

export default SaveButton;
