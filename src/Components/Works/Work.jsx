import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

const Work = ({ work }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="frame">
            <Card.Img
                className="details"
                src={work.image}
                alt={work.title}
                onClick={handleShow}
            />

            <Modal show={show} onHide={handleClose} style={{ color: "black"}}>
                <Modal.Header closeButton>
                    <Modal.Title>{work.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Año: {work.year} <br />
                    Técnica: {work.technique} <br />
                    Medidas: {work.measure} <br />
                    Precio: {work.price} <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button href={work.image} target="_blank">
                        Ver imagen completa
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Work;