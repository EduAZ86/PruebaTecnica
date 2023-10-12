
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch} from '../../toolkit/store'
import { setComics } from '../../toolkit/comic/comicSlice'
import { useGetPageComicsQuery } from '../../toolkit/services/comicApi'
import CardMapper from '../../components/CardMapper/CardMapper';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Home.module.css'

const Home:React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [ offset, setOffset ] = useState(0)
    const loader = useRef(null)

    const { data, isLoading, refetch } = useGetPageComicsQuery({limit: 20, offset: offset})

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        }
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, [offset]);
    
    useEffect(() => {
        if (offset > 0) {
            refetch()            
        }
    },[offset])

    useEffect( () => {
      if (data) {
        dispatch(setComics(data))      
      }
    },[data, dispatch])

    const handleObserver = (entities:any) => {
        const target = entities[0];
        if (target.isIntersecting) {   
            setOffset((prev) => prev + 20)
        }
    }
    
    return(
        <>
        {!isLoading
        ?
        <div className={styles.container}>
            <span className={styles.background}/>
            <NavBar/>
            <CardMapper
                offset = {offset}
            />
            <div className={styles.loadingContainer} ref={loader}>
                <h2 className={styles.loading}>Cargando...</h2>
            </div>
        </div>
        :
        <></>
        }
        </>
    )
}

export default Home