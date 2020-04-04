import React from 'react';
import Form from '../Form/Form';
import Recipes from '../Recipes/Recipes';



export default function Home(props) {
	const { getSearch, search, updateSearch, recipes, query } = props;
	return(
  		<div>
   			<Form getSearch={getSearch} search={search} updateSearch={updateSearch} />
			<div className='ma3'/>
			<Recipes recipes={recipes} query={query}/>
    	</div>
  	);
}