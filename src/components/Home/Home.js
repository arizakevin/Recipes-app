import React, { useEffect } from 'react';
import Form from '../Form/Form';
import Recipes from '../Recipes/Recipes';
import { animateScroll as scroll} from 'react-scroll';

export default function Home(props) {
	useEffect(() => {
  	  setTimeout(() => {
        scroll.scrollTo(115);
      }, 50);
  	},[])

	const { getSearch, search, updateSearch, recipes, query, isSignedIn, user } = props;
	return(
  		<div>
   			<Form getSearch={getSearch} search={search} updateSearch={updateSearch} />
			<div className='ma3'/>
			<Recipes 
				recipes={recipes} 
				query={query} 
				isSignedIn={isSignedIn} 
				user={user}
			/>
    	</div>
  	);
}