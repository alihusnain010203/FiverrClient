import React, { useEffect, useState } from "react";
import "./Slidestyle.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slide, wheel }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const windowWidth = window.innerWidth;
  
      if (windowWidth > 800) {
        setSlidesToShow(3);
      }
      else if(windowWidth < 800 && windowWidth > 500){
        setSlidesToShow(2);
      }
      else{
        setSlidesToShow(1);
      }
    };
  
    window.addEventListener("resize", updateSlidesToShow);
  },[]);
  
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slide ? slide : slidesToShow} wheelScroll={wheel}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

