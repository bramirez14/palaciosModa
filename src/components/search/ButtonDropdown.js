import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./dropdown.css";

import { useForm } from "../../hooks/useForm";

export const ButtonDropdown = ({ history }) => {
  //Button
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  //Search
  
  const [formValues, handleInputChange] = useForm({
    searchText: '',
  });

  const { searchText } = formValues;
  console.log(searchText);
  console.log(formValues);


 // localStorage.setItem("search", JSON.stringify(productosFiltered));

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/products?q=${searchText}`);
  };

  return (
    <>
      <FontAwesomeIcon icon={faSearch} onClick={handleClick} />
     
      {open === true && (
        <div id="search" class="search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="¿Qué productos estas buscando?"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
          </form>
        </div>
      )}
     
    </>
  );
};
