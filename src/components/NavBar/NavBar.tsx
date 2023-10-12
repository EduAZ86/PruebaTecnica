import React from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../toolkit/store";
import { comicSearchByNameType } from '../../types/comics.types'
import { AppDispatch } from '../../toolkit/store'
import { cleanComicsByName } from '../../toolkit/comic/comicSlice'



const NavBar:React.FC = () => {
    const comicsByName = useSelector((state:RootState) => state.comics.comicsByName);
    const dispatch = useDispatch<AppDispatch>()    
    const onClean = (id:any) => {
        dispatch(cleanComicsByName())

    }   

    return(
        <div className={styles.container}>             
        <div className={styles.subContainer}>
            <SearchBar/>
            {comicsByName.length>0
            ?(<div className={styles.results}> 
                {comicsByName.map((comic:comicSearchByNameType)=>{
                    return(
                    <li
                        key={comic.id}
                    >
                        <NavLink                                
                            to={`/detail/${comic.id}`}
                             ><button 
                                onClick={(id) => onClean(id)}
                                >{comic.title}</button>
                        </NavLink>
                    </li>
                    )
                })}            
            </div>)            
            :(<></>)            
            } 
        </div>             
    </div>
    )
}

export default NavBar