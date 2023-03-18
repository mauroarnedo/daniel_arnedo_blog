import { createContext, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Utils/Firebase/firebase";

export const Context = createContext();

export default function ContextProvider(props) {
    const [works, setWorks] = useState([])
    const [carousel, setCarousel] = useState([])
    const [category, setCategory] = useState("gallery")
    const [load, setLoad] = useState(false);
    const [loadSlide, setLoadSlide] = useState(false);

    const worksCollection = () => {
        getDocs(query(collection(db, "works"), where("category", "==", category)))
            .then((res) => {
                const docs = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    
                setWorks(docs);
                setLoad(true);
            })
            .catch(error => console.log(error))
    };

    const carouselCollection = () => {
        getDocs(collection(db, "carousel"))
            .then((res) => {
                const docs = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));

                setCarousel(docs);
                setLoadSlide(true);
            })
            .catch(error => console.log(error))
    };
    
    useEffect(worksCollection, [category]);
    useEffect(carouselCollection, []);

    return (
        <Context.Provider value={{ works, carousel, setCategory, load, setLoad, loadSlide }}>
            {props.children}
        </Context.Provider>
    )
}