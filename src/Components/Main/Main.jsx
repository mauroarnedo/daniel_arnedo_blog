import { Routes, Route } from "react-router-dom";
// import CarouselIndex from "../Carousel/CarouselIndex";
// import About from "../About/About";
// import Works from "../Works/Works";
// import Contact from "../Contact/Contact";
// import WorkDetails from "../Works/WorkDetails";
import { lazy, Suspense } from "react";
import Delay from "../Delay/Delay";
import Loader from "../Loader/Loader";

const CarouselIndex = lazy(() => Delay(import("../Carousel/CarouselIndex")));
const About = lazy(() => Delay(import("../About/About")));
const Works = lazy(() => Delay(import("../Works/Works")));
const WorkDetails = lazy(() => Delay(import("../Works/WorkDetails")));
const Contact = lazy(() => Delay(import("../Contact/Contact")));

const Main = () => {
    return (
        <main>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route exact path="/" element={<CarouselIndex />} />
                    <Route exact path="about" element={<About />} />
                    <Route exact path="works" element={<Works />} />
                    <Route exact path="works/:id" element={<WorkDetails />} />
                    <Route exact path="contact" element={<Contact />} />
                </Routes>
            </Suspense>
        </main>
    )
}

export default Main;