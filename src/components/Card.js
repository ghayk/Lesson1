import React from 'react';
import CardElement from './CardElement'

function Card(props) {
   return (
      <div>
         <h1>Японские марки автомобилей</h1>
         <div className="flex">
            {props.arrCard.map((item, index) => {
               return (
                  <div className={`card ${item.active ? 'active' : ''} `}>
                     <CardElement item={item} key={index} />
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Card