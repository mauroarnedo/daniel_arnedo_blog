import { useContext, useState } from "react";
import { Context } from "../../Context/context";
import { Image } from "react-bootstrap";
import './CarouselIndex.css';
import Slider from "react-slick";
import Loader from "../Loader/Loader";

export default function CarouselIndex() {
  const { carousel, loadSlide } = useContext(Context);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    pauseOnHover: true,
    className: "carousel-container"
};

  return (
    <Slider {...settings}>
      {
        !loadSlide ?
        <Loader />
        :
        carousel.map((item, index) => {
          return (
            <div key={index}>
                <Image
                  thumbnail={true}
                  className="carousel-image"
                  src={item.image}
                  alt={`imagen ${index}`}
                />
            </div>
          )
        })
      }
    </Slider>
  );
}
