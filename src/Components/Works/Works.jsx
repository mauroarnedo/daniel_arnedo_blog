import React, { useContext, useRef, useEffect } from "react";
import { Context } from "../../Context/context";
import './Works.css';
import Work from "./Work";

export default function Works() {
  const { works } = useContext(Context)

  // const worksRef = useRef(null)
  // useEffect(() => {
  //   if (works.length) {
  //     new Glide(worksRef.current, {
  //       type: "carousel",
  //       perView: 1,
  //       autoplay: 3000,
  //     }).mount();
  //   }
  // }, [works.length]);

  return (
    // <div className="glide w-50" ref={worksRef}>
    //   <div className="glide__track" data-glide-el="track">
    //     <ul className="glide__slides flex align-items-center">
    //       {works.map((work, index) => (
    //         <li className="glide__slide" key={index}>
    //           <Work work={work} />
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div className="works">
      {works.map((work, index) => (
        <Work key={index} work={work} />
      ))}
    </div>
  );
}
