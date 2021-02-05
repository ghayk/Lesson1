import React from 'react'

const Actions = ({ plus, minus, zero }) => {
   return (
      <div className='Actions'>
         <button onClick={minus}>-</button>
         <button onClick={zero}>0</button>
         <button onClick={plus}>+</button>
      </div>
   )
}
export default Actions