import React from 'react'
import { Navbar } from '../components/ui/Navbar'
//import {Search} from './search/Search'
import {ButtonDropdown} from './search/ButtonDropdown'


export const Home = ({history}) => {

  
  console.log(history)
   
    return (
        <div>
            <h1>LISTA DE PRODUCTOS</h1>
            {/*Mandar el history en las props es muy importante cuando usas esel buscador  */}
            
              <Navbar history={history}/>
        </div>
    )
}
