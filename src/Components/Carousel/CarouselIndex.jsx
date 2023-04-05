import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Utils/Firebase/firebase";
import { Image } from "react-bootstrap";
import './CarouselIndex.css';
import Slider from "react-slick";
import Loader from "../Loader/Loader";
import BackgroundMusic from "../BackgroundMusic/BackgroundMusic";

const NextArrow = (props) => {
  const {onClick} = props;
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" cursor="pointer" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
  </svg>
  )
}

const PrevArrow = (props) => {
  const {onClick} = props;
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" cursor="pointer" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
  </svg>
  )
}

export default function CarouselIndex() {
  const [carousel, setCarousel] = useState([])
  const [load, setLoad] = useState(false);

  const carouselCollection = () => {
    getDocs(collection(db, "carousel"))
      .then((res) => {
        const docs = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));

        setCarousel(docs);
        setLoad(true);
      })
      .catch(error => console.log(error))
  };

  useEffect(carouselCollection, []);


  const settings = {
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "carousel-container",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <>
      <BackgroundMusic />
      <Slider {...settings}>
        {
          !load ?
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
    </>
  );
}
