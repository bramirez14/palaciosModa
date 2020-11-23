import React,{useState} from 'react';
import { Link } from 'react-router-dom'
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
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
  {
    open==true && <div id="site-nav" class="site-nav"  >

    <ul>
   

      <li><Link to="/remeras">Productos</Link></li>
      <li><Link to="/remeras">Deportes</Link></li>
      <li><Link to="/remeras">Marcas</Link></li>
      <li><Link to="#">Contacto</Link></li>
      
      
    </ul>
     
  </div>


  }
    
    
    
    

    
    
    
    </>
  );
}
