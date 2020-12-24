import React, { useState } from 'react'
//import './css/register.css'
import axios from 'axios'

export const Register = ({ history }) => {

  const [user, userState] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
    password2: ''
  })
  const handleChange = (e) => {
    console.log(e.target.value)
    userState({
      ...user,
      [e.target.name]: e.target.value
    })
  }


  const createClient = async (e) => {

    await axios.post('http://localhost:4000/api/users/register', user)
      .then(res => {

        console.log(res.data)
        if (res.data === 'El usuario ya esta registrado') {
          alert('Su cuenta ya esta registrada')

        } else {
          localStorage.setItem('token', JSON.stringify(res.data))
          history.push('/profile')
        }
      })
      .catch(error => { console.log(error); })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
     createClient()
  }

  return (

    <div id="login-box">

      <h3>Register</h3>
      <form className="left" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} />
        <input type="text" name="email" placeholder="E-mail" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="password" name="password2" placeholder="Retype password" onChange={handleChange} />

        <input type="submit" name="signup_submit" value="Sign me up" />
      </form>


      <div className="right">
        <span className="loginwith">Sign in with<br />social network</span>

        <button className="social-signin facebook">Log in with facebook</button>
        <button className="social-signin twitter">Log in with Twitter</button>
        <button className="social-signin google">Log in with Google+</button>
      </div>

    </div>
  )
}