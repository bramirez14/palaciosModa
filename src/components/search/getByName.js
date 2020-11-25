
import Get from '../../config/Get'

export const getByName = (name = "") => {
  let { peticiones } = Get("http://localhost:4000/api/products/");
  
  if (name === "") {
    return [];
  }

  name = name.toLocaleLowerCase();

  let get = peticiones.filter((peticion) =>
    peticion.nombre.toLocaleLowerCase().includes(name)
  );
 
  return get;
};
