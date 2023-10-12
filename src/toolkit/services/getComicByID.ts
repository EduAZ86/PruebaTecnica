import axios from "axios";
import { createHash } from "../../utils/hasher";
import { comicByIDType } from "../../types/comics.types";


export const getComicByID = async (id: any) => {
    try {
        const { ts, apikey, hash } = createHash();
        const url = `https://gateway.marvel.com/v1/public/comics/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`;
        const resp = await axios.get(url)
        if (resp) {
            
            const response = resp.data.data.results[0];
            const tempElement = document.createElement('div');
            const rawHTML = response.description
            tempElement.innerHTML = rawHTML;

            // Obtener el texto sin etiquetas utilizando textContent
            const textWithoutTags = tempElement.textContent;
            
            
            const comic:comicByIDType = {
                id: response.id,
                title: response.title,
                page_count: response.pageCount,
                price: response.prices[0].price,
                description: textWithoutTags,
                format: response.format,
                thumbnail: `${response.thumbnail?.path}.${response.thumbnail.extension}`,
                images: response.images.map((image:any) => `${image.path}.${image.extension}`),
                creators: response.creators.items,
                series: response.series.name,
                collectedIssues: response.collectedIssues.map((item:any) => item.name),
                stories: response.stories.items.map((item:any) => item.name),
                characters: response.characters.items.map((item:any) => item.name)
            }
            return comic
        }



    } catch (error) {
        console.log(error);
        return undefined
    }    
};