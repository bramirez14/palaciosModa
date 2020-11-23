import React, { useState, useEffect } from "react";

import axiosProducts from "../../config/axiosProducts";
import { ListProducts } from "./ListProducts";
export const ReadProduct = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axiosProducts.get();

    console.log(response.data);
    setProducts(response.data);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you wish to delete this item?") === true) {
      axiosProducts.delete(`/delete/${id}`).then((res) => {
        if (res.status !== 200) {
          alert("No se elimino el cliente");
        } else {
          alert("El producto se elimino correctamente");
          //llamamos a todos los productos q qdan
          getProducts();
        }
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <tbody>
        {products.length === 0 ? (
          <ListProducts />
        ) : (
          products.map((product, i) => (
            <ListProducts
              key={product.id}
              {...product}
              i={i}
              onDelete={handleDelete}
            />
          ))
        )}
      </tbody>
    </div>
  );
};
