import React from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import Section from "../../Components/Section/Section";
import LoginForm from "../../Components/Login/LoginForm";
import "./Login.css";

class Login extends React.Component {
  componentDidMount = () => {
    const token = localStorage.getItem("KEY_TOKEN");
    if (token) {
      this.props.history.push("/home");
    } else {
      this.props.history.push("/login");
    }
  };
  render() {
    const Title = "Login";
    return (
      <div>
        <Helmet>
          <title>{Title}</title>
        </Helmet>
        <div className="grid-container-index">
          <Section />
          <LoginForm />
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
