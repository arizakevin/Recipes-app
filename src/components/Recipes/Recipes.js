import React, { useState } from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import './Recipes.css';

const Recipes = ({ recipes, query }) => {

	const [key, setKey] = useState(0);

	const renderRecipes = () => {
		console.log(recipes);
		if (recipes.length === 0) {
			return (
				<div>
		  			<div className='text' id="noFoundText"><h2>No Recipes Found</h2></div>;
					<div className="spam pa4"/>
				</div>	
			);
		} else {
			return (
				<div className="recipes">
                    { //Recipe Card
	                    recipes.map((recipe) =>(
	                      <RecipeCard className='ma2' query={query}
	                        key={() => {setKey(key + 1)}} 
	                        title={recipe.recipe.label} 
	                        image={recipe.recipe.image}
	                        calories={Math.round(recipe.recipe.calories)}
	                        ingredients={recipe.recipe.ingredients}    
	                      />
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

export default Recipes;