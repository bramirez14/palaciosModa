import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';


import { Login } from '../components/Login';
import { Remeras } from '../components/articles/Remeras';
import { MusculosasTops } from '../components/articles/MusculosasTops';
import { Blusas } from '../components/articles/Blusas';
import { Vestidos } from '../components/articles/Vestidos';
import { PollerasyShort } from '../components/articles/PollerasyShort';
import { Checkout } from '../components/shoppingCart/Checkout';
import { Home } from '../components/Home';
import { ButtonDropdown} from '../components/search/ButtonDropdown';
import { ReadProduct } from '../components/crudProducts/ReadProduct';
import { Card } from '../components/search/Card'
import { Navbar } from '../components/ui/Navbar';
import { Register } from '../components/login/Register';
import { Profile } from '../components/login/Profile';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { CreateProduct } from '../components/crudProducts/CreateProduct';
import { UpdateProduct } from '../components/crudProducts/UpdateProduct.jsx'

export const Routers = () => {
    return (
        <Router>
           
               
                <Switch>
                <Route exact path="/" component={ Home } />
                <PublicRoute exact path="/login" component={ Login } />
                <PublicRoute exact path="/register" component={ Register } />
                <PrivateRoute exact path="/profile" component={ Profile } />

                <Route exact path="/remeras" component={Remeras} />  
                <Route exact path="/muscolasTops" component={MusculosasTops} />  
                <Route exact path="/blusas" component={Blusas} />  
                <Route exact path="/vestidos" component={Vestidos} /> 
                <Route exact path="/polleras_short" component={PollerasyShort} />  
                <Route exact path="/checkout" component={Checkout}/>
		        <Route exact path="/search/products" component={Navbar} />
               <Route exact path="/lupa" component={ButtonDropdown} />
               <Route exact path="/card" component={Card} />

		     
                <Route exact path="/crud" component={ReadProduct}/> 
                <Route exact path="/create" component={CreateProduct}/> 
                <Route exact path="/edit/:id" component={ UpdateProduct }/> 

                


               


               

                <Redirect to="/" /> 
               
                
                </Switch>
            
        </Router>
    )
}
