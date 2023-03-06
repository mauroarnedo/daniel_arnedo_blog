import { useContext, useState } from "react"
import { Context } from "../../Context/context";

const ImageUploader = (props) => {
    const { setImageUp } = useContext(Context);
    const [img, setImg] = useState(null);
    const [error, setError] = useState(null);
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const fileMaxSize = 10 * Math.pow(1024, 2);

    const handleImgUpload = (e) => {
        const file = e.target.files[0];
        if(file && allowedTypes.includes(file.type) && file.size <= fileMaxSize) {
            const reader = new FileReader();
            
            reader.onloadend = () => {
                setImg(reader.result);
                setImageUp(file);
            };
            reader.readAsDataURL(file);
        } else {
            setError("El archivo tiene que ser JPG, JPEG o PNG y no mayor a 10 MB ");
        }
    };
    
    return (
        <>
            <form>
                <label htmlFor="image-upload" >Selecciona una imagen:</label>
                <br/>
                <br/>
                <input
                    id="image-upload"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImgUpload}
                />
            </form>
        {error && <p>{error}</p>}
        {img && 
            <>
            <img src={img} alt="uploaded img" style={{maxWidth: "500", maxHeight: "300px"}} />
            <button onClick={()=> setImg(null)}>Limpiar</button>
            </>
            }
        </>
    )

};

export default ImageUploader;