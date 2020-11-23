import React, { useState } from "react";
import axiosProducts from "../../config/axiosProducts";

export const CreateProduct = ({ history }) => {
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    sport: "",
    image: "",
  });
  const handleChange = (e) => {
    setProducto({
      ...producto, //copia del producto actual
      [e.target.name]: e.target.value,
    });
  };
  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setProducto({
      ...producto,
      image: e.target.files[0],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    guardarProducto();
  };

  const guardarProducto = async (e) => {
    let nuevoForm = new FormData();
    nuevoForm.append("image", producto.image);
    nuevoForm.append("price", producto.price);
    nuevoForm.append("name", producto.name);
    nuevoForm.append("sport", producto.sport);

    console.log(nuevoForm);
    axiosProducts
      .post("/create", nuevoForm)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h2>Nuevo Producto</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Ingresar nombre"
            defaultValue={producto.nombre}
            onChange={handleChange}
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
            defaultValue={producto.deporte}
            onChange={handleChange}
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
            defaultValue={producto.precio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="img">Imagen</label>
          <input
            type="file"
            className="form-control"
            name="image"
            accept="image/*"
            onChange={handleImage}
          />
        </div>

        <button className="btn btn-primary"> guardarProducto</button>
      </form>
    </>
  );
};
