import React from 'react'
import fire from '../config/Fire';
import { Button } from 'react-bootstrap';
import '../styles/LoginForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            displayName: ''
        }
    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            alert(error);
        });
    }

    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            let user = fire.auth().currentUser;
            if (user) {
                user.updateProfile({
                    displayName: this.state.displayName.toUpperCase()
                }).then((s) => {

                })
            }
        })
            .catch((error) => {
                alert(error);
            });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    displaySignUp = () => {
        document.getElementById('sign-in-form').style.display = 'none';
        document.getElementById('sign-up-form').style.display = 'contents';
    }

    displaySignIn = () => {
        document.getElementById('sign-in-form').style.display = 'contents';
        document.getElementById('sign-up-form').style.display = 'none';
    }

    render() {
        return (
            <React.Fragment>
                {/* Sign-IN From Block */}
                <div className="col-md-10" style={{ display: 'contents' }} id="sign-in-form">
                    <h4>Sign-in</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" id="email-address">Email address</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="email-input" className="form-control" aria-describedby="emailHelp" placeholder="Enter valid email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" id="password">Password</label>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password-input" className="form-control" placeholder="Password" />
                            <small id="required" className="form-text text-muted">Mandatory fields</small>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email or password with anyone.</small>
                        </div>

                        <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                        <hr />
                    </form>

                    <form id="sign-up-form-button">
                        <small>Don't have an account?</small>
                        <Button variant="link" size="lg" onClick={this.displaySignUp}>Sign up</Button>
                    </form>
                </div>

                {/* Sign-UP From Block */}
                <div className="col-md-10" style={{ display: 'none' }} id="sign-up-form">
                    <h4>Sign-up</h4>
                    <form >
                        <div className="form-group">
                            <label htmlFor="exampleInputName1" id="user-name">Your name</label>
                            <input value={this.state.displayName} onChange={this.handleChange} type="text" name="displayName" id="exampleInputName1" className="form-control" placeholder="Enter your full name" />
                        </div>
                    </form>

                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" id="email-address">Email address</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" className="form-control" aria-describedby="emailHelp" placeholder="Enter valid email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" id="password">Password</label>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="examplePassword1" className="form-control" placeholder="Password" />
                            <small id="required" className="form-text text-muted">Mandatory fields</small>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your credentials with anyone.</small>
                        </div>

                        <button onClick={this.signup} className="btn btn-success">SignUp</button>
                        <hr />
                    </form>

                    <form id="sign-up-button">
                        <small>Have an account?</small>
                        <Button variant="link" size="lg" onClick={this.displaySignIn}>Sign In</Button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginForm;