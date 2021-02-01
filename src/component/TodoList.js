import React from 'react';

const style = {
   ul:{
      listStyle:'none',
      color:'red',
      display:'flex',
      justifyContent: 'center'

   }
}

function TodoList(){
   return(
      <ul style={style.ul}>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   )
}

export default TodoList;