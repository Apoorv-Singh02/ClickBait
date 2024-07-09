import React, { useState, useEffect } from 'react'
import "./Box.css"

const OneBox = ({index,handleAdd,seq}) => {
    const [cur,setCur] = useState("rgb(220, 220, 220, 0.5)")

    useEffect(()=>{
        if(seq.includes(index)) {
            setCur("rgba(17, 255, 160, 1)")
        }
        else {
            setCur("rgb(220, 220, 220, 0.5)")
        }
    },[seq])
    
  return (
    <div className='onebox' style={{backgroundColor:`${cur}`}} onClick={()=>{
        handleAdd(index)
    }}>
    </div>
  )
}

export default OneBox