import React from 'react'
import { useParams } from "react-router-dom"
import styles from './Detail.module.css'

const Detail:React.FC = () => {
    const { id } = useParams()

    return(
        <div className={styles.container}>

        </div>
    )
}


export default Detail