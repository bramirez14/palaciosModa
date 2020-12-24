import React from 'react'
import './navbar.css'
import {Buttom} from './Buttom'
import {Link} from 'react-router-dom'
import { ButtonDropdown } from '../search/ButtonDropdown'
import { Card } from '../search/Card'



export const Navbar= ({history}) => {
  return( 
    <>
  <Card/>
    <nav className="nav">
  <Link to="/" className="nav__link">
    <i className="material-icons nav__icon">Palacios Moda</i>
    
  </Link>
  <Link to="/checkout" className="nav__link nav__link--active">
  <i class="fas fa-cart-arrow-down"></i>
  
  </Link>
  
  <Link to='#' className="nav__link">
  <ButtonDropdown history={history} />
   {/*<span className="nav__text">Privacy</span>*/}
  </Link>
  <Link to="#" className="nav__link">
  <Buttom/>
  </Link>
   
</nav>
</>
  )
}
