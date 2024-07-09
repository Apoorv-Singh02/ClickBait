import React, { useState } from 'react'
import './Matrixmaxer.css'

const Matrixmaxer = ({matrix,setTot,setMatrix,tot}) => {
    const [size,setSize] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setMatrix(size.split(""))
        setSize("")
    }

  return (
    <div className='matrixmaxer'>
        <form onSubmit={handleSubmit}>
            <textarea name="matrixmaxer" value={size} style={{resize:'none'}} onChange={(e)=>{
                setSize(e.target.value)
            }}/>
            <button type="submit" className='build'>Build</button>
        </form>
    </div>
  )
}

export default Matrixmaxer