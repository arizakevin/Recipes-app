import React from 'react';
import '../Button.css';

const SaveButton = ({ onSavedRecipe, recipeSaved }) => {
    const handleSaving = () => {
      onSavedRecipe();
    }

    if (recipeSaved) {
      return <i class="fa fa-bookmark fa-2x" aria-hidden="true" onClick={handleSaving}></i>;
    } else {
      return <i class="fa fa-bookmark-o fa-2x" aria-hidden="true" onClick={onSavedRecipe}></i>;
    }
}

export default SaveButton;
