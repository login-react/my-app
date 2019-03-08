import React, {PropTypes} from 'react'
import {Button} from 'antd'

export default class Counter extends React.Component {

  
  render(){
    const {value,onIncreaseClick,onReduceClick} = this.props
    return(
      <div>
        {/* <span style={{color: 'red'}}>是否有值{value > -2 && value}</span>
        <Button type="primary"  onClick={onIncreaseClick}>Increase</Button>
        <Button type="danger" onClick={onReduceClick}>减少</Button> */}
      </div>
    )
  }
}

Counter.propTypes = {
  // onIncreaseClick: PropTypes.func.isRequired
}