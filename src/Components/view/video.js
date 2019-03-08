import React from 'react'
import { Player } from 'video-react';
const video ={
  color: 'red'
}
const bgColor ={
  width: '100px',
  height: '100px',
  backgroundColor: 'red'
}
export default class Video extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      newData: []
    }
  }
  /**
   * 入口
   */
  componentDidMount(){
    this.getVideoList()
  }


  /**
   * 逻辑代码
   */
  getVideoList = () => {
    const data = [
      {
        id:1,
        name: '视频一',
        count: 2
      },
      {
        id:2,
        name: '视频二',
        count: 3
      },
    ]
    console.log('data :', data);

    this.setState({
      newData: data,
    })
  }


  render(){
    return(
      <div>
       <div style={video}> 热门视频</div>
       {
         this.state.newData.map(item =>{
           return <div>
           <div style={bgColor}>
            
           </div>
            <div>{item.name}</div>
            <div>{item.count}</div>
         </div>
         })
       }
      </div>
    )
  }
}