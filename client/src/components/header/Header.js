import React from "react";
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faSearch ,faBell} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


function Header() {
  
  return (
    <div className="h-menu">
      <nav>
        
        <Link to="/"><li>Accueil</li></Link>
        <Link to="/patients"><li>Patients</li></Link>  
        <Link to="/ordonnances"><li>Ordonnances</li></Link>     
        <Link to="/medecins"><li>Médecins</li></Link>
        <Link to="/medicaments"><li>Médicaments</li></Link>
    
       
        
       
      </nav>
      <div className="h-shearch-conteiner">
      <FontAwesomeIcon icon={faSearch}  className="h-shearch-icon"/>
      <input className="h-shearch"></input>
      </div>
      
      <div className="h-notif">
        <FontAwesomeIcon icon={faBell}  className="h-bell-icon"/>
      </div>
    </div>
  );
}
export default Header;