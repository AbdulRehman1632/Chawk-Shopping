import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../FlashSale/FlashSale.css'
import { Modal, Card, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const ProductCategory = () => {
    
    const {category}=useParams()
    const [Clone, SetClone] = useState([]);
    const [FilterProduct,SetFilterProduct] =useState([]);
    
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
        const GetApi = async () => {
          try {
            const RunApi = await axios.get(
            "https://fakestoreapi.in/api/products"
            );
            SetClone(RunApi.data.products);
            
          } catch (error) {
            console.log(error);
          }
        };
        GetApi();
      }, []);

      useEffect(()=>{
        const FilteredData=Clone.filter((item)=>{
            return item.category===category
        })
        SetFilterProduct(FilteredData)  
    },[Clone,category])
    
    
  return (
    <div>
      <h1>{category.toUpperCase()}</h1>
      <div className="FlashInline">
      { 
        FilterProduct.slice(0,16).map((value,index)=>{
            return(
                <div key={index} className="FlashSaleWrapper" onClick={()=>handleProductClick({value})}  >
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
            )
        })
      }
      </div>

      <Modal  show={showModal} onHide={handleClose} size="lg">
       <Modal.Header className="modalColor" closeButton>
          <Modal.Title>{ selectedProduct?.title}</Modal.Title>
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
   
    </div>
  )
}

export default ProductCategory
