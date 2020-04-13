import React, { useState, useEffect } from 'react';
import RecipeCard from '../Recipes/RecipeCard/RecipeCard';
import '../Recipes/Recipes.css';
import {Animated} from "react-animated-css";
import { animateScroll as scroll} from 'react-scroll';

export default function MyRecipes (props) {
	const { isSignedIn, user } = props;
	const [myRecipes, setMyRecipes] = useState([])

	useEffect(() => {
      	setTimeout(() => {
    	  scroll.scrollTo(600); 
    	}, 50);
	},[])

	useEffect(() => {
      	if (isSignedIn) {
      		getMyRecipes();
      	}
	},[])

	const getMyRecipes = () => {
		console.log('Fetching Recipes')
		fetch('https://secure-cove-12071.herokuapp.com/userrecipes', {
  		  method: 'post',
  		  headers: {'Content-Type': 'application/json'},
  		  body: JSON.stringify({
  		  	user_id: user.id
  		  })
  		})
  		.then(response => response.json())
  		.then(data => {
      	    setMyRecipes(data) 
      	})
      	.catch(error => console.log('Error from MyRecipes.js, getMyRecipes: ', error))  
	}

	const renderMyRecipes = () => {
		if (isSignedIn) {
			if (myRecipes.length === 0) {
				return (
					<div>
			  			<div className="text" id="noFoundText">
			  				<h2>...No recipe saved...</h2>
			  			</div>;
						<div className="spam pa4"/>
					</div>	
				)
			} else {
				return (
					<div className="recipes">
        	            { //Recipe Card
	    	                myRecipes.map((recipe) =>(
			                    	<Animated animationIn="zoomIn"
							                animationOut="fadeOut" 
							                isVisible={true} 
							                animationInDuration={1000}
							        >
				                    	<RecipeCard className='ma2' 
				                    	  //query={query}
				                    	  user={user} 
				                    	  title={recipe.title} 
				                    	  image={recipe.img_url}
				                    	  calories={recipe.calories}
				                    	  ingredients={recipe.ingredients} 
				                    	  url={recipe.url}   
				                    	  isSignedIn={isSignedIn}
				                    	/>
				                    </Animated>
	    	                ))
        	            }
        	        </div>
				)
			}	
		} else {
			return (
				<div>
			  		<div className="text" id="noFoundText">
			  			<h2>...Error 404...</h2>
			  		</div>;
					<div className="spam pa4"/>
				</div>	
			)
		}
	}

	return (
		<div>
			{renderMyRecipes()}
		</div>
	)
}
