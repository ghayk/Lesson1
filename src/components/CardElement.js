import React from 'react'

function CardElement(props) {
   return (
      <div className='CardEllCon'>
         <p className='title'>{props.item.title}</p>
         <img className='img' src={props.item.img} alt={props.item.imgAlt} />
         <p className='text'>{props.item.text}</p>
      </div>
   )
}
export default CardElement