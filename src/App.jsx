import { useEffect, useState } from 'react'
import './App.css'
import Matrixmaxer from './Matrixmaxer'
import Matrix from './Matrix'

function App() {
  let cnt=0
  const [matrix,setMatrix] = useState([])
  const [seq,setSeq] = useState([])
  const [tot,setTot] = useState(0)
  const [count,setCount] = useState(0)
  const [select,setSelect] = useState([])

  useEffect(()=>{
    if(tot==count && tot != 0) {
      setSelect([...seq])
      setSeq([])
      setTot(0)
      setCount(0)
    }
  },[tot])

  useEffect(() => {
    console.log(select);
    select.forEach((ele, index) => {
      setTimeout(() => {
        setSeq(prevSeq => [...prevSeq, ele]);
      }, 200 * (index + 1))
    });
  }, [select]);

  const handleAdd = (x) => {
    if(! seq.includes(x)){
    setSeq([...seq,x])
    setTot(tot+1)
    }
  }

useEffect(()=>{
  setSeq([])
  setSelect([])
  matrix.forEach(element => {
    if(element==="1") {
        cnt+=1
}});
setCount(cnt)
},[matrix])

  return (
    <div className='app'>
      <h1>ClickBait Game</h1>
      <ul>
        <li>
          "Enter a 2d array of 0 and 1 e.g.<br /> 001<br /> 100<br /> 011
        </li>
        <li>
          Click on boxes in any pattern until all turns green
        </li>
        <li>
          Watch your pattern play back
        </li>
      </ul>
      <Matrixmaxer setMatrix={setMatrix} />
      {matrix && <Matrix handleAdd={handleAdd} matrix={matrix} seq={seq} />}
    </div>
  )
}

export default App
