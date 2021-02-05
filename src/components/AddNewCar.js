import React, { Component } from 'react'

class AddNewCar extends Component {
   constructor(props) {
      super(props)
   }
   state = {
      isBlock: true,
      arrObj: {},
      obj: {},
      title: '',
      url: '',
      text: ''
   }
   Display = () => {
      this.setState({ isBlock: !this.state.isBlock })
   }
   Title = (e) => {
      this.setState({ title: e.target.value })
   }
   Url = (e) => {
      this.setState({ url: e.target.value })
   }
   Text = (e) => {
      this.setState({ text: e.target.value })
   }
   Click = () => {
      if (this.state.title.length > 0 && this.state.url.length > 0 && this.state.text.length > 0) {
         this.setState({
            obj: this.state.obj['title'] = this.state.title,
            obj: this.state.obj['imgAlt'] = this.state.title,
            obj: this.state.obj['img'] = this.state.url,
            obj: this.state.obj['text'] = this.state.text,
            obj: this.state.obj['active'] = false,
            obj:{},
            arrCard: this.props.arrCard.push(this.state.obj)
         })
         this.props.click()
         console.log(this.props.arrCard);
      } else alert('err')
   }
   render() {

      return (
         <div>
            <button onClick={this.Display} className="DivBtnAddNewCar">Add new car</button>
            <div className={`DivInput ${this.state.isBlock ? 'active' : ''}`}>
               <input type='text' placeholder='Title' onChange={this.Title} />
               <input type='text' placeholder='URL img' onChange={this.Url} />
               <input type='text' placeholder='Text' onChange={this.Text} />
               <button onClick={this.Click}>Add</button>
            </div>
         </div>
      )
   }
}
export default AddNewCar