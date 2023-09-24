import { useState } from "react"


export const useActiveImg = (imgInitial : string)=>{
    const [img, setImg] = useState(imgInitial);

    const setImgActive = (img : string)=>{
        setImg(img);
    }

    return {img, setImgActive};
}