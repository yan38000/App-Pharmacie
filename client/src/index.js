import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Header from './components/header/Header';

import Patient from './views/Patient/Patient';
import Ordo from './views/Ordo/Ordo';
import Medic from './views/Medic/Medic';
import Med from './views/Med/Med'

ReactDOM.render(
  <React.StrictMode>
    <div className="s-all">
        <div className="s-left">
          <div className="s-left-top"></div>
          <div className="s-left-bottom"></div>
        </div>
        
        <Router>
          <div className="s-center">
            <div className="s-header">
              <Header/>
            </div>
          
            <div className="s-conteiner">
              <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/patients" element={<Patient/>}/>
                <Route path="/ordonnances" element={<Ordo/>}/>
                <Route path="/medecins" element={<Med/>}/>
                <Route path="/medicaments" element={<Medic/>}/>
              </Routes>
            </div>

         
          
          
          
          
          
         



          </div>
        </Router>

        

        <div className="s-right">
          <div className="s-right-top"></div>
          <div className="s-right-bottom"></div>
        </div>
      </div>
      
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * <div className="s-all">
        <div className="s-left">
          <div className="s-left-top"></div>
          <div className="s-left-bottom"></div>
        </div>

        <div className="s-center">
          <div className="s-header">
            
           
            
          </div>
          
        </div>

        <div className="s-right">
          <div className="s-right-top"></div>
          <div className="s-right-bottom"></div>
        </div>
      </div>
 */

    