import React from 'react';
import todoList from './Components/todoList';

export default  class App extends React.Component {

    constructor() {
        super();
        this.state = {
            list: [],
            inputvalue: ''

        }
    }

    onClick = (e) => {
        console.log(...this.state.list)
        this.setState({
            list:[...this.state.list, this.state.inputvalue],
            inputvalue:''
        });
    }

    onChange = (e) => {
        console.log(e.target.value);
        this.setState({
            inputvalue: e.target.value
        });
    }


    render() {
        return (
            <div>
                {/*<input type="text" ref="thisValue"/>*/}
                <input type="text" value={this.state.inputvalue} onChange={this.onChange.bind(this)}/>
                <input type="button" value="add todoList" onClick={this.onClick.bind(this)}></input>
                <ul>
                    {
                        this.state.list.map((item, index) => (<li key={index}>{item}</li>))
                    }
                </ul>
            </div>
        );
    }
}




