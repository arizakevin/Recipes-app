import React, { useState, useEffect }  from 'react';
import './RecipeCard.css';
import 'tachyons';
import SaveButton from '../../Buttons/SaveButton/SaveButton';
import {Animated} from "react-animated-css";

const RecipeCard = ({ title, image, calories, ingredients, url, isSignedIn, user }) => {
	const [recipeSaved, setRecipeSaved] = useState(false);

	useEffect(()=> {
		console.log('Ingredients from Recipe Card: ', ingredients)
	},[])

	useEffect( () => {
		// Check Recipes in user database only if it is signed in
  		if (isSignedIn) {
			fetch('https://secure-cove-12071.herokuapp.com/checkrecipe', {
  			  method: 'post',
  			  headers: {'Content-Type': 'application/json'},
  			  body: JSON.stringify({
  			  	user_id: user.id,
  			    title: title,
  			  })
  			})
  			.then(response => response.json())
  			.then(data => setRecipeSaved(data))
  			.catch(error => console.log('Error from RecipeCard.js, useEffect: ', error)) 
		}
 	}); 

	const onSavedRecipe = () => {
  		fetch('https://secure-cove-12071.herokuapp.com/saverecipes', {
  		  method: 'post',
  		  headers: {'Content-Type': 'application/json'},
  		  body: JSON.stringify({
  		  	user_id: user.id,
  		    title: title,
  		    img_url: image,
  		    calories: calories,
  		    ingredients: ingredients,
  		    url: url
  		  })
  		})
  		.then(response => response.json())
  		.then(data => {
      	  if (data === 'saved') {
      	    setRecipeSaved(true);
      	  } else if (data === 'deleted') {
      	  	setRecipeSaved(false)
      	  } 
      	})
  		.catch(error => console.log('Error from RecipeCard.js, OnSavedRecipe: ', error))  
	}

	const renderButtons = () => {
		if (isSignedIn) {
			return (
				<div className='buttons'>
					<SaveButton 
						onSavedRecipe={onSavedRecipe} 
						recipeSaved={recipeSaved}
					/>
				</div>
			);
		}	
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
				{
					ingredients.map(ingredient => (
						<li className='listText'><p>{ingredient}</p></li>
					))
				}
			</ul>
			{renderButtons()}	
			<a className='child tr pa2' href={url} target="_blank" rel="noopener noreferrer">MORE</a>
		</div>
		</Animated>
	);
}

export default RecipeCard;