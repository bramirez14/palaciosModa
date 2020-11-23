import React, { useState } from 'react';

{/*opciones del select */}
const HOME_GARDEN = 'home and garden';
const UTILITY = 'utility';

export default function Products({ setCart, cart }) {
  console.log( cart)
{/*Acá cambiamos a los porductos de nuestra base de datos  con un axios*/}
  const [products] = useState([
    {
      id:1,
      category: UTILITY,
      name: 'AA Battery',
      cost: 2.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },
    {
      id:2,
      category: HOME_GARDEN,
      name: 'Blanket',
      cost: 19.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
  ]);

  const addToCart = (producto) => {
    let nuevoProducto = [...cart];
    
    let itemInCart = nuevoProducto.find(
      item => producto.name === item.name
    );
    
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...producto,
        quantity: 1,
      };
      nuevoProducto.push(itemInCart);
    }
    setCart(nuevoProducto);
  };

  const [category, setCategory] = useState(HOME_GARDEN);
//console.log(category)
  const getProductsInCategory = () => {
    return products.filter(
      product=> product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      {/* capturamos el valor del input */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, i) => (
          <div className="product" key={i}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </>
  );
}