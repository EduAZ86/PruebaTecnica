import React from "react";
import { comicCardType } from "../../types/comics.types";
import styles from './ComicCard.module.css'
interface ComicCardProps {
    comic: comicCardType;
  }

const ComicCard:React.FC<ComicCardProps> = ({comic}) => {

    const {      
        title,
        price,
        page_count,
        creators,
        thumbnail,
    } = comic


    return(
        <div className={styles.container}> 
            <img 
            className={styles.imageBackground}
            
            src={thumbnail} />
            <div className={styles.header}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <span className={styles.backgroundHeader}/>
                { creators.length > 0 &&  <ul className={styles.creators}>
                        {creators.map((creator, index) => {
                            return(
                                <div
                                    className={styles.creator}
                                    key={index}
                                >
                                    <span className={styles.name}>
                                        {creator.name}
                                    </span>
                                    <span className={styles.role}>
                                        {creator.role}
                                    </span>
                                </div>
                            )
                        })}
                    </ul>}
            </div>
            <div className={styles.footer}>
                <button className={styles.carButton}>
                    agregar al carrito
                </button>
                <span className={styles.backgroundFooter}/>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>
                        {price} U$d
                    </span>
                    <span className={styles.pages}>
                        paginas {page_count}
                    </span>
                </div> 
            </div>  
        </div>
    )
}

export default ComicCard