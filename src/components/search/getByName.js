
import Get from '../../config/Get'

export const getByName = (name = "") => {
  let { peticiones } = Get("http://localhost:4000/api/products/");
  console.log(peticiones);
  if (name === "") {
    return [];
  }

  name = name.toLocaleLowerCase();
  console.log(name);
  let get = peticiones.filter((peticion) =>
    peticion.nombre.toLocaleLowerCase().includes(name)
  );
  console.log(get);
  return get;
};
