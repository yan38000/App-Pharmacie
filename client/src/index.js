import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="structure">
      <div className="s-space">
          <div className="s-left"></div>
            <div className="s-center">
              <div className="s-header"></div>
              <div className="s-conteiner"></div>
            </div>
          <div className="s-right"></div>
      </div>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
