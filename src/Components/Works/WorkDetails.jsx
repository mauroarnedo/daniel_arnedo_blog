import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Utils/Firebase/firebase";
import Loader from "../Loader/Loader";
import ZoomImage from "./ZoomImage";

const WorkDetails = () => {
    const { id } = useParams();
    const [work, setWork] = useState({});
    const [load, setLoad] = useState(false);
    const [show, setShow] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)

    const fetchOneWork = () => {
        getDoc(doc(db, "works", id))
            .then(docSnap => {
                if (docSnap.exists()) {
                    setWork({
                        id: docSnap.id,
                        title: docSnap.get("title"),
                        year: docSnap.get("year"),
                        technique: docSnap.get("technique"),
                        measure: docSnap.get("measure"),
                        price: docSnap.get("price"),
                        description: docSnap.get("description"),
                        image: docSnap.get("image"),
                        video: docSnap.get("video")
                    })
                    setLoad(true);
                }
            })
            .catch(() => {
                alert("No se encontro ningun trabajo.")
            })
    }
    useEffect(fetchOneWork, [id])

    const openImage = (index) => {
        setSelectedImageIndex(index);
        setShow(true);
    };
    const closeImage = () => {
        setSelectedImageIndex(null);
        setShow(false);
    }

    return (
        <div className="d-flex align-items-center justify-content-center w-100">
            {
                !load ?
                    <Loader />
                    :
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="container mb-5 p-5">
                            <div className="text-center mb-5">
                                <h3><strong>Titulo</strong>: {work.title}</h3><br />
                                {work.year ? <p><strong>Año</strong>: {work.year}</p> : null}
                                {work.technique ? <p><strong>Tecnica</strong>: {work.technique}</p> : null}
                                {work.measure ? <p><strong>Medidas</strong>: {work.measure}cm</p> : null}
                                {work.price ? <p><strong>Precio</strong>: {work.price}</p> : null}
                            </div>
                            {work.description ?
                                work.description.split(" . ").map((text, index) => (
                                    <p className="text-device" key={index}>{text}<br /></p>
                                ))
                                :
                                null}
                        </div>
                        {
                            typeof work.image === 'string' ?
                                <div>
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        onClick={() => openImage(0)}
                                        className="image-detail"
                                    />
                                    {selectedImageIndex === 0 && (
                                        <ZoomImage image={work.image} index={0} open={show} close={closeImage} />
                                    )}
                                </div>
                                :
                                <div className="d-flex flex-wrap align-items-center justify-content-center gap-5">
                                    {
                                        work.image.map((image, index) => {
                                            return (
                                                <div key={index}>
                                                    <Image
                                                        thumbnail={true}
                                                        src={image}
                                                        alt={index}
                                                        className="image-detail"
                                                        onClick={() => openImage(index)}
                                                    />
                                                    {selectedImageIndex === index && (
                                                        <ZoomImage image={image} index={index} open={show} close={closeImage} />
                                                    )}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                        }
                        <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 mt-5 w-75">
                            {
                                work.video && work.video.map((video, index) => (
                                    <iframe
                                        key={index}
                                        width="560"
                                        height="315"
                                        src={video}
                                        allowFullScreen
                                    >
                                    </iframe>
                                ))
                            }
                        </div>
                    </div>
            }

        </div>
    );
};

export default WorkDetails;