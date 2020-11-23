import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';
//import './App.css';
import Cart from './Cart';
import Products  from './Products';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

export const Checkout = () => {

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const getCartTotal = () => {

        return cart.reduce((sum, { quantity }) =>
            sum + quantity
            , 0);


    };

    console.log(getCartTotal())
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    {/*botones */}
                    <button onClick={() => navigateTo(PAGE_CART)}>
                        Ir al Carrito({getCartTotal()})
        </button>

                    <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
                        Ver Productos
        </button>

                </header>
          
                {page === PAGE_PRODUCTS && (

                    <Products cart={cart} setCart={setCart} />
                )}
                {page === PAGE_CART && (
                    <Cart cart={cart} setCart={setCart} />
                )}
<Navbar/>
            </div>
        </div>
    )
}



