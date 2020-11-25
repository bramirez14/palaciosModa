import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

//import { DashboardRoutes} from './DashboardRoutes';
import { Login } from '../components/Login';
import { Remeras } from '../components/articles/Remeras';
import { MusculosasTops } from '../components/articles/MusculosasTops';
import { Blusas } from '../components/articles/Blusas';
import { Vestidos } from '../components/articles/Vestidos';
import { PollerasyShort } from '../components/articles/PollerasyShort';
import { Checkout } from '../components/shoppingCart/Checkout';
import { Home } from '../components/Home';
import {ButtonDropdown} from '../components/search/ButtonDropdown';


import { CreateProduct } from '../components/crudProducts/CreateProduct';


import { ReadProduct } from '../components/crudProducts/ReadProduct';
import { UpdateProduct } from '../components/crudProducts/UpdateProduct';
import {Card} from '../components/search/Card'
import { Navbar } from '../components/ui/Navbar';





export const Routers = () => {
    return (
        <Router>
           
               
                <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/login" component={ Login } />
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
                <Route exact path="/create/product" component={CreateProduct}/> 
                <Route exact path="/update/product/:id" component={ UpdateProduct}/> 

                


               

                <Redirect to="/" /> 
               
                
                </Switch>
            
        </Router>
    )
}
