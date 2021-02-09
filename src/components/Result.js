import React from 'react';

class Result extends React.Component {
   render() {
      const { value } = this.props
      return (
         <div>
            <p>{value}</p>
         </div>
      )
   }
}
export default Result 