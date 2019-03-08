import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'antd'
export default  class ParentChild extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            age: 3
        }


    }

  

    handleAdd = () =>{
        this.props.grent(this.state.age ++);
    }

   


    render(){
        /**
         * 传参
         */
        {console.log(this.props.params)}
        return(
           <div>
               <input type="text" />
               <button onClick={this.handleAdd}>测试</button>
           </div>
        );
    }
}
