import React, { useState } from "react";
import "./css/login.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


export const Login = ({ history }) => {
  const [client, setCliente] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCliente({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const verifyClient = async (e) => {
    await axios
      .post("http://localhost:4000/api/users/login", client)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          localStorage.setItem("id", JSON.stringify(res.data.user.id));
          localStorage.setItem("name", JSON.stringify(res.data.user.nombre));
          localStorage.setItem("token", JSON.stringify(res.data.token));

          history.push("/profile");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar producto
    verifyClient();
  };

  return (
    <div id="login-box">
      <h3>Login</h3>
      <form className="left" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input type="submit" name="signup_submit" value="Sign me up" />
      </form>

      <div className="right">
        <span className="loginwith">
          Sign in with
          <br />
          social network
        </span>

        <button className="social-signin facebook">Log in with facebook</button>
        <button className="social-signin twitter">Log in with Twitter</button>
        <button className="social-signin google">Log in with Google+</button>
      </div>
    </div>
  );
};
