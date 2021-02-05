import React from 'react';
import CardElement from './CardElement'

function Card(props) {
   return (
      <div>
         <h1>Японские марки автомобилей</h1>
         <div className="flex">
            {props.arrCard.map((item, index) => {
               return (
                  <div onClick={() => props.Click(index)} className={` card ${item.active ? 'active' : ''} close`} key={index}>
                     <button onClick={() => props.Close(index)} className='btnClose'>x</button>
                     <CardElement item={item} />
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Card