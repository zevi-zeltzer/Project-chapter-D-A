import React from 'react'

function Languages(props) {
  return (
    <button className={props.name} onClick={props.cheng}>{props.name}</button>
  )
}

export default Languages