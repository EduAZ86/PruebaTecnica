import React from "react";
import ComicCard from "../ComicCard/ComicCard";
import { comicCardType } from "../../types/comics.types";
import { useSelector } from "react-redux";
import { RootState } from "../../toolkit/store";

const CardMapper:React.FC = () => {

    const comics = useSelector((state: RootState) => state.comics.comics);
    console.log(comics);
    
    return(
        <div>
            {comics && comics.map((item:comicCardType, index:number) => {
                return(
                    <ComicCard
                        key={index}
                        comic = {item}
                    />
                )
            })}
        </div>
    )
}

export default CardMapper