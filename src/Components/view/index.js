import React from 'react'
import Video from './video'


export default class HeadPage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
          <div>
            <Video/>
          </div>
      </div>
    )
  }
}