import React from 'react';
import { Link } from 'react-router-dom';


export const Card = ({
    id,
    nombre,
    descripcion,
    image,
    deporte,
    price,
   

}) => {
    
    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <h1> {id} </h1>

            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `../../productosDB/${image}` } className="card-img" alt={ nombre } />
                   
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
    )

}