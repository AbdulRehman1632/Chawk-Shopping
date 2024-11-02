import React, { useEffect, useState } from "react";
import axios from "axios";
import './FeaturedCategory.css'
import { useNavigate } from "react-router-dom";
import Slider from "react-slick/lib/slider";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";


const FeaturedCategory = () => {
  const [Clone, SetClone] = useState([]);
  const navigate= useNavigate()
 

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
 <h1>Featured Category</h1>
</div>
<div className="slider-container FS">
    <Slider {...settings}>
    {
        Clone.slice(0,16).map((value,index)=>{
          const {category,id}=value
            return(
                <div key={index}  className="slick-slide bg" onClick={()=>navigate(`/products/${category}`)}>
                <Card  className="bd"style={{ width: "18rem" }}>
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


</>
)

};

export default FeaturedCategory;
