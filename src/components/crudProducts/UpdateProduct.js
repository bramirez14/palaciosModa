import React, { useEffect, useState } from "react";
import axiosProducts from "../../config/axiosProducts";
import { Card, Button } from 'react-bootstrap';
import './css/update.css'
import {DragDrop }from './DragDrop'

export const UpdateProduct = ({ match, history }) => {
  const { id } = match.params;

  const [vista, setVista] = useState([]);
  const [prueba, setPrueba] = useState([]);
   const [guardar, setGuardar] = useState([]);

  const [listCategory, setListCategory] = useState([]);
  const [listTalles, setListTalles] = useState([]);
  const [listPrendas, setListPrendas] = useState([]);
  

  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
    color:"",
    image: [],
    discount: "",
    categoriaId: "",
    talleId: "",
    prendaId: "",
  
  });
  const handleChange = (e) => {
   setProducto({
      ...producto, 
      [e.target.name]: e.target.value, 
      });
  };



    const handleSubmit = (e) => {
    e.preventDefault();
   saveProduct();
  };


const saveProduct = () => {


    axiosProducts.put(`/edit/${id}`,[producto,prueba]).then((res) => {
 console.log(res.data)
      /*if (res.data) {
        history.push("/");
      }*/
  
    });
  };

  useEffect(() => {
    const EditProduct = async () => {
      const res = await  axiosProducts.get(`/edit/${id}`)
      console.log( res.data )
        if (res.data) {
          setProducto(res.data);
        } else {
          alert("No se ha encontrado el producto");
        }
      };
   
  const getListCategory = async () => {
    const response = await axiosProducts.get("/category");
    setListCategory(response.data);
  };

  const getListPrendas = async () => {
    const response = await axiosProducts.get("/prenda");
    setListPrendas(response.data);
  };
  const getListTalles = async () => {
    const response = await axiosProducts.get("/talle");
    setListTalles(response.data);
  };
    //getListProducts();
    getListCategory();
    getListPrendas();
    getListTalles();
    EditProduct();
  }, [id]);
  
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setVista( [...vista,reader.result])
      }
    }
    reader.readAsDataURL(e.target.files[0])
    console.log(e.target.files[0]);
    setGuardar([...guardar,
      e.target.files[0]],
    );

  };

/****prueba */


const handleDelete = (id) => {
 
let  img = producto.image.filter(pi=> pi.id!=id );
let  imge = producto.image.filter(pi=> pi.id==id )
setPrueba([...prueba,imge])
setProducto({...producto,image:img})

  }
/***fin prueba */
console.log(vista)
console.log(guardar)


//borrar elemento de vista
const handleBo =(v)=>{let  img = vista.filter(pi=> pi!=v );
    console.log(img)
    setVista(img)
}


  return (
    <>
      <h2>Nuevo Producto</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Nombre"
            defaultValue={producto.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="color"
            placeholder="Color"
            defaultValue={producto.color}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Precio"
            defaultValue={producto.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="description"
            className="form-control"
            name="description"
            defaultValue={producto.description}
            placeholder="description"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="discount"
            placeholder="Descuento"
            defaultValue={producto.discount}
            onChange={handleChange}
            required
          />
        </div>
        
        <select name="categoriaId" onChange={handleChange}>
          {listCategory.map((list) => (
            <option key={list.id} value={list.id}>
              {list.categoria}
            </option>
          ))}
        </select>
        <select name="talleId" onChange={handleChange}>
          {listTalles.map((list) => (
            <option key={list.id} value={list.id}>
              {list.talle}
            </option>
          ))}
        </select>

        <select name="predaId" onChange={handleChange}>
          {listPrendas.map((list) => (
            <option key={list.id} value={list.id}>
              {list.prenda}
            </option>
          ))}
        </select>
        <div className='image'>
{ producto.image=== []? <h1>cargando...</h1>:
 producto.image.map(p=> 
<Card  key={p.id} >
  <h4>{p.id}</h4>

  <Card.Img  variant="top" src={p.image} alt={vista} style={{ width: '200px',
height: '200px' }} />
  <Card.Body>

<Button variant="primary"  onClick={() => {
                  handleDelete(p.id);
      }}>delete</Button>
  </Card.Body>
</Card>
    )}
</div>
       
          <div className='image'>
        <input type="file" accept="image/*" name="image" id="input" onChange={imageHandler} />
        {vista.map(v =>
            <>
        <img src={v} alt="Girl in a jacket" width="200" height="400" onClick={() => {
                  handleBo(v)}} />

        </>
              )}            
        
        </div>  
        <button className="btn btn-primary"> guardarProducto</button>
        <DragDrop/>

      </form>
    </>
  );
};
