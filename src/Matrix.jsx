import React from 'react'
import OneBox from './OneBox'
import ZeroBox from './ZeroBox'

const Matrix = ({matrix,handleAdd,seq}) => {
    const width = matrix.indexOf("\n")

  return (
    <div style={{display:`grid`, gridTemplateColumns:`repeat(${width},1fr)`,width:"80%",height:"80vw",maxWidth:"500px",gridGap:"10px", marginTop:"50px",maxHeight:"500px"}}>
        {matrix.map((letter,index)=>(
            letter=="1" ? <OneBox index={index} handleAdd={handleAdd} seq={seq} /> : letter=="0" && <ZeroBox />
        ))}
    </div>
  )
}

export default Matrix