import React from "react";
import { comicCardType } from "../../types/comics.types";

interface ComicCardProps {
    comic: comicCardType;
  }

const ComicCard:React.FC<ComicCardProps> = ({comic}) => {

    const { id, name } = comic


    return(
        <div>
            <div>
                <span>{id}</span>
                <span>{name}</span>
                
            </div>

        </div>
    )
}

export default ComicCard