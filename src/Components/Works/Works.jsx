import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Utils/Firebase/firebase";
import './Works.css';
import Work from "./Work";
import Loader from "../Loader/Loader";

export default function Works() {
  const [works, setWorks] = useState([])
  const [category, setCategory] = useState("gallery");
  const categories = ["gallery", "falSeries", "tapir"];
  const [load, setLoad] = useState(false);

  const worksCollection = () => {
    getDocs(query(collection(db, "works"), where("category", "==", category)))
      .then((res) => {
        const docs = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));

        setWorks(docs);
        setLoad(true);
      })
      .catch(error => {throw new Error(error)})
  };

  useEffect(worksCollection, [category])

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
