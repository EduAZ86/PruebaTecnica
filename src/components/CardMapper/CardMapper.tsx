import React from "react";
import ComicCard from "../ComicCard/ComicCard";
import { comicCardType } from "../../types/comics.types";
import { useSelector } from "react-redux";
import { RootState } from "../../toolkit/store";
import styles from './CArdMapper.module.css'

const CardMapper:React.FC = () => {

    const comics = useSelector((state: RootState) => state.comics.comics);

    
    return(
        <div className={styles.container}>
            {comics && comics.map((item:comicCardType) => {
                return(
                    <ComicCard
                        key={item.id}
                        comic = {item}
                    />
                )
            })}
        </div>
    )
}

export default CardMapper