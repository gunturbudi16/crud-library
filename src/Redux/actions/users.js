import Axios from "axios";

export const register = userData => {
  return {
    type: "REGISTER",
    payload: Axios.post(`/api/v1/users/register`, userData)
  };
};

export const login = (userData, history) => {
  return {
    type: "POST_LOGIN",
    payload: Axios.post(`/api/v1/users/login`, userData)
      .then(result => {
        if (result.status === 200) {
          alert("Success Login");

          try {
            localStorage.setItem("KEY_TOKEN", result.data.message.token);
            localStorage.setItem("id", result.data.message.id);
            localStorage.setItem("email", result.data.message.email);

            history.push("/home");
          } catch (error) {
            alert("Oops something went wrong!");
          }
        }
      })
      .catch(error => {
        console.log(error);
        alert("Email or Password is Wrong");
      })
  };
};
