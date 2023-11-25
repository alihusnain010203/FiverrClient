// import React from 'react'
// import './Slidestyle.scss'
// import  Slider  from 'infinite-react-carousel'

// const Slide = ({children, slidesToShow, wheelScroll}) => {

//   return (
//     <div className="slide">
//         <div className="container">


// <Slider slidesToShow={slidesToShow} wheelScroll={wheelScroll}>
//   {children}
// </Slider>;

 
//         </div>
//     </div>
//   )
// }

// export default Slide
import React from 'react';
import './Slidestyle.scss';
import Slider from 'infinite-react-carousel';

const Slide = ({ children }) => {
  const slidesToShow = window.innerWidth < 500
    ? 1
    : window.innerWidth >= 500 && window.innerWidth <= 900
    ? 2
    : 4;

  const wheelScroll = window.innerWidth < 500 ? 1 : 2; // You can adjust the value for wheelScroll as needed

  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} wheelScroll={wheelScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
