// import axios from 'axios'
// import { Dispatch } from 'redux'
// import { createHash } from '../../utils/hasher'
// import { comicCardType } from '../../types/comics.types'
// import { updateComicPages } from './comicSlice'

// const URL_COMICS = 'https://gateway.marvel.com:443/v1/public/comics?'

// export const getPageOfComics = (limit:number,offset:number) => async (dispatch:Dispatch<any>) => {
//     try {
//         const hashApiKey = createHash()
//         const { data } = await axios.get(URL_COMICS, {
//             params:{
//                 apikey: hashApiKey,
//                 limit:limit,
//                 offset:offset
//             }
//         })
//         if (data.data.results) {
//             const arrayDataComics:comicCardType[] = data.data.results.map((comic:any) => {
//                 const comicCardData = {
//                     id: comic.id,
//                     title: comic.title,
//                     name: comic.name,
//                     page_count: comic.pageCount,
//                     price: comic.prices[0].price,
//                     thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
//                     images: comic.images.map((image:any) => image.path+image.extensions),
//                     creators: comic.creators.items
//                 }
//                 return comicCardData
//             })            
//             dispatch(updateComicPages(arrayDataComics))
//         }
//     } catch (error:any) {
//         console.log(error.userMessage);        
//     }
// }