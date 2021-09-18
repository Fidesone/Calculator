import React, {Fragment} from 'react';
const {useState}=React;



const AutoContador =()=> {

  const [contador_value, update_contador]= useState(5);
    setInterval(() =>{
        update_contador(contador_value + 1);
    },2000);
    
  return (
    <Fragment>
      <h2>Contador Automatico: </h2>
      <h2>{contador_value}</h2>
     
    </Fragment>
  )
}

export default AutoContador;