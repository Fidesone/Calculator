import React from 'react';
import ReactDOM  from 'react';
import Contador from '../components/contador';
import Prueba from '../components/prueba';
const {useState}=React;

const App = () => {
    
    const [count, setCount]=useState(10)

    const incrementCount=increment=>{
        setCount(count + increment)
    }
    const decrementCount= decrement=>{
        setCount(count - decrement)
    }
    return (
        <div>
            <Contador increment= {1} onClickFunction={incrementCount} />
            <Contador decrement= {1} onClickFunction={decrementCount}/>
            <span> Contador: {count}</span>
            
            <Prueba></Prueba>

        </div>

    )
    
}

//ReactDOM.render(<App/>, document.getElementById('root'));
export default App;