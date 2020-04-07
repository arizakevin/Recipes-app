import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../Signin/Signin.css";
import {Animated} from "react-animated-css";

export default function Signin(props) {
  let history = useHistory();
  const { loadUser, updateIsSignedIn } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onNameChange = event => {
    setName(event.target.value);
  }
    
  const onEmailChange = event => {
    setEmail(event.target.value);
  }

  const onPasswordChange = event => {
    setPassword(event.target.value);
  }
 
  const onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user); 
          updateIsSignedIn(true);
          history.push("/");
        } 
      })
      .catch(console.log);
  }
  

  return (
      <div className="pb3">
      <Animated animationIn="zoomIn" 
                    isVisible={true} 
                    animationOutDelay={1000}
                    animationInDuration={1000}
      >
        <article className="article br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="main pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className= "tc letter1 f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className=" letter2 db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                  <input
                    className="pa2 w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={onNameChange}
                  />
                </div>
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
                  value="Register"
                />
              </div>
            </div>
          </main>
        </article>
      </Animated>
    </div>
  );
}