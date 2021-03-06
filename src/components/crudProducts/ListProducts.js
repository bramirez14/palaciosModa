import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Table } from "react-bootstrap";


export const ListProducts = ({ id, i, name, price, image,onDelete }) => {
  console.log(image, id, name, price);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Lista de productos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/create/product">Crear</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Nombre</th>
            
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{i + 1}</th>
            <td>
              <img src={image} />
            </td>
            <td>{name}</td>
           
            <td>${price}</td>
            <td>
              <Link
                to={`/edit/${id}`}
                className="btn btn-success mr-1"
                role="button"
                aria-pressed="true"
              >
                Editar
              </Link>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  onDelete(id);
                }}
              >
                Elimiar
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
