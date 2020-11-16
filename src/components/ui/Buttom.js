import React,{useState} from 'react';

import './buttom.css'

export const Buttom = () => {
  
  const [open, setOpen] = useState(false);

  const handleClick=()=>{
    setOpen(!open)
  cambiarClase()

  }
  function cambiarClase(){
   
    let menuOpen = document.getElementById('menu-toggle');
       menuOpen.classList.toggle('change');    
       
}
  return (

    <>
      <div id="menu-toggle"  class="menu-toggle" onClick={handleClick}  >
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
  {
    open==true && <div id="site-nav" class="site-nav"  >

    <ul>
   

      <li><a href="/products"><em class="fab fa-product-hunt site-nav--icon"></em>Productos</a></li>
      <li><a href="/products"><em class="fas fa-skating site-nav--icon"></em>Deportes</a></li>
      <li><a href="/products"><em class="fas fa-tags site-nav--icon"></em>Marcas</a></li>
      <li class="faa"><a href="#"><em class=" fa fa-envelope site-nav--icon"></em>Contacto</a></li>
      
      
    </ul>
     
  </div>


  }
    
    
    
    

    
    
    
    </>
  );
}
