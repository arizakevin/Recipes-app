import React from 'react';
import './Recipe.css';
import 'tachyons';

const Recipe = ({ title, image, calories, ingredients }) => {
	return (
		<div className='ib br3 pa3 ma4 grow bw2 shadow-5 recipe'>
			<h1 className= 'title pa2'>{title}</h1>
			<p className= 'calories'>Calories: {calories}</p>
			<img className='image ma3' src={image} alt=""/>
			<ul>
				{ingredients.map(ingredient => (
					<li className='listText'>{ingredient.text}</li>
				))}
			</ul>
		</div>
	);
}

export default Recipe;