import React, { useState, useEffect } from "react";
import axiosProducts from "../../config/axiosProducts";

export const CreateProduct = () => {
  const [listCategory, setListCategory] = useState([]);
  const [listTalles, setListTalles] = useState([]);
  const [listPrendas, setListPrendas] = useState([]);
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    discount: "",
    categoriaId: "",
    talleId: "",
    prendaId: "",
  });
  console.log(producto);
  const handleChange = (e) => {
    //console.log(e.target.value);
    setProducto({
      ...producto, //copia del producto actual
      [e.target.name]: e.target.value,
    });
  };
  //use por cada table en la DB un  handle
  const handleSubmit = (e) => {
    e.preventDefault();
    guardarProducto();
  };

  const handleImage = (e) => {
    console.log(e.target.files);
    setProducto({
      ...producto,
      image: e.target.files,
    });
  };
  const handleCategoria = (e) => {
    console.log(e.target.value);
    setProducto({
      ...producto,

      categoriaId: e.target.value,
    });
  };

  const handleTalle = (e) => {
    console.log(e.target.value);
    setProducto({
      ...producto,
      talleId: e.target.value,
    });
  };
  const handlePrenda = (e) => {
    console.log(e.target.value);
    setProducto({
      ...producto,
      prendaId: e.target.value,
    });
  };

  const guardarProducto = async (e) => {
    let nuevoForm = new FormData();
    for (let i = 0; i < producto.image.length; i++) {
      nuevoForm.append("image", producto.image[i]);
    }
    nuevoForm.append("price", producto.price);
    nuevoForm.append("name", producto.name);
    nuevoForm.append("description", producto.description);
    nuevoForm.append("color", producto.color);
    nuevoForm.append("discount", producto.discount);
    nuevoForm.append("categoriaId", producto.categoriaId);
    nuevoForm.append("talleId", producto.talleId);
    nuevoForm.append("prendaId", producto.prendaId);

    axiosProducts
      .post("/create", nuevoForm)
      .then((res) => {
        console.log(res);
        /*if (res.status === 200) {
          history.push("/crud");
        }*/
      })
      .catch((error) => {
        console.log(error);
      });
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
  useEffect(() => {
    getListCategory();
    getListPrendas();
    getListTalles();
  }, []);

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

        <select name="categoriaId" onChange={handleCategoria}>
          {listCategory.map((list) => (
            <option key={list.id} value={list.id}>
              {list.categoria}
            </option>
          ))}
        </select>
        <select name="talleId" onChange={handleTalle}>
          {listTalles.map((list) => (
            <option key={list.id} value={list.id}>
              {list.talle}
            </option>
          ))}
        </select>

        <select name="predaId" onChange={handlePrenda}>
          {listPrendas.map((list) => (
            <option key={list.id} value={list.id}>
              {list.prenda}
            </option>
          ))}
        </select>

        <div className="form-group">
          <label htmlFor="img">Imagen</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleImage}
            required
            multiple
          />
        </div>

        <button className="btn btn-primary"> guardarProducto</button>
      </form>
    </>
  );
};
