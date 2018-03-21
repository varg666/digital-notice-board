import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Admin from './components/Admin/Admin';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Admin />, document.getElementById('root'));
registerServiceWorker();
