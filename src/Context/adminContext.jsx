import { createContext, useState } from "react";
import CryptoJS from "crypto-js";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../Utils/Firebase/firebase";

export const AdminContext = createContext();

export default function adminContextProvider(props) {
    const [imageUp, setImageUp] = useState(null)

    const sha1 = (data) => {
        const hash = CryptoJS.SHA1(data);
        return hash.toString(CryptoJS.enc.Hex);
    }

    const addWork = (work) => {
        addDoc(collection(db, "works"), work)
            .then(res => console.log(res.id))
            .catch(error => console.log(error))
    }

    const updateWork = (work) => {
        updateDoc(collection(db, "works", work.id), work)
            .then(() => console.log("Trabajo actualizado"))
            .catch(error => console.log(error))
    }

    const addImage = (uploadPreset, image) => {
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", uploadPreset)

        fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: FormData
        }).then((res) => {
            console.log(res.data);
            // addDoc(collection(db, "carousel"), { image: res.data })
        })
    }
    /**
     * 
     * @param {*} data
     * FALTAN AGREGAR VARIABLES DE ENTORNO 
     * @returns 
     */
    const deleteImage = (data) => {
        const timestamp = Math.floor(Date.now() / 1000)
        const signature = sha1(data) //Signature ex = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
        const body = `public_id=${publicId}&timestamp=${timestamp}&api_key=${apiKey}&signature=${signature}`;

        return fetch(url, {
            method: 'DELETE',
            body: body,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Error deleting file.');
            }
            return response.json();
          })
          .catch(error => {
            console.error('Error deleting file:', error);
            throw error;
          });
    }

    return (
        <AdminContext.Provider value={{imageUp, setImageUp, addWork, updateWork, addImage, deleteImage}}>
            {props.children}
        </AdminContext.Provider>
    )
}