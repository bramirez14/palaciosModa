import React, { useEffect, useState } from "react";
import axiosProducts from '../../config/axiosProducts'

export const UpdateProduct = ({ match, history }) => {
  const { id } = match.params;
console.log(match)
  const [product, setProduct] = useState({
    name: "",
    price: "",
    sport: "",
  });

  const handleChage = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar producto
    saveProduct();
  };

  const saveProduct = () => {
    axiosProducts.put(`/edit/${id}`, product).then((res) => {
      if (res.data) {
        history.push("/");
      }
      console.log(res);
    });
  };

  useEffect(() => {
    const EditProduct = () => {
      axiosProducts.get(`/edit/${id}`).then((res) => {
        if (res.data) {
          setProduct(res.data);
        } else {
          alert("No se ha encontrado el producto");
        }
      });
    };

    EditProduct();
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Ingresar nombre"
          defaultValue={product.nombre}
          onChange={handleChage}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="deporte">Deporte</label>
        <input
          type="text"
          className="form-control"
          name="sport"
          placeholder="Ingresar a que deporte pertence"
          defaultValue={product.deporte}
          onChange={handleChage}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          className="form-control"
          name="price"
          placeholder="Ingresar un precio"
          defaultValue={product.precio}
          onChange={handleChage}
          required
        />
      </div>
      <button className="btn btn-primary">guardarProduct</button>
    </form>
  );
};
