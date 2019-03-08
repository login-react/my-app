import React from 'react'
import {Input} from 'antd'
import { Player } from 'video-react';
const video ={
  color: 'red'
}
const bgColor ={
  width: '100px',
  height: '100px',
  backgroundColor: 'red'
}

const inlines = {
 backgroundColor: 'grey',
 width: '100%',
 height:'40px',
 lineHeight: '40px',
 color: 'block',
 display:'inline',
 borderRadius:'5px',
 marginLeft: '10px',
 //  两个是上下20px 左右  
 padding: '5px 5px'

 // 三个四个是上左右下
}

const parent = {
  width: '100%',
  height: '20px',
  textAlign:'center',
  border: '1px solid grey'
}
export default class Video extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      newData: [],
      useData:[],
      isToggleOn: true,
      data:new Date()
    }
  }
  /**
   * 入口
   */
  componentDidMount(){
    this.getVideoList()
    /**
     * 逻辑写在下面  this.tick()
     */
    this.timerID = setInterval(() => this.tick(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  
  tick = () => {
    this.setState({
      data: new Date()
    })
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
        name: '123123123',
        count: 3
      },
    ]
    this.setState({
      newData: data || [{}],
      /**
       * 复制数据
       */
      useData: data || [{}]
    })
  }

  handleClick = () => {
    this.setState({
      isToggleOn:!this.state.isToggleOn
    })
  }

  handleClicValue = () => {
    const value = '13'
    this.props.grant(value)
  }

  /**
   * 获取当前值
   */
  getCurrentValue = (e) => {
    //处理逻辑
    this.changeStateData(e.target.value)
  }

  /**
   * 当输入框输入的值，进行模糊查询
   */
  changeStateData = value => {
    const useData = this.state.newData.filter( v => v ? v.name.includes(value) : true)
    this.setState({
      useData: useData
    })
  }


  render(){
    const {msg} = this.props
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
       <div>
         大家都在搜<hr/>
       </div>
       <div style={parent}>
         <div style={inlines}>狼与兄弟</div>
         <div style={inlines}>那些热血飞扬的日子</div>
       </div>
       <button onClick={this.handleClick}>
          {
            this.state.isToggleOn ? 'ON' :'OFF'
          }
       </button>
       <div style={{color: 'red'}}>{this.state.data.toLocaleTimeString()}</div>
       <span>{msg}</span>
       <div style={{width: '100px', height: '100px',backgroundColor: 'blue'}} onClick={this.handleClicValue}>
         测试子父节点传值
       </div>
       <Input placeholder="请输入当前值" onChange={this.getCurrentValue}/>

       {/* 展示输入框模糊查询过的数据 */}
       <ul>
         {
           this.state.useData.map((item,index) => {
             return <li key={index}>
                {item.name}
             </li>
           })
         }
       </ul>
      </div>
    )
  }
}