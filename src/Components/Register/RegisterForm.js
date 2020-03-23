import React from "react";
import Logo from "../../assets/images/bookshelf-logo.png";
import { connect } from "react-redux";
import { register } from "../../Redux/actions/users";
import { Link, withRouter } from "react-router-dom";

class RegisterForm extends React.Component {
  state = {
    username: "",
    fullname: "",
    email: "",
    password: ""
  };

  registerNewUser = () => {
    // e.preventDefault();
    const { username, fullname, email, password } = this.state;

    const data = {
      username,
      fullname,
      email,
      password
    };
    this.props.dispatch(register(data));
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <div className="right-section">
          <div className="top-logo">
            <img src={Logo} alt="logo-cover" srcset="" />
          </div>
          <div className="form-header header-register">
            <header>Register</header>
            <p>Welcome Back, Please Register to create account</p>
          </div>
          <div className="login-form">
            <div className="login-form-body">
              {/* <form action=""> */}
              <div className="input-wrapper register-form-input">
                <div className="input-items">
                  <label for="">Username</label>
                  <br />
                  <input
                    required
                    value={this.state.username}
                    type="text"
                    name="username"
                    id="registerUsername"
                    placeholder="Input username"
                    minLength="6"
                    onChange={e => {
                      this.setState({ username: e.target.value });
                    }}
                  />
                </div>
                <div className="input-items">
                  <label for="">Fullname</label>
                  <br />
                  <input
                    required
                    value={this.state.fullname}
                    type="text"
                    name="fullname"
                    id="registerFullname"
                    placeholder="Input fullname"
                    minLength="6"
                    onChange={e => {
                      this.setState({ fullname: e.target.value });
                    }}
                  />
                </div>
                <div className="input-items">
                  <label for="">Email Address</label>
                  <br />
                  <input
                    required
                    value={this.state.email}
                    type="email"
                    name="email"
                    id="registerEmail"
                    placeholder="Input email"
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </div>
                <div className="input-items">
                  <label for="">Password</label>
                  <br />
                  <input
                    required
                    value={this.state.password}
                    type="password"
                    name="password"
                    id="registerPassword"
                    placeholder="Input password"
                    minLength="6"
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="form-btn">
                <ul>
                  <li>
                    <button type="submit" onClick={this.registerNewUser}>
                      Sign Up
                    </button>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button type="button">Sign In</button>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* </form> */}
            </div>
          </div>
          <div className="footer">
            <footer>
              <p>By signing up, you agree to Book’s</p>
              <p>
                <span>Terms and Conditions</span> & <span>Privacy Policy</span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = user => {
  return {
    user
  };
};

export default withRouter(connect(mapStateToProps)(RegisterForm));
