import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import {Pago} from './Pago'



export default function Cart({ cart, setCart }) {
  const [page, setPage] = useState('');

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
 
 
  const seguirAgregando = (producto) => {
    let nuevoProducto = [...cart];
    
    let itemInCart = nuevoProducto.find(
      item => producto.name === item.name
    );
    
    if (itemInCart) {
      itemInCart.quantity++;
    }
    setCart(nuevoProducto)
  }

  const descontando = (producto)=>{

 let nuevoProducto = [...cart];
    
    let itemInCart = nuevoProducto.find(
      item => producto.name === item.name
    );
    
    if (itemInCart) {
      itemInCart.quantity--;
    }
    setCart(nuevoProducto);

  }

  
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity,0);
  };

  const clearCart = () => {
    setCart([]);
  };

  /*const setQuantity = (product) => {
    const newCart = [...cart];
    let agregar= newCart.find(item => item.name === product.name);
    if (agregar) {
      agregar++;
    }
    setCart(newCart);
  };*/

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <div>
      <button onClick={() => navigateTo('pago')}>
      pagar
 </button>

 


        <div className="products">
          {cart.map((product, idx) => (
            <div className="product" key={idx}>
              <div className='shoping'>
                <img src={product.image} alt={product.image} className="img-thumbnail" />
                <div> {product.name}</div>
                <div className='plus'>
                  <FontAwesomeIcon icon={faPlus} onClick={() => seguirAgregando(product)} 
                   />
                  <input
                    value={product.quantity}
                 
                  />
                  <FontAwesomeIcon icon={faMinus} onClick={() => descontando(product)} />
                </div>
                <div> {product.cost} </div>
              </div>
              <button onClick={() => removeFromCart(product)}>
                Remove
            </button>
            </div>
          ))}
        </div>
      </div>
      <div className='pago'>Total Cost: ${getTotalSum()}
        {cart.length > 0 && (
          <button onClick={clearCart}>Borrar Todo</button>
        )}
      </div>
      <Link to='/envio'>siguiente</Link>
      {page === 'pago' && (
        <Pago cart={cart} setCart={setCart} />
      )}
      
    </>
  );
}