import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Work = ({ work }) => {
    const [show, setShow] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseInfo = () => setShowInfo(false);
    const handleShowInfo = () => setShowInfo(true);

    return (
        <div className="frame">
            <Card.Img
                className="details"
                src={work.image}
                alt={work.title}
                onClick={handleShow}
            />

            <Modal show={show} fullscreen={true} onHide={handleClose}>
                <TransformWrapper
                    // initialScale={1}
                    initialPositionX={200}
                    initialPositionY={100}
                >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <>
                            <div className="tools">
                                <Button variant="dark" onClick={() => zoomIn()}>ZOOM IN +</Button>
                                <Button variant="dark" onClick={() => zoomOut()}>ZOOM OUT-</Button>
                                <Button variant="dark" onClick={() => resetTransform()}>RESET</Button>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                <Button onClick={handleShowInfo}>Descripcion</Button>
                            </div>
                            <TransformComponent>
                                <img src={work.image} alt={work.title} style={{ width: "100%", height: "100%" }} />
                                <div>
                                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                                    <Button onClick={handleShowInfo}>Descripcion</Button>
                                    <Modal show={showInfo} onHide={handleCloseInfo} style={{ color: "black" }}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{work.title}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            Año: {work.year} <br />
                                            Técnica: {work.technique} <br />
                                            Medidas: {work.measure} <br />
                                            Precio: {work.price} <br />
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </TransformComponent>
                        </>
                    )}
                </TransformWrapper>
            </Modal>
        </div>
    )
}

export default Work;