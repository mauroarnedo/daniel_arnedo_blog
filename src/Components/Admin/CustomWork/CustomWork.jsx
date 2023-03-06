import { useContext } from "react";
import { Context } from "../../../Context/context";
import ImageUploader from "../../ImgUploader/ImageUploader";

const CustomWork = ({work}) => {
    const { imageUp, addImage } = useContext(Context)
    const [work, setWork] = ({
        title: work.title,
        year: work.year,
        technique: work.technique,
        measure: work.measure,
        price: work.price,
        image: work.image,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWork((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const submit = (e) => {
        e.preventDefault()
        addImage(import.meta.env.VITE_UPLOAD_PRESET_WORKS, imageUp)
    }

    return(
        <>
            <form>
                <input 
                    name="title"
                    type="text"
                    value={work.title}
                    onChange={handleInputChange}
                />
                <input 
                    name="year"
                    type="number"
                    value={work.year}
                    onChange={handleInputChange}
                />
                <input 
                    name="technique"
                    type="text"
                    value={work.tecnique}
                    onChange={handleInputChange}
                />
                <input 
                    name="measure"
                    type="text"
                    value={work.measure}
                    onChange={handleInputChange}
                />
                <input 
                    name="price"
                    type="number"
                    value={work.price}
                    onChange={handleInputChange}
                />
                <ImageUploader />
            </form>
        </>
    )
}