import  React from 'react';
import  ReactDOM from 'react-dom';
import {Button,Breadcrumb} from 'antd'
import Counter from '../Components/container'
import Views from '../Components/view'
import ParentChild from '../Components/Parent-child';
// import ShowDetail from '../Components/shop'

const constorStyle ={
    cursor: 'pointer'
}
export default  class Parent extends React.Component {

    constructor(props){
        super(props);
        this.state={
            message: '我是父亲',
            displayData:[],
            ageShow: ''
        }
    }

    add = (age) => {
        this.setState({
            ageShow: age 
        })
    }
    /**
     * 获取接口数据
     */
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts').
        then(response => response.json()).
        then(data => {
            this.setState({
                displayData : data
            })
        })
    }
    render(){
        return(
        <div>
            <Breadcrumb separator=">">
                <Breadcrumb.Item style={constorStyle}>Home</Breadcrumb.Item>
                <Breadcrumb.Item style={constorStyle}>视频网站</Breadcrumb.Item>
                <Breadcrumb.Item style={constorStyle}>结论</Breadcrumb.Item>
           </Breadcrumb>
           <br/>
            <ParentChild params={this.state.message} grent={this.add}/>
            <Views/>
            {/* <ShowDetail/> */}
            <Counter/>
            {/* <span style={{color: 'red', fontWeight: 'bold'}}>{this.state.ageShow}</span>
            <Button type="primary">测试antd</Button> */}
           <ul>
               {/* {
                   this.state.displayData.map((item,index) => {
                       return(
                          <div>
                                <li key={index}>{item.title}</li>
                                <p style={{fontSize: '16px'}}>{item.body}</p>
                          </div>
                       )
                   })
               } */}
           </ul>
           
        </div>)
    }
}
