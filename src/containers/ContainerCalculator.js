import React from 'react';
import ContainerScreen from '../containers/ContainerScreen'
import ContainerButtons from '../containers/ContainerButtons'



const ContainerCalculator=()=>{
    return(
        <div className= "container_calculator">
            <ContainerScreen/>
            <ContainerButtons/>
        </div>
    )
}
export default ContainerCalculator;