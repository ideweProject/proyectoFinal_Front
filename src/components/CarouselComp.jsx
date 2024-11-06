import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselComp() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container ">
      <Slider {...settings}>
        <div className="">
          <img
            src="../../images/Products/Juices/brown-juice-XL.jpg"
            alt=""
            className="img-carousel"
          />
        </div>
        <div className="">
          <img
            src="../../images/Products/Juices/brown-juice.jpg"
            alt=""
            className="img-carousel"
          />
        </div>{" "}
        <div className="">
          <img
            src="../../images/Products/Juices/brown-shot.jpg"
            alt=""
            className="img-carousel"
          />
        </div>
        <div className="">
          <img
            src="../../images/Products/Juices/carrot-juice.jpg"
            alt=""
            className="img-carousel"
          />
        </div>{" "}
        <div className="">
          <img
            src="../../images/Products/Juices/carrot-shot.jpg"
            alt=""
            className="img-carousel"
          />
        </div>{" "}
        <div className="">
          <img
            src="../../images/Products/Juices/celery-shot.jpg"
            alt=""
            className="img-carousel"
          />
        </div>
        <div className="">
          <img
            src="../../images/Products/Juices/orange-juice.jpg"
            alt=""
            className="img-carousel"
          />
        </div>{" "}
        <div className="">
          <img
            src="../../images/Products/Juices/pureGreen-juice-XL.jpg"
            alt=""
            className="img-carousel"
          />
        </div>{" "}
        <div className="">
          <img
            src="../../images/Products/Juices/red-shot.jpg"
            alt=""
            className="img-carousel"
          />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComp;
