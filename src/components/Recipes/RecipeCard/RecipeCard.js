import React, { useState, useEffect }  from 'react';
import './RecipeCard.css';
import 'tachyons';
import SaveButton from '../../Buttons/SaveButton/SaveButton';
import LikeButton from '../../Buttons/LikeButton/LikeButton';
import {Animated} from "react-animated-css";

const RecipeCard = ({ title, image, calories, ingredients, url, query }) => {
	const [recipeSaved, setRecipeSaved] = useState(false);
	const [recipeLiked, setRecipeLiked] = useState(false);

	const onSavedRecipe = () => {
		setRecipeSaved(!recipeSaved);
	}

	const onLikedRecipe = data => {
		setRecipeLiked(!recipeLiked);
	}

	return (
		<Animated animationIn="zoomIn"
						                animationOut="fadeOut" 
						                isVisible={true} 
						                animationInDuration={1000}
						        >
		<div className='ib br3 pa3 ma4 bw2 shadow-5 recipeCard'>
			<h1 className= 'title pa2'>{title}</h1>
			<h2 className= 'calories'>Calories: {calories}</h2>
			<img className='image' src={image} alt=""/>
			<ul>
				{ingredients.map(ingredient => (
					<li className='listText'><p>{ingredient.text}</p></li>
				))}
			</ul>
			<div className='buttons'>
				<LikeButton recipeLiked={recipeLiked} onLikedRecipe={onLikedRecipe} query={query}/>
				<SaveButton recipeSaved={recipeSaved} onSavedRecipe={onSavedRecipe} query={query}/>
			</div>	
			<a className='child tr pa2' href={url} target="_blank" rel="noopener noreferrer">MORE</a>
		</div>
		</Animated>
	);
}

export default RecipeCard;