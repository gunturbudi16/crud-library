import React from "react";
import Logo from "../../assets/images/bookshelf-logo.png";
import { Link, withRouter } from "react-router-dom";
import { login } from "../../Redux/actions/users";
import { connect } from "react-redux";
//import propTypes from "prop-types";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    token: "",
    id: ""
  };

  postLogin = () => {
    const { email, password } = this.state;
    const userData = { email, password };
    this.props.dispatch(login(userData, this.props.history));
  };

  render() {
    console.log("haloo" + this.props);
    return (
      <div>
        <section className="right-section">
          <div className="top-logo">
            <img src={Logo} alt="logo-cover" srcSet="" />
          </div>
          <div className="form-header">
            <header>Login</header>
            <p>Welcome Back, Please Login to your account</p>
          </div>
          <div className="login-form">
            <div className="login-form-body">
              {/* <form action=""> */}
              <div className="input-wrapper login">
                <div className="input-items">
                  <label htmlFor="">Email Address</label>
                  <br />
                  <input
                    required
                    type="email"
                    name="email"
                    id="email-value"
                    placeholder="Your email"
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </div>
                <div className="input-items password">
                  <label htmlFor="">Password</label>
                  <br />
                  <input
                    required
                    type="password"
                    name="password"
                    id="password-value"
                    placeholder="Your password"
                    minLength="6"
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="forgot-password">
                <ul>
                  <li>
                    <input type="checkbox" />
                    <label>Remember Me</label>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">Forgot Password</a>
                  </li>
                </ul>
              </div>

              <div className="form-btn">
                <ul>
                  <li>
                    <button type="submit" onClick={this.postLogin}>
                      Login
                    </button>
                  </li>
                  <li>
                    <Link to={"/register"}>
                      <button type="button">Sign Up</button>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* </form> */}
            </div>
          </div>
          <div className="footer login-footer">
            <footer>
              <p>By signing up, you agree to Book’s</p>
              <p>
                <span>Terms and Conditions</span> & <span>Privacy Policy</span>
              </p>
            </footer>
          </div>
        </section>
      </div>
    );
  }
}
// LoginForm.propTypes = {
//   user: PropTypes.func.isRequired
// };
const mapStateToProps = user => {
  return {
    user
  };
};

export default withRouter(connect(mapStateToProps)(LoginForm));
