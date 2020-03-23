import React from "react";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section/Section";
import RegisterForm from "../../Components/Register/RegisterForm";
import { withRouter } from "react-router-dom";
import "./Register.css";

class Register extends React.Component {
  componentDidMount = () => {
    const token = localStorage.getItem("KEY_TOKEN");
    if (token) {
      this.props.history.push("/home");
    } else {
      this.props.history.push("/register");
    }
  };
  render() {
    const Title = "Register";
    return (
      <div>
        <Helmet>
          <title>{Title}</title>
        </Helmet>
        <div className="grid-container-index">
          <Section />
          <RegisterForm />
        </div>
      </div>
    );
  }
}
export default withRouter(Register);
