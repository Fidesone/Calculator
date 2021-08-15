import React from 'react';
//import ReactDOM  from 'react';
import Contador from '../components/contador';
import AutoContador from '../components/AutoContador';
const {useState}=React;

const App = (props) => {
    const [contador_value, update_contador]= useState(5);
    setInterval(() =>{
        update_contador(contador_value + 1);
    },2000);
    
     const [count, setCount]=useState(10)

    
    return (
        <div>
            <h2>Contador manual</h2>
            
            <Contador onClick={() => setCount(value => value + 1)} label={"+1"} />
            <Contador onClick={() => setCount(value => value - 1)} label={"-1"} />
            <Contador onClick={() => setCount(value => value = 0)} label={"Reset"} />
            
            <span> Contador: {count}</span> 
            {/* <AutoContador/> */}
                
            

        </div>

    )
    
}

//ReactDOM.render(<App/>, document.getElementById('root'));
export default App;