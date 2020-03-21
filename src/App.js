import React, {useEffect, useState} from 'react';
import Tilt from 'react-tilt';
import Recipe from './Recipe';
import Logo from './Logo/Logo';
import './App.css';

const App = () => {
  
  const APP_ID = 'cba9219b';
  const APP_KEY = '7e92be1e8a26b78e9edd5ed297fc36ab';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("apple");
  const [key, setKey] = useState(0);

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    if (search !== ''){
      setQuery(search);
      setSearch("");
    }
  }

  const generateKey = event => {
    setKey(key + 1);
  }

  return(
    <div className="App">
      <spam className="spam"/>
      <Logo />
      <div className="text"><h1>Recipes App</h1></div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Type any food"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      { recipes.length === 0
        ? <div className='text' id="noFoundText"><h2>No Recipes Found</h2></div>
        : (
            <div className="recipes">
              {recipes.map((recipe, index) =>(
                <Recipe className='ma2'
                  key={index} 
                  title={recipe.recipe.label} 
                  image={recipe.recipe.image}
                  calories={Math.round(recipe.recipe.calories)}
                  ingredients={recipe.recipe.ingredients}    
                />
              ))}
            </div>
          )
      }
    </div>
  );
}

export default App;
