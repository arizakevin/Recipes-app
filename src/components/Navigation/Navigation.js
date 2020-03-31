import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav className="nav shadow-5" style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('myRecipes')} className='link underline dim ph3 mv2 pointer '>My Recipes</p>
          <p onClick={() => onRouteChange('signout')} className='link underline dim ph3 mv2 pointer '>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav className="nav shadow-5" style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='link underline dim ph3 pv1 mv2 pointer '>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='link underline dim ph3 pv1 mv2 pointer '>Register</p>
        </nav>
      );
    }
}

export default Navigation;