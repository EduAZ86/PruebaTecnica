
export type comicCardType = {
    id:string;
    title:string;
    page_count:number;
    price: number;  
    thumbnail:string;
    images:string[];
    creators:{
        resourceURI:string
        name:string;
        role:string;
    }[]
}

export type comicSearchByNameType = {
    id:string;
    title:string;
    creators:{
        resourceURI:string
        name:string;
        role:string;
    }[]
}