import React,{useState,useEffect} from 'react';
import axios from 'axios';
import mercadopago from 'mercadopago'
import {Redirect,Link} from 'react-router-dom'


mercadopago.configure({
  access_token: 'TEST-1127455374920711-102721-46822eafee74232b65ff6995457f975f-268507302'
});


export const Pago = ({cart}) => {



console.log(cart)

let array= cart.map((ct)=>
{
return {
title:ct.name,
unit_price:ct.cost,
quantity :ct.quantity
}
})
//acomodar todo ya q resulto ser mas facil de lo q pensaba  ajajja 
console.log(array)
var totalQuantity = array.reduce((sum, value) => (typeof value.quantity == "number" ? sum + value.quantity : sum), 0);
var totalPrice= array.reduce((sum, { unit_price, quantity }) => sum + unit_price * quantity,0);
console.log(totalQuantity);
console.log(totalPrice)

//desp ver si quier hacer un if 

const [productos,setProductos] = useState('')

console.log(productos)



const hadleSubmit = async (e)=>{
e.preventDefault()
 await axios.post('http://localhost:4000/api/products/checkout/preferences',{title:'Productos',unit_price:totalPrice,quantity:1})
  .then(res=>{
    console.log(res.data.body.init_point)
     setProductos(res.data.body.init_point)
  }
  

  )
  
}

return (
  <div >
  <form onSubmit={hadleSubmit} style={{display: "flex"}} > 
  <button  >  mercadopago   </button>
  
   
   {cart.map(c=>
   <div className='card card-body'>
    <div key={c.id} className="card" style={{width: "18rem",height:'18rem',}}>
     <img src={c.image} className="card-img-top" alt="accesorio"/>
     <div className="card-body">
   <h5 className="card-title">{c.name}</h5>
   <p className="card-text">Buen manejo con la pc</p>
   <h5 className="card-text">${c.cost} cantidad:{c.quantity} </h5>
  
   
  </div>
  </div>
  </div>
    )}



</form>
<a href={productos} target='_blank'>buy</a>
  
</div>
  )
}

 


  