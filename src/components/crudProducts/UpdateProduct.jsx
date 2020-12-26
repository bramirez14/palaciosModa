import React, { useEffect, useState } from "react";
import "./css/dragDrop.css";
import axiosProducts from "../../config/axiosProducts";

export const UpdateProduct = ({ match, history }) => {
  const { id } = match.params;
  const [data, setData] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [listTalles, setListTalles] = useState([]);
  const [listPrendas, setListPrendas] = useState([]);
  const [highlight, setHighlight] = useState(false);
  const [post, setPost] = useState({
    name: "",
    price: "",
    description: "",
    discount: "",
    color: "",
    image: [],
    categoriaId: "",
    talleId: "",
    prendaId: "",
    deleteId: [],
  });
  const { name, price, image, description, color, discount, deleteId } = post;
  const handleChange = (e) => {
    console.log(e.target.value);
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    let files = e.target.files;
    handFiles(files);
  };
  const handFiles = (files) => {
    let imageArr = [];
    for (let file of files) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        let fileObj = {
          name: file.name,
          type: file.type,
          size: file.size,
          src: reader.result,
        };
        imageArr.push(fileObj);
        setData([...data, ...imageArr]);
        setPost({
          ...post,
          image: [...image, ...files],
        });
      });
    }
  };
  const handleDelete = (e) => {
    let deleted = [];
    let target = e.target.parentElement;
    let targetindex = target.dataset.imgindex * 1;
    deleted.push(image[targetindex].id);
    setData([...data.slice(0, targetindex), ...data.slice(targetindex + 1)]);
    setPost({
      ...post,
      image: [...image.slice(0, targetindex), ...image.slice(targetindex + 1)],
      deleteId: deleteId == undefined ? [deleted] : [...deleteId, deleted],
    });
  };

  useEffect(() => {
    const EditProduct = async () => {
      const res = await axiosProducts.get(`/edit/${id}`);
      if (res.data) {
        setPost(res.data);
        setData(res.data.image);
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
    getListCategory();
    getListPrendas();
    getListTalles();
    EditProduct();
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct();
    saveImage();
  };
  const saveImage = () => {
    let f = new FormData();
    for (let i = 0; i < image.length; i++) {
      f.append("image", image[i]);
    }
    f.append("id", id);
    axiosProducts
      .post("/img", f)
      .then((res) => {})
      .catch((error) => {});
  };

  const editProduct = () => {
    axiosProducts.put(`/edit/${id}`, post).then((res) => {
      if (res.data) {
        history.push("/");
      }
    });
  };
  const handleHighLight = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(true);
  };
  const handleUnhiglight = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let dt = e.dataTransfer;
    let files = dt.files;
    setHighlight(false);
    handFiles(files);
  };

  return (
    <div className="continer">
      <div className="file-upload">
        <form className="" onSubmit={handleSubmit}>
          <div className="custom-form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              defaultValue={name}
              onChange={handleChange}
            />
          </div>
          <div className="custom-form-group">
            <input
              type="text"
              name="price"
              placeholder="Precio"
              defaultValue={price}
              onChange={handleChange}
            />
          </div>
          <div className="custom-form-group">
            <input
              type="text"
              name="color"
              placeholder="Color"
              defaultValue={color}
              onChange={handleChange}
            />
          </div>
          <div className="custom-form-group">
            <input
              type="text-area"
              name="description"
              placeholder="descripcion"
              defaultValue={description}
              onChange={handleChange}
            />
          </div>
          <div className="custom-form-group">
            <input
              type="text"
              name="discount"
              placeholder="descuento"
              defaultValue={discount}
              onChange={handleChange}
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

          <div className="custom-form-group">
            <div
              className={
                highlight
                  ? "custom-file-drop-area highlight"
                  : "custom-file-drop-area"
              }
              onDragEnter={handleHighLight}
              onDragOver={handleHighLight}
              onDragLeave={handleUnhiglight}
              onDrop={handleDrop}
            >
              <input
                type="file"
                name="photos"
                placeholder="Enter photos"
                multiple
                id="filephotos"
                onChange={handleFileChange}
              />
              <label htmlFor="filephotos">
                {" "}
                <h1> + </h1>{" "}
              </label>
            </div>
            <div className="custom-file-preview">
              {data === undefined ? (
                <h1>cargando...</h1>
              ) : (
                data.map((item, index) => (
                  <div className="prev-img" key={index} data-imgindex={index}>
                    <span onClick={handleDelete}>&times;</span>
                    <img
                      src={item.id ? item.image : item.src}
                      alt={item.name}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
