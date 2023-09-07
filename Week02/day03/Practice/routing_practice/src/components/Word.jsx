import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {
    const { word,text,bg } = useParams()
    return (
        <>
        {isNaN(word) ?
            <h2 style={{color: text ,backgroundColor: bg}} >The Word is {word}</h2>
            :<h2>The Number is {word}</h2>
            
    }
        </>
    )
}

export default Word