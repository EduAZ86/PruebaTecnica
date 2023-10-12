import React from "react";
import styles from './StringMapper.module.css'

interface StringMapperProps{
    arrayStrings:string[];
    title:string
}

const StringMapper:React.FC<StringMapperProps> = ({arrayStrings, title}) => {
    return(
        <>
            { arrayStrings.length > 0 &&
                <div className={styles.container}>
                    <h2 className={styles.title}>{title} :</h2>
                    <div className={styles.stringContainer}>
                        {arrayStrings.map((item:string,index:number) => {
                            return(
                                <span
                                    key={index}
                                    className={styles.string}
                                >
                                    {item}
                                </span>
                            )
                        })}        
                    </div>   
                </div>
            }
        </>
        
    )
}

export default StringMapper