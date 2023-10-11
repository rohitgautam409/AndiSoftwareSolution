import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "./banner1.png"
import banner2 from "./banner2.jpg"
function CarouselBootstrap() {

  
  return (
   
     <div > 
      <Carousel > 
        <Carousel.Item interval={10000}> 
          <img 
            className="d-block w-90" src={banner1}  alt="Image One"
          /> 
         
        </Carousel.Item> 
        <Carousel.Item interval={5000}> 
          <img 
            className="d-block w-90" src={banner2}
            alt="Image Two"
          /> 
        </Carousel.Item> 
      </Carousel> 
    </div> 
  );
}

export default CarouselBootstrap