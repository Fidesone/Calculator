import React, {Fragment} from 'react';
import '../css/contador.css';



const Contador = ({onClick, label}) => {
  return (
    <Fragment> 
      <div className='container_button'>
      <button className='button' onClick={onClick}>{label}</button>
      </div>
      
    </Fragment>
  )
}

export default Contador;