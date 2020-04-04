import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Signin.css";
import {Animated} from "react-animated-css";

//const Signin = ({ onRouteChange, animDelay }) => {

export default function Signin (props) {
  let history = useHistory();
  const { loadUser, updateIsSignedIn } = props;

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
    
  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  }

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  }
  /*
  const onSubmitSignIn__TO_IMPLEMENT_SOON = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'succes') {
          console.log(data);
          updateIsSignedIn(true);
          history.push("/"); 
        }
      })
      .catch(console.log);
  }
  */

  const onSubmitSignIn = () => {
    updateIsSignedIn(true);
    history.push("/");
  }

  return (
    <div className="pb3">
      <Animated animationIn="zoomIn"
                animationOut="fadeOut" 
                isVisible={true} 
                animationOutDelay={1000}
                animationInDuration={1000}
      >
          <article className="article br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="main pa4 black-80">
              <div className="measure">
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
                  <Link to="/register"><p className="letter3 link dim black db pointer">Register</p></Link>
                </div>
              </div>
            </main>
           </article>
      </Animated>
    </div>
  );
}
