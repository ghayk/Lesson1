import React from 'react'

const Actions = ({ plus, minus }) => {
   return (
      <div className='Actions'>
         <button onClick={minus}>-</button>
         <button onClick={plus}>+</button>
      </div>
   )
}
export default Actions