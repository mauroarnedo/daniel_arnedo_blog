import Glide from '@glidejs/glide'
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../Context/context";
import './CarouselIndex.css';

export default function CarouselIndex() {
  const { carousel } = useContext(Context);
  const carouselRef = useRef(null)
  useEffect(() => {
    if (carousel.length) {
      new Glide(carouselRef.current, {
        type: "carousel",
        perView: 1,
        autoplay: 3000,
      }).mount();
    }
  }, [carousel.length]);

  return (
    <div className="glide glideDiv" ref={carouselRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides flex align-items-center">
          {carousel.map((e, index) => (
            <li className="glide__slide" key={index}>
              <div className='frame'>
                <img className='details' src={e.image} alt={`imagen ${index}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
