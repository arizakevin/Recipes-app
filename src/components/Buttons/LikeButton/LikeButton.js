import React, { useEffect, useState } from 'react';
import '../Button.css';

const LikeButton = ({ onLikedRecipe, recipeLiked, query }) => {
    const [liked, setLiked] = useState(recipeLiked);

    useEffect( () => {
        setLiked(false);
    }, [query]);

    const handleClick = () => {
      setLiked(!liked);
      onLikedRecipe(liked);
    }

    if (liked) {
      return <i class="fa fa-heart fa-2x" aria-hidden="true" onClick={handleClick}></i>;
    } else {
      return <i class="fa fa-heart-o fa-2x" aria-hidden="true" onClick={handleClick}></i>;
    }
}

export default LikeButton;