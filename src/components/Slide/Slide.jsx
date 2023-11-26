import React, { useEffect, useState } from 'react';
import './Slidestyle.scss';
import Slider from 'infinite-react-carousel';

const Slide = ({ children,slide,wheel}) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  // const slidesToShow = window.innerWidth < 500
  //   ? 1
  //   : window.innerWidth >= 500 && window.innerWidth <= 900
  //   ? 2
  //   : 4;

  // const wheelScroll = window.innerWidth < 500 ? 1 : 2; // You can adjust the value for wheelScroll as needed
useEffect(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth < 500) {
      setSlidesToShow(1);
    } else if (window.innerWidth >= 500 && window.innerWidth <= 900) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(4);
    }
  });
}, []);
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slide? slide : slidesToShow} wheelScroll={wheel} >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
