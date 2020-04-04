import React, { useEffect, useState, createRef, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import AppName from './components/AppName/AppName';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import './App.css';

const APP_ID = 'cba9219b';
const APP_KEY = '7e92be1e8a26b78e9edd5ed297fc36ab';

export default function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('apple');
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [appRenders, setAppRenders] = useState(0);
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

  useEffect( () => {
      getRecipes();
  }, [query]); 

  useEffect( () => {
      console.log('isSignedIn: ', isSignedIn);
  },[]); 

  const getRecipes = () => {
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)  
          .then(response => response.json())
          .then(data => setRecipes(data.hits))
          .catch(error => console.log(error))  
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

  const updateIsSignedIn = signedIn => {
    setIsSignedIn(signedIn);
    console.log('signedIn: ', signedIn);
    if (!signedIn) {
      console.log('Resetting');
      resetState();
    } 
  }

  return(
    <div className="App mb0">
      <Navigation isSignedIn={isSignedIn} updateIsSignedIn={updateIsSignedIn} />
      <Logo />
      <AppName/>

      <Switch>
        <Route  
          exact path="/" 
          render={(props) => 
            <Home {...props} 
              getSearch={getSearch}
              search={search} 
              updateSearch={updateSearch} 
              recipes={recipes}
              query={query}
            />
          }
        />
        <Route  
          path="/signin" 
          render={(props) => 
            <Signin {...props} 
              loadUser={loadUser}
              updateIsSignedIn={updateIsSignedIn}
            />
          }
        />
        <Route  
          path="/register" 
          render={(props) => 
            <Register {...props} 
              loadUser={loadUser}
              updateIsSignedIn={updateIsSignedIn}
            />
          }
        />
      </Switch>
      <BottomNavbar/>
    </div>
  );
}

/* My Recipes -> Sorted Recipes

Database [ label, image, calories, ingredients ]

*/