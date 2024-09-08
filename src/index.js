import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import New from './new';
import Create from './Create';
import Newread from './newread';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App/> */}
  <New/>
  <Newread/>
  {/* <Create/> */}
  </React.StrictMode>
);