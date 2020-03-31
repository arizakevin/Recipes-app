import React, { useEffect, useState } from 'react';
import Recipes from './components/Recipes/Recipes';
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('apple');
  const [key, setKey] = useState(0);
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
  });

  const resetState = () => {
    setRecipes([]);
    setQuery('apple');
    setKey(0);
    setRoute('signin');
    setIsSignedIn(false);
    setUser({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    })
  }
  
  const APP_ID = 'cba9219b';
  const APP_KEY = '7e92be1e8a26b78e9edd5ed297fc36ab';

  useEffect( () => {
    getRecipes();
    console.log('Recipes after fetching: ', recipes);
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
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

  const loadUser = data => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    });
  }

  const onRouteChange = route => {
    if (route === 'signout') {
      resetState();
    } else if (route === 'home') {
      setIsSignedIn(true);
    }
    setRoute(route);
  }

  const renderApp = () => {
    switch(route) {
      case "home":
        return (
          <div>
            <Form getSearch={getSearch} search={search} updateSearch={updateSearch} />
            <spam className='ma3' />
            <Recipes recipes={recipes} query={query}/>
          </div>
        );
      case "signin":
        return <Signin loadUser={loadUser} onRouteChange={onRouteChange}/>;
      case "register":
        return <Register loadUser={loadUser} onRouteChange={onRouteChange}/>;
      /*case "myRecipes":
        return <MyRecipes/>
      */  
      case "signout":
        return <Signin loadUser={loadUser} onRouteChange={onRouteChange}/>;
    }
  }

  return(
    <div className="App mb0">
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      <Logo />
      <div className="text"><h1>Recipes App</h1></div>
      {renderApp()}
    </div>
  );
}

export default App;


/* My Recipes -> Sorted Recipes

Database [ label, image, calories, ingredients ]


if (route === 'home') {
      return (
        <div>
          <Form getSearch={getSearch} search={search} updateSearch={updateSearch} />
          <Recipes recipes={recipes} />
        </div>
      );
    } else {
      if (route === 'signin') {
        return <Signin loadUser={loadUser} onRouteChange={onRouteChange}/>;
      } else {
        return <Register loadUser={loadUser} onRouteChange={onRouteChange}/>;
      }
    } 

*/