import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createHash } from '../../utils/hasher'
import { comicCardType } from '../../types/comics.types'
export const comicApi = createApi ( {
    reducerPath: 'marvelApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://gateway.marvel.com:443/v1/public/'
    }),
    endpoints: (builder) => ({
        getPageComics: builder.query({
            query: ({limit, offset}) => {
                const hashApiKey = createHash()
                return{
                    url: '/comics',
                    params:{
                        ts:hashApiKey.ts,
                        apikey:hashApiKey.apikey,
                        hash: hashApiKey.hash,
                        limit:limit,
                        offset:offset
                    }
                }
            },
            transformResponse: (response:any) => {
                const arrayDataComics:comicCardType[] = response.data.results.map((comic:any) => {
                    const comicCardData = {
                        id: comic.id,
                        title: comic.title,  
                        page_count: comic.pageCount,
                        price: comic.prices[0].price,
                        thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                        images: comic.images.map((image:any) => image.path+image.extensions),
                        creators: comic.creators.items
                    }
                    return comicCardData
                })
                return arrayDataComics
            },
        })
    })
})

export const { useGetPageComicsQuery } = comicApi