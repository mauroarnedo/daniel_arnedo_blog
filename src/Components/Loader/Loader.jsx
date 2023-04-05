import { Spinner } from "react-bootstrap";

export default function Loader() {
    return (
        <div className="d-flex align-items-center justify-content-center mt-5 my-5">
            <Spinner animation="grow" variant="danger" style={{maxWidth: "100px", maxHeight: "100px"}} />
        </div>
    )
}