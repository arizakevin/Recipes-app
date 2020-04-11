import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import './Recipes.css';
import {Animated} from "react-animated-css";

export default function Recipes ({ recipes, isSignedIn, user }) {

	const renderRecipes = () => {
		console.log('Recipes: ', recipes);
		if (recipes.length === 0) {
			return (
				<div>
		  			<div className="text" id="noFoundText">
		  				<h2>...Sorry, couldn't get the recipes...</h2>
		  			</div>;
					<div className="spam pa4"/>
				</div>	
			);
		} else {
			return (
				<div className="recipes">
                    { //Recipe Card
	                    recipes.map((recipe) =>(
		                    	<Animated animationIn="zoomIn"
						                animationOut="fadeOut" 
						                isVisible={true} 
						                animationInDuration={1000}
						        >
			                    	<RecipeCard className='ma2' 
			                    	  isSignedIn={isSignedIn}
			                    	  user={user}
			                    	  title={recipe.recipe.label} 
			                    	  image={recipe.recipe.image}
			                    	  calories={Math.round(recipe.recipe.calories)}
			                    	  ingredients={recipe.recipe.ingredientLines} 
			                    	  url={recipe.recipe.url}   
			                    	/>
			                    </Animated>
	                    ))
                    }
                </div>
			);
		}
	}

	return (
		<div>
			{renderRecipes()}
		</div>
	);
}
