import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={()=> <div>Loading...</div>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </Provider>
);
