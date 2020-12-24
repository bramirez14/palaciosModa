import React from 'react'
import {logout} from '../login/auth/localStorage'


export const Profile = ({history}) => {

  const handleLogout = () => {
   logout();
   console.log(logout())
   history.push('/login')
  
    
   
  }
  let token= JSON.parse(localStorage.getItem('token'))
  let name= JSON.parse(localStorage.getItem('name'))
  let id= JSON.parse(localStorage.getItem('id'))

 

  return (

    <>

    <h1>Bienvenido  {name} </h1>
      
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}