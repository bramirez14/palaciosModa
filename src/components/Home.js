
import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Card } from './search/Card'
import { getByName } from './search/getByName'

export const Home = ({history}) => {

 return (
        <div>
            <h1>LISTA DE PRODUCTOS</h1>
      
            
            {/*Mandar el history en las props es muy importante cuando usas esel buscador  */}
            
              <Navbar history={history}/>
        </div>
    )
}
