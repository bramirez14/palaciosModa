import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./dropdown.css";
import { Search } from "./Search";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getByName } from "./getByName";
import { Route } from "react-router";
import { Home } from "../Home";

export const ButtonDropdown = ({ history }) => {
  console.log(history)
  //Button
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  //prueba
  const [busq, setBusq] = useState("");
  const handleChange = (e) => {
    setBusq({
      ...busq, //copia del producto actual
      [e.target.name]: e.target.value,
    });
  };

  //Search
  const location = useLocation();
  
  console.log(location);
  const { q = "" } = queryString.parse(location.search);

  console.log(q);
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;

  const productosFiltered = getByName(q);
  console.log(productosFiltered);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <>
      <FontAwesomeIcon icon={faSearch} onClick={handleClick} />

      {open === true && (
        <div id="search" class="search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              // onChange={handleChange}
              value={searchText}
              onChange={handleInputChange}
            />
          </form>
        </div>
      )}
    </>
  );
};
