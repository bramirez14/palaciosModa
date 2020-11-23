import React from "react";
import queryString from 'query-string'

import { Card } from "./Card";
import { useLocation } from "react-router-dom";
import { getByName } from "./getByName";
import { useForm } from "../../hooks/useForm";


export const Search = ({ history }) => {
  
    const location = useLocation();
    console.log(location)
    const {q=''} = queryString.parse( location.search );
        console.log(q)
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    console.log(formValues)
    const productosFiltered = getByName( q )
console.log(productosFiltered)

    const handleSearch = (e) => {
        e.preventDefault();
        
        history.push(`?q=${ searchText }`);
       
    }

    return (
        <div>
            <h1>Search </h1>
            <hr />
            
            <div className="row">
                
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Resultados </h4>
                    <hr />

                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                ¿Qué producto desea buscar?
                            </div>
                    }

                    { 
                        (q !=='' &&  productosFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                No hay un producto con  { q }
                            </div>
                  }

                    {
                        productosFiltered.map( producto=> (
                            <Card 
                                key={ producto.id }
                                { ...producto }
                            />
                        ))
                        }

                </div>

            </div>


        </div>
    )
};
