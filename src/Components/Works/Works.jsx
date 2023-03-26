import React, { useContext, useRef, useEffect } from "react";
import { Context } from "../../Context/context";
import './Works.css';
import Work from "./Work";
import Loader from "../Loader/Loader";

export default function Works() {
  const { works, setCategory, load } = useContext(Context);
  const categories = ["gallery", "falSeries", "tapir"];

  return (
    <div className="works-wrapper">
      <nav>
        <ul>
          {
            categories.map((category, index) => (
              <li key={index}>
                <button className="category-button" onClick={() => setCategory(category)}>
                  {category}
                </button>
              </li>
            ))
          }
        </ul>
      </nav>
      {
        !load ?
          <Loader />
          :
          <div className="works">
            {works.map((work, index) => (
              <Work key={index} work={work} />
            ))}
          </div>
      }
    </div>
  );
}
