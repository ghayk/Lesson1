import React from 'react'

const Actions = ({ plus, minus }) => {
   return (
      <div className='Actions'>
         <button onClick={plus}>+</button>
         <button onClick={minus}>-</button>
      </div>
   )
}
export default Actions