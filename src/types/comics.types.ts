
export type comicCardType = {
    id:number;
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
    id:number;
    title:string;
    creators:{
        resourceURI:string
        name:string;
        role:string;
    }[]
}

export type comicByIDType = {
    id:number;
    title:string;
    page_count:number;
    price: number;
    description:string|null;
    format:string;  
    thumbnail:string;
    images:string[];
    series:string;    
    creators:{
        resourceURI:string
        name:string;
        role:string;
    }[];
    characters:string[];
    stories:string[];
    collectedIssues:string[];
}