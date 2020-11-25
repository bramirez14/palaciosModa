import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getByName } from './getByName';

export const Card = ({id,image,price,nombre,descripcion,deporte,history}) => {
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
  
const productosFiltered = getByName(q);
    console.log(productosFiltered)
    return (
        
        
      <>
        {productosFiltered.map(product=>
            <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <h1> {id} </h1>

            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ product.image } className="card-img" alt={ nombre } />
                   
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
    <h5 className="card-title"> { nombre} </h5>
                       
                        <p className="card-text"> { descripcion} </p>

                        {
                            ('' !== price ) 
                                && <p className="card-text"> { } </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> {deporte } </small>
                        </p>
                       
                        <Link to={ `/producto/${ id }` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
        )}
       </> 
    )
    
}