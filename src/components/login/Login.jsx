import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import {withRouter} from '../../withRouter';

const INITIAL_STATE = {
  email: '',
  password: '',
  role: null,
  error: null

};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Login extends Component {
  constructor(props) {
    super(props);
      this.state = { ...INITIAL_STATE };
      this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      localStorage.setItem("washupUser", userCredential.user.email);
      localStorage.setItem("token", userCredential.user.email);
      this.props.navigate('/dashboard1');
    })
    .catch((error) => {
      this.setState(byPropKey('error', error));
    });

  event.preventDefault();
  }

  
  render () {

    const {
      email,
      password,
      error,
    } = this.state;


    return (
      <section>
        <div className="mt-3 login">
          <div className="login-box">
            <div className="m-80">
                <form onSubmit={this.onSubmit}>
                  {error && (
                    <div className="notification is-danger">
                      <button className="delete" />
                      {error.message}
                    </div>
                  )}
                  <div className="field">
                    <div className="control">
                      <input
                        value={email}
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        autoFocus=""
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        value={password}
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        onChange={this.handleInputChange}onChange={event => this.setState(byPropKey('password', event.target.value))}
                        required
                      />
                    </div>
                  </div>
                  <button className="button is-block is-primary is-fullwidth" type="submit">
                    Login
                  </button>
                </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default withRouter(Login);