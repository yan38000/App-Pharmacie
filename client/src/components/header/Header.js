import React from "react";
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faSearch ,faBell} from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-menu">
      <nav>
        
        <li>Accueil</li>
        <li>Patients</li>
        <li>Ordonnances</li>
        <li>Médecins</li>
        <li>Médicaments</li>
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