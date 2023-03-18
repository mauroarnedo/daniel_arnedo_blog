import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Works.css';


const Work = ({ work }) => {
    const image = typeof work?.image === "string" ? work.image : work.image[0];

    return (
        <div>
            {
                <Link
                    to={`/works/${work.id}`}
                >
                    <Image
                        thumbnail={true}
                        className="image-gallery"
                        src={image}
                        alt={work.title}
                    />
                </Link>
            }
        </div>
    );
}

export default Work;