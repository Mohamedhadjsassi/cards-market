import React from 'react'

function Description({text}) {
  return (
   <h3>{text.slice(0,100)}...</h3>
  )
}

export default Description