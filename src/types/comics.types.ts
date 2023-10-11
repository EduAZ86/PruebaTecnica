
export type comicCardType = {
    id:string;
    title:string;
    name:string;
    page_count:number;
    price: number;  
    thumbnail:string;
    images:string[];
    creators:{
        name:string;
        role:string;
    }[]
}