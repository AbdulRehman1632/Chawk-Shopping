import React, { useEffect, useState } from "react";
import "./FlashSale.css";
import axios from "axios";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { NavLink, useNavigate } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { Modal, Card, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const FlashSale = () => {

  const [Flash, SetFlash] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [showModal, setShowModal] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true); 
  };

  const handleClose = () => setShowModal(false);

  const handleAddToCart = () => {
    toast.success(` added to cart!`);
  };


  useEffect(() => {
    const FlashApi = async () => {
      try {
        const GetFlash = await axios.get(
          "https://fakestoreapi.in/api/products"
        );
        SetFlash(GetFlash.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    FlashApi();
  }, []);


  return (
    <>
     <div className="mainbanner">
        <NavLink to={"/products"}>
    <Image  src="./assets/images/banner.webp" fluid/>;
    </NavLink>
      </div>
      <div className="FlashHeading">
        <h1>Flash Sale</h1>
      </div>
      <div className="FlashInline">
        {Flash.slice(0, 16).map((value, index) => {
          return (
            <div key={index} className="FlashSaleWrapper" onClick={()=>handleProductClick({value})}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="background"
                  variant="top"
                  src={value.image}
                />
                <Card.Body>
                  <Card.Title>
                    {value.title.length > 15
                      ? value.title.slice(0, 15) + "..."
                      : value.title}
                  </Card.Title>
                  <Card.Text>
                    <h5>Price: ${value.price}</h5>
                    <h5>Color: {value.color}</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="FlashModalWrapper">
      <Modal  show={showModal} onHide={handleClose} size="lg">
       <Modal.Header className="modalColor" closeButton>
        </Modal.Header>
        <Modal.Body className="modalColor">
          <Row>
            <Col md={6}>
              <img
                src={selectedProduct?.value.image}
                alt={selectedProduct?.title}
                style={{ width: '100%' }}
              />
            </Col>
            <Col md={6}>
            <h4>Brand: {selectedProduct?.value.brand.toUpperCase()}</h4>
              <h6 className="fs-5">Description:<br></br>{selectedProduct?.value.description.slice(0,180)}....</h6>
              <h4 className='text-danger'>${selectedProduct?.value.price}</h4>
              <div className="FlashBtn">
              <button onClick={()=>handleAddToCart()}>Add To Cart</button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        
      <ToastContainer position="top-right" autoClose={3000} />
      </Modal>
      </div>

   
    </>
  );
};

export default FlashSale;
