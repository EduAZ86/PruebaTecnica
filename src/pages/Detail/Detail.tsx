import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import styles from './Detail.module.css'
import { getComicByID } from '../../toolkit/services/getComicByID'
import { comicByIDType } from '../../types/comics.types'
import ImageViewer from '../../components/ImageViewer/ImageViewer'
import StringMapper from '../../components/StringMapper/StringMapper'


const Detail: React.FC = () => {
    const [comicByID, setComicByID] = useState<comicByIDType>();
    const { id } = useParams<any | undefined>();
    
    const fetchComic = async () => {        
        const comic = await getComicByID(id)
        if (comic) {
            setComicByID(comic);            
        } 
    };
    useEffect(() => {
        fetchComic();
    }, [id]);
    console.log(comicByID);
    
        
    if (comicByID) {
        return (
            <div className={styles.container}>     
                <div className={styles.header}>
                    <h1 className={styles.title}
                    >{comicByID.title}</h1>
                </div>
                <div className={styles.body}>
                    <div className={styles.left}>
                        <ImageViewer
                            arrayImages={comicByID.images}
                            />
                        <div className={styles.formatContainer}>
                            <span>formato {comicByID.format}</span>
                            <span>paginas {comicByID.page_count.toString()}</span>
                        </div>
                    </div>
                    <div className={styles.right}>
                            <h2 className={styles.price}>{comicByID.price} U$d</h2>
                            <p className={styles.description}                    
                            >{comicByID.description}</p>
                            <span className={styles.autores}>autores</span>
                            { comicByID.creators.length > 0 && 
                                <ul className={styles.creators}>
                                    {comicByID.creators.map((creator, index) => {
                                        return(
                                            <div
                                                className={styles.creator}
                                                key={index}
                                            >
                                                <span className={styles.name}>
                                                    {creator.name}
                                                </span>
                                                <span className={styles.role}>
                                                    {creator.role}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </ul>
                            }

                    </div>
   
                </div>
                <div className={styles.footer}>
                    <StringMapper
                        key='personajes'
                        arrayStrings={comicByID.characters}
                        title='Personajes'
                    />
                    <StringMapper
                        key='historias'
                        arrayStrings={comicByID.stories}
                        title='Historias'
                    />
                    <StringMapper
                        key='colecciones'
                        arrayStrings={comicByID.collectedIssues}
                        title='Colecciones'
                    />

                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        );
    }
}

export default Detail