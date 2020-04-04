import React, { useState} from 'react';
import RecipeCard from '../Recipes/RecipeCard/RecipeCard';
import '../Recipes/Recipes.css';
import {Animated} from "react-animated-css";

const MyRecipes = ({ recipes }) => {

	const [myRecipes, setMyRecipes] = useState([]);
	const [key, setKey] = useState(0);

	const renderRecipes = () => {

		if (recipes.length === 0) {
			return (
				<div>
		  			<div className='text' id="noFoundText"><h2>There is no saved recipes.</h2></div>;
					<div className="spam pa4"/>
				</div>	
			);
		} else {
			return (
				<div className="recipes">
                    { //Recipe Card
	                    recipes.map((recipe) =>(
	                      <RecipeCard className='ma2'
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

export default MyRecipes;