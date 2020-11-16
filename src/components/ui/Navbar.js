import React from 'react'
import './navbar.css'
import {Buttom} from './Buttom'


export const Navbar = () => {

      
 
  return (
    <>
  
    <nav class="nav">
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">Logo</i>
    
  </a>
  <a href="#" class="nav__link nav__link--active">
    <i class="material-icons nav__icon">local_grocery_store</i>
  
  </a>
  
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">search</i>
   {/*<span class="nav__text">Privacy</span>*/}
  </a>
  <a href="#" class="nav__link">
  <Buttom/>
  </a>
   
</nav>
</>
  )
}
