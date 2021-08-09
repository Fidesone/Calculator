import React, {Fragment} from 'react';



const Contador =({increment, decrement,  onClickFunction})=> {
  const suma = () =>{
    onClickFunction(increment)
  }
  const resta = () =>{
    onClickFunction(decrement)
  }
   
  return (
    <Fragment>
      
      <button onClick={suma}>+{increment}</button>
      
      <button onClick={resta}>-{decrement}</button>
      
    </Fragment>
  )
}

export default Contador;