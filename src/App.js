import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import AppName from './components/AppName/AppName';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import MyRecipes from './components/MyRecipes/MyRecipes';
import './App.css';
import { animateScroll as scroll} from 'react-scroll';

export default function App() {
  let { pathname } = useHistory().location;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('apple');
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [user, setUser] = useState({
      id: '13',
      name: '',
      email: '',
      joined: ''
  });

  const resetState = () => {
    setRecipes([]);
    setIsSignedIn(false);
    setUser({
        id: '',
        name: '',
        email: '',
        joined: ''
    })
  }

  useEffect( () => {
      if (pathname === "/") {
        getRecipes();
        console.log('Recipes: ', recipes)
      }    
  }, [query]);  

  const getRecipes = () => {
      fetch('http://localhost:3000/recipes', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          query: query
        })
      })
      .then(response => response.json())
      .then(data => {
        setRecipes(data)
      })
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
    setTimeout(() => {
      scroll.scrollTo(625); 
    }, 100);
  }

  const loadUser = data => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
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
              isSignedIn={isSignedIn}
              user={user}
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
        <Route 
          path="/myrecipes" 
          render={(props) => 
            <MyRecipes {...props} 
              user={user}
              isSignedIn={isSignedIn}
            />
          }
        />
      </Switch>
      <BottomNavbar/>
    </div>
  );
}
