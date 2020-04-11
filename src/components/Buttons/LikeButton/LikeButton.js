import React, { useEffect, useState } from 'react';
import '../Button.css';

const LikeButton = ({ onRecipeLiked, recipeLiked }) => {
    const [liked, setLiked] = useState(recipeLiked);

    const handleClick = () => {
      setLiked(!liked);
      onRecipeLiked(liked);
    }

    if (liked) {
      return <i class="fa fa-heart fa-2x" aria-hidden="true" onClick={handleClick}></i>;
    } else {
      return <i class="fa fa-heart-o fa-2x" aria-hidden="true" onClick={handleClick}></i>;
    }
}

export default LikeButton;