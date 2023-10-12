import React,{useEffect, useState} from "react";
import styles from './ImageViewer.module.css'

interface ImageViewerProps {
    arrayImages:string[]
}

const ImageViewer:React.FC<ImageViewerProps> = ({arrayImages}) => {
    const [currentIndexImage, setCurrentIndexImage] = useState(0)
    const [currentImage, setCurrentImage] = useState(arrayImages[0])
    useEffect(()=>{
        setCurrentImage(arrayImages[currentIndexImage])

    },[currentIndexImage, arrayImages])

    const limit = (num:number) => {

        if (num < 0) {
            num = (arrayImages?.length-1)
        }    
        if (num === arrayImages?.length) {
            num = 0
        }
        return num
    }   

    const handleNextImage = () => {
        setCurrentIndexImage((prevCurrentIndexImage) => limit(prevCurrentIndexImage + 1));
    }
    
    const handlePrevImage = () => {
        setCurrentIndexImage((prevCurrentIndexImage) => limit(prevCurrentIndexImage - 1));
    }

    const handleSelectIndex = (index:number) => {
        setCurrentIndexImage(index)
    }

        
    const handleRotate = (event:React.WheelEvent<HTMLDivElement>) => {
        if (event.deltaY > 0) {
            handleNextImage ()
        }
        if (event.deltaY < 0) {
            handlePrevImage()
        }
    }


    return(
        <div className={styles.container}
        onWheel={(event)=>handleRotate(event)}
        >  
            <div className={styles.imageContainer}>
                <span 
                    className={styles.backgroundBlurImage}
                    style={{ backgroundImage: `url(${currentImage})` }} />

                <img 
                    className={styles.image}
                    src={currentImage}
                />

            </div>
            <div className={styles.previewContainer}>
                {arrayImages.map((image,index)=>{               
                    return(
                        <button
                            className={index === currentIndexImage? styles.currentImagePreview :styles.imagePreview}
                            onClick={() => handleSelectIndex(index)}
                            key={index}
                            style={{ backgroundImage: `url(${image})`}}                  
                        />
                    )
                })}
            </div>
            
        </div>
    )
}

export default ImageViewer