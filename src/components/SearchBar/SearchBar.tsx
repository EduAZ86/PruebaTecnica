import React, { useEffect, useState } from "react";
import styles from './SearchBar.module.css'
import { useGetComicsByNameQuery } from "../../toolkit/services/comicApi";
import { useDispatch } from "react-redux";
import { cleanComicsByName, setComicsByName } from "../../toolkit/comic/comicSlice";
import { AppDispatch } from "../../toolkit/store";

const SearchBar:React.FC = () => {

    const [ nameComic, setNameComic] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>()
    const { data, refetch } = useGetComicsByNameQuery(nameComic, { skip: nameComic === ''})
   
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameComic(event.target.value)
    }

    const onClean = () => {
        setNameComic('')
        dispatch(cleanComicsByName())
    }

    const onSearch = (name:string) => {
        if (name) {
            if (data) {
                dispatch(setComicsByName([data[0]]))                
            }
        }
    }
    useEffect(() => {
        if (nameComic.trim() !== '') {
            refetch()
            if (data) {
                dispatch(setComicsByName(data))                
            }            
        } else{
            dispatch(cleanComicsByName())
        }    
        
    },[nameComic])
  
    
    return(
        <div className={styles.container}>
            <input 
                onChange={handleChange}
                value={nameComic} 
                type='text' 
                placeholder='Search' 
                className={styles.input}/>
            <button 
                onClick={onClean}
                className={styles.buttonX}>X</button>
            <button 
                onClick={() => onSearch(nameComic)} 
                className={styles.buttonSearch}>🔎</button>

        </div>
    )
}

export default SearchBar