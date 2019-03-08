import React from 'react'
import Video from './video'


export default class HeadPage extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      msg: 'mac'
    }
  }
  /**
   * 子节点传过来的值
   */
  checkOut = (value) =>{
    console.log('================',value)
  }

  render(){
    return(
      <div>
          <div>
            <Video msg={this.state.msg} grant={this.checkOut}/>
          </div>
      </div>
    )
  }
}