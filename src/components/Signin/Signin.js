import React, { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import "./Signin.css";

const Signin = ({ loadUser, onRouteChange }) => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
    
  const onEmailChange = event => {
    setSignInEmail(event.target.value);
  }

  const onPasswordChange = event => {
    setSignInPassword(event.target.value);
  }


  const onSubmitSignIn______ = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          NotificationManager.success('You are now logged in', 'Login Succes!');
          console.log('Registered Successful:', user);
          loadUser(user);
          onRouteChange('home');
        } else {
          NotificationManager.error('Please try again', 'Login Failed!');
        }
      })
  }


  const onSubmitSignIn = () => {
    onRouteChange('home');
  }

 
  return (
  	<div className="pb3">
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="main pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className= "tc letter1 f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className=" letter2 db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input
                className="pa2 w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="letter2 db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                className="pa2 w-100"
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="tc">
            <input
              onClick={onSubmitSignIn}
              className="btn pointer"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="tc lh-copy mt3">
            <p  onClick={() => onRouteChange('register')} className="letter3 f6 link dim black db pointer">Register</p>
          </div>
        </form>
      </main>
    </article>
    </div>
  );
}

export default Signin;