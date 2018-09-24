import React from 'react';
import ReactDOM from 'react-dom';
export default  class ParentChild extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            age: 3
        }


    }

    /**
     * 子节点传给父节点
     * 1、 定义一个点击事件
     * 2、 编写函数
     * 3、 在父节点中会有一个grent,是通过子节点传过来的  <ParentChild params={this.state.message} grent={this.add}/>
     */
    handleAdd = () =>{
        this.props.grent(this.state.age);
    }


    render(){
        {console.log('I am Child')}
        return(
           <div>
               {
                   this.props.params == '我是父亲' && console.log('-------------->>>', this.props.params)
               }
               <input type="text" />
               <button onClick={this.handleAdd}></button>
           </div>
        );
    }
}
