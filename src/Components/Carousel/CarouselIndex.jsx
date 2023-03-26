import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Utils/Firebase/firebase";
import { Image } from "react-bootstrap";
import './CarouselIndex.css';
import Slider from "react-slick";
import Loader from "../Loader/Loader";
import BackgroundMusic from "../BackgroundMusic/BackgroundMusic";

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
