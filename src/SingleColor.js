import React, { useState, useEffect } from 'react'


const SingleColor = (props) => {
    const [alert,setAlert]=useState(false);
    const rgb=props.rgb.join(',');
   
   const HEX =`#${props.HEX}`;

   useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])
    

  return <article className={props.index<10 ? 'color':'color-light'} style={{background:`rgb(${rgb})`}}
  onClick={()=>{navigator.clipboard.writeText(HEX)
               setAlert(true)}
          }
  >
      <p className='percent-value'>{props.weight}%</p>
      <p className='color-value'>{HEX}</p>
      {alert && <p>color copied to clipboard in HEX</p>}
  </article>
}

export default SingleColor