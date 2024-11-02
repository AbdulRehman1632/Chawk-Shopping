import React from "react";
import "./ProductNav.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const ProductNAv = () => {
  return (
    <div className="mainWrapper">
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="text-white">
          <h1 className="m-0 NavHeading">Chawk</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-3 text-center Navlist" >
            <NavLink className="nav-link text-white" to={"/"}>
              Home
            </NavLink>
            <NavLink className="nav-link text-white" to={"/products"}>
              Products
            </NavLink>
            <NavLink className="nav-link text-white" to={"/contact"}>
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>

    
  );
};

export default ProductNAv;
