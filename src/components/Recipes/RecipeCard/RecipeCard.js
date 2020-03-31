import React, { useState }  from 'react';
import './RecipeCard.css';
import 'tachyons';

import LikeButton from '../../LikeButton/LikeButton';

const RecipeCard = ({ title, image, calories, ingredients, query }) => {

	const [recipeSaved, setRecipeSaved] = useState(false);

	const onSavedRecipe = data => {
		setRecipeSaved(data);
	}

	return (
		<div className='ib br3 pa3 ma4 bw2 shadow-5 recipeCard'>
			<h1 className= 'title pa2'>{title}</h1>
			<p className= 'calories'>Calories: {calories}</p>
			<img className='image ma3' src={image} alt=""/>
			<ul>
				{ingredients.map(ingredient => (
					<li className='listText'>{ingredient.text}</li>
				))}
			</ul>
			<LikeButton onSavedRecipe={onSavedRecipe} recipeSaved={recipeSaved} query={query}/>
		</div>
	);
}

export default RecipeCard;