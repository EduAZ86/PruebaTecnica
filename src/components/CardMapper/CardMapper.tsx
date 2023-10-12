import React,{ useEffect, useState } from "react";
import ComicCard from "../ComicCard/ComicCard";
import { comicCardType } from "../../types/comics.types";
import { useSelector } from "react-redux";
import { RootState } from "../../toolkit/store";
import styles from './CArdMapper.module.css'

interface CardMapperProps{
    offset:number
}

const CardMapper:React.FC<CardMapperProps> = ({offset}) => {

    const comics = useSelector((state: RootState) => state.comics.comics);

    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(offset)
      }, [offset]);
    return(
        <div className={styles.container}>  
            {comics && comics.map((item:comicCardType, index:number) => {
                return(
                    <ComicCard
                        key={`${item.id}.${index}`}
                        comic = {item}
                    />
                )
            })}
        </div>
    )
}

export default CardMapper