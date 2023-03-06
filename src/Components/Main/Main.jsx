import { Routes, Route } from "react-router-dom";
import CarouselIndex from "../Carousel/CarouselIndex";
import About from "../About/About";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<CarouselIndex />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="works" element={<Works />} />
                <Route exact path="contact" element={<Contact />} />
            </Routes>
        </main>
    )
}

export default Main;