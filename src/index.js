import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Parent from './Parent/Parent'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Parent />, document.getElementById('root'));
registerServiceWorker();
