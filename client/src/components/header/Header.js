import React from "react";
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faSearch} from '@fortawesome/free-solid-svg-icons'
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
      <FontAwesomeIcon icon={faSearch}  className="h-shearch-icon"/>
      <input className="h-shearch"></input>
      <div className="h-notif">
        
      </div>
    </div>
  );
}
export default Header;