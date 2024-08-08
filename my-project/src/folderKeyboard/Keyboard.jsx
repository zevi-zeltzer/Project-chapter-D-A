
import React from 'react'

function Keyboard(props) {

  return (
    <div className='cher'>
        <button className='butCher' onClick={props.addText}>{props.char}</button>
        
    </div>
  )
}

export default Keyboard


