import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Parent from './Parent/Parent'
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from  './Components/reducer'
import 'antd/dist/antd.css'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Parent />
  </Provider>,
   document.getElementById('root')
);
registerServiceWorker();
