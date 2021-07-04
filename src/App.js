import React, { useState ,useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor]=useState('');
  const [Error,setError]=useState(false);
  const [List,setList]=useState(new Values('#800080').all(10));

  const click =(event)=>
  {
    event.preventDefault();
    //setError(false)

    try{
      let colors = new Values(color).all(10);
     setList(colors);
     console.log(colors);
      
    }
    catch(error){
      setError(true);
      console.log(error.message);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [Error])
 

  return <>
   <section className='container'>
    <h3>Color Generator</h3>
    <form onSubmit={click}>
      <input type = "text" className={Error?'error':null}
      value={color}
      onChange={(event)=>setColor(event.target.value)}
      placeholder='#800080'
      />
      <button className='btn'>Submit</button>
    </form>
    </section>
    <section className='colors'>
      {List.map((color , index)=>(
        <SingleColor key={index} {...color} index={index} HEX={color.hex} />
      )
      )}
    </section>
</>
}

export default App