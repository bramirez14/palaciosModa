import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//import { SearchProducts } from '../components/search/SearchProducts';
import { Home } from '../components/articles/Home';
import { Remeras } from '../components/articles/Remeras';
import { MusculosasTops } from '../components/articles/MusculosasTops';
import { Blusas } from '../components/articles/Blusas';
import { Vestidos } from '../components/articles/Vestidos';
import { PollerasyShort } from '../components/articles/PollerasyShort';
import { Navbar } from '../components/ui/Navbar';


export const DashboardRoutes = () => {
    return (
        <>
      <Navbar/>
       

            <div className="container mt-2">
                <Switch>
                <Route exact path="/home" component={Home} /> 
                <Route exact path="/remeras" component={Remeras} />  
                <Route exact path="/muscolasTops" component={MusculosasTops} />  
                <Route exact path="/blusas" component={Blusas} />  
                <Route exact path="/vestidos" component={Vestidos} /> 
                <Route exact path="/polleras_short" component={PollerasyShort} />  



               
                  


                  <Redirect to="" />
              </Switch>
          </div>


      </>
  )
}