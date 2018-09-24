import  React from 'react';
import  ReactDOM from 'react-dom';
import ParentChild from '../Components/Parent-child';
export default  class Parent extends React.Component {

    constructor(props){
        super(props);
        this.state={
            message: '我是父亲'
        }
    }

    /**
     * 子传值给父节点-
     * 1、先
     * @param age
     */
    add = (age) => {
        console.log('-------->父元素', age)
    }
    render(){
        {console.log('I am Parent')}
        return(<div>
            <ParentChild params={this.state.message} grent={this.add}/>
        </div>)
    }
}
