import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { CloseButton, Modal } from "react-bootstrap";
import './Works.css';

const ZoomImage = ({ image, index, open, close }) => {

    return (
        <Modal
            show={open}
            fullscreen={true}
            onHide={close}
            contentClassName="modal"
        >
            <TransformWrapper
                limitToBounds={false}
                centerOnInit={true}
                centerZoomedOut={true}
            >
                <TransformComponent>
                    <CloseButton className="closeButton" aria-label="Hide" onClick={close} />
                    <img src={image} alt={`imagen ${index}`} className="modal-image" />
                </TransformComponent>
            </TransformWrapper>
        </Modal>
    )
}

export default ZoomImage;