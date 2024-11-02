import React, { useEffect, useState } from 'react'
import './NewArrival.css'
import axios from 'axios'
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Modal, Card, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';


const NewArrivals = () => {

    const [IsArrived,SetArrived]=useState([])

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

    useEffect(()=>{
        const NewApi= async()=>{
            try{
                const GetNew=await axios ('https://api.escuelajs.co/api/v1/products') 
                // console.log(GetNew.data)
                SetArrived(GetNew.data)
            }
            catch(error){
                console.log(error)
            }
        }
        NewApi()

    },[])



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 4, 
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
  <>
    <div className="ArrivalHeading">
        <h1>New Arrivals</h1>
    </div>
    <div className="slider-container ">
        <Slider {...settings}>
        {
            IsArrived.slice(0,40).map((value,index)=>{
                return(
                    <div key={index}  className="slick-slide bg" onClick={()=>handleProductClick({value})}>
                    <Card  className="bd"style={{ width: "18rem" }}>
                      <Card.Img
                        className="background"
                        variant="top"
                        src={value.images}
                      />
                      <Card.Body>
                        <Card.Title>
                          {value.title.length > 15
                            ? value.title.slice(0, 15) + "..."
                            : value.title}
                        </Card.Title>
                        <Card.Text>
                          <h5>Price: ${value.price}</h5>
                          <h5>Category: {value.category.name}</h5>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                )
            })
        }
      </Slider>
    </div>


    <Modal  show={showModal} onHide={handleClose} size="lg">
       <Modal.Header className="modalColor" closeButton>
          <Modal.Title>{ selectedProduct?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalColor">
          <Row>
            <Col md={6}>
              <img
                src={selectedProduct?.value.images}
                alt={selectedProduct?.title}
                style={{ width: '100%' }}
              />
            </Col>
            <Col md={6}>
            <h4>{selectedProduct?.value.title.slice(0,25)}..</h4>
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
   
    </>

    
  )
}

export default NewArrivals
